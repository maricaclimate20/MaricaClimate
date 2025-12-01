 // Scroll suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Adicionar classe ativa ao menu durante scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Animação de fade-in para elementos quando aparecem na tela
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.sobre, .galeria, .mapa, .formulario, .contato');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Adicionar efeito de hover no header ao scroll
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.padding = '0.5rem 0';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.padding = '1rem 0';
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Mensagem de confirmação ao clicar no botão do formulário
document.addEventListener('DOMContentLoaded', () => {
    const btnFormulario = document.querySelector('.btn-formulario');
    if (btnFormulario) {
        btnFormulario.addEventListener('click', (e) => {
            // Pequeno delay para feedback visual
            btnFormulario.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btnFormulario.style.transform = 'scale(1)';
            }, 100);
        });
    }
});

// Adicionar contador de visitantes (simulado)
const addVisitorCounter = () => {
    const footer = document.querySelector('.footer .container');
    const counter = document.createElement('p');
    const visits = Math.floor(Math.random() * 10000) + 5000;
    counter.textContent = `Visitantes: ${visits.toLocaleString('pt-BR')}`;
    counter.style.marginTop = '1rem';
    counter.style.fontSize = '0.9rem';
    counter.style.opacity = '0.8';
    footer.appendChild(counter);
};

document.addEventListener('DOMContentLoaded', addVisitorCounter);

// Preloader para imagens
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
        }
    });
});

// Adicionar efeito parallax suave no hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});
// Seleciona todos os containers de contato
document.querySelectorAll('.contato-item').forEach(item => {
    item.addEventListener('click', () => {
        const link = item.getAttribute('data-link'); // pega o link do atributo
        if (link) {
            window.open(link, '_blank'); // abre em nova aba
        }
    });
});

console.log('Maricá Climate - Maricá sempre quenrendo o melhor para os cidadões!');

        // Script para o menu responsivo
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav ul').classList.toggle('active');
        });
    

    <!-- Scripts do Novo Mapa (Leaflet e PapaParse) -->
        document.addEventListener("DOMContentLoaded", function( ) {
            // URL de publicação direta da sua planilha
            const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTMIXzA-1ovgNfDo3rqbtAFVS8KozAPmvKaSbmUhRfQUXevWDP2Pgg1Ed9FLTNm2l2krWYq3OKtKiik/pub?gid=896511975&single=true&output=csv';
            const urlComCacheBuster = `${sheetUrl}&t=${new Date( ).getTime()}`;

            // Centraliza o mapa na sua cidade (Maricá)
            // Coordenadas: [-22.9189, -42.8189]
            const map = L.map('map').setView([-22.9189, -42.8189], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            } ).addTo(map);

            // Função para converter endereço em coordenadas (Geocodificação)
            async function geocodeAddress(address) {
                try {
                    // Adicionamos ", Maricá, RJ" para tornar a busca mais precisa
                    const fullAddress = `${address}, Maricá, RJ`;
                    const geoUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(fullAddress )}`;
                    
                    const response = await fetch(geoUrl);
                    const geoData = await response.json();

                    if (geoData && geoData.length > 0) {
                        // Retorna as coordenadas do primeiro resultado encontrado
                        return { lat: parseFloat(geoData[0].lat), lon: parseFloat(geoData[0].lon) };
                    }
                } catch (error) {
                    console.error(`Erro ao geocodificar o endereço '${address}':`, error);
                }
                return null; // Retorna nulo se não encontrar o endereço ou se der erro
            }

            // --- MODIFICAÇÃO 1: Adicionando a função 'sleep' ---
            // Esta função cria uma promessa que resolve após um tempo (ms)
            const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

            Papa.parse(urlComCacheBuster, {
                download: true,
                header: true,
                skipEmptyLines: true,
                complete: async function(results) { // A função DEVE ser 'async' para o 'await' funcionar
                    const data = results.data;
                    let locationsFound = 0;
                    let count = 0;

                    console.log(`Iniciando geocodificação de ${data.length} endereços...`);

                    // Processa cada linha da planilha uma por uma
                    for (const item of data) {
                        count++;
                        const address = item["Logradouro da Ocorrência"];

                        if (address) {
                            
                            // --- MODIFICAÇÃO 2: A Pausa ---
                            // Espera 1 segundo (1000ms) ANTES de fazer a chamada
                            // Isso respeita a política de uso do Nominatim (1 req/seg)
                            console.log(`Processando item ${count}/${data.length}: "${address}". Aguardando 1 segundo...`);
                            await sleep(1000); 
                            
                            const coords = await geocodeAddress(address);

                            if (coords) {
                                locationsFound++;
                                const marker = L.marker([coords.lat, coords.lon]).addTo(map);
                                
                                let popupContent = '';
                                for (const key in item) {
                                    popupContent += `<b>${key}:</b> ${item[key]}  
`;
                                }
                                // Adiciona as coordenadas encontradas ao popup para conferência
                                popupContent += `<b>Coordenadas Encontradas:</b> ${coords.lat.toFixed(5)}, ${coords.lon.toFixed(5)}`;
                                
                                marker.bindPopup(popupContent);
                                console.log(`...Endereço encontrado e marcador adicionado.`);
                            } else {
                                console.warn(`...Endereço NÃO encontrado para: "${address}"`);
                            }
                        }
                    }

                    console.log(`Geocodificação concluída. ${locationsFound} marcadores adicionados.`);
                    if (locationsFound === 0 && data.length > 0) {
                        alert("Planilha carregada, mas nenhum endereço pôde ser convertido em coordenadas.");
                    }
                },
                error: function(error) {
                    console.error('Erro ao processar o CSV:', error);
                    alert(`Erro ao carregar os dados da planilha. Detalhe: ${error.message}`);
                }
            });

        });
