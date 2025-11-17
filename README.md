# ☀️ Maricá Climate

**Maricá Climate** é uma ferramenta moderna e eficiente para o monitoramento mapeamento e registro de acidentes climáticos na cidade de Maricá, com o objetivo de fornecer dados em tempo real à Defesa Civil. Desenvolvido por alunos do IFF, o projeto visa aprimorar a segurança e organização dos chamados de emergencia local.

## 🚀 Sobre o Projeto

O aplicativo permite que os usuários reportem rapidamente ocorrências de acidentes através de um formulário. Esses dados são processados, geocodificados e exibidos em um mapa interativo, permitindo uma resposta rápida das autoridades e contribuindo para a segurança.

## 🎯 Objetivo

Oferecer um painel de monitoramento dos acidentes climático em tempo real fornecidos e acessivel aos moradores de Maricá. As informações são cruciais para o planejamento de atividades diárias e para atendimento emergencial e conscientização sobre condições climáticas adversas, servindo como uma ferramenta de apoio à segurança e preparação da comunidade.

## ⚙️ Como Funciona (Arquitetura)

A arquitetura do projeto é focada na obtenção e exibição de dados em tempo real:

1.  **Coleta de Dados:** A aplicação utiliza JavaScript para fazer uma requisição HTTP (via `fetch` ou `axios`) para a [**API OpenWeatherMap**](https://openweathermap.org/api), solicitando os dados climáticos específicos da cidade de Maricá.
2.  **Processamento:** O script JavaScript processa a resposta (em formato JSON) recebida da API, extraindo as informações relevantes (temperatura, umidade, vento, ícone do tempo, etc.).
3.  **Exibição no Dashboard:** Os dados processados são dinamicamente inseridos nos elementos HTML da página, atualizando o painel do usuário em tempo real.
4.  **Hospedagem:** A aplicação web (HTML, CSS e JS) é hospedada gratuitamente através do **GitHub Pages**.

## 📂 Estrutura de Arquivos

A aplicação é composta por arquivos principais organizados na raiz do repositório:

. 

├── index.html # Estrutura principal, CSS de estilização e o código JavaScript. 

└── README.md # Documentação do projeto.

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologia | Função |
| :--- | :--- | :--- |
| **Front-end** | HTML5, CSS3, JavaScript (ES6+) | Estrutura, Estilização e Lógica de Processamento. |
| **API de Dados** | [**OpenWeatherMap**](https://openweathermap.org/api) | Fornecimento de dados climáticos em tempo real. |
| **Hospedagem** | [**GitHub Pages**](https://pages.github.com/) | Hospedagem estática da aplicação web. |

## 🎓 Informações Acadêmicas

| Detalhe | Informação |
| :--- | :--- |
| **Instituição** | Instituto Federal Fluminense (IFF), Campus Maricá |
| **Curso** | Técnico em Informática para Internet (Concomitante) |
| **Disciplina** | Linguagem de Programação de Aplicações Móveis |

## 🎓 Professor: Djones Braz de Araujo Costa

Professor de Tecnologia da Informação (TI) no Instituto Federal Fluminense (IFF), Campus Avançado Maricá no Programa Formatec +Maricá.

**Formação e Pesquisa:**

* Graduado em Analise e Desenvolvimento de Sistemas (UNESA).
* Pós-graduado em Gestão de Projetos e Negócios em Tecnologia da Informação (IFRJ).
* Mestrando em Computação (UFF).
* Pesquisador no Laboratório de Projetos de Tecnologia da Informação, Negócios e Economia Criativa (LABPROJTNE) do IFRJ.
* Suas áreas de pesquisa e estudo incluem: Educação em T.I, Tecnologia da Informação (T.I), Inteligência Artificial (I.A), Blockchain e Cidades Inteligentes.
* **GitHub:** [@djones-braz](https://github.com/djones-braz)

## 👨‍💻 Equipe (Maricá Climate)

* Ana Clara Mendes Pessanha dos Santos
* João Victor Dornelas Leal
* Juliana Menezes de Holanda
* Junior Henrique de Lima
* Luccas Oliveira de Souza Lima
* Luis Miguell de Souza Martins
* Miguel Severino Cruz Patricio
* Nicolas Oliveira Santos
* Paulo Victor Souza dos Santos Santiago
* Sara Oliveira da Silva

## 🔗 Links

* **☀️ Aplicação (Dashboard):** [**https://maricaclimate20.github.io/MaricaClimate/**](https://maricaclimate20.github.io/MaricaClimate/index.html)
* **📂 Repositório GitHub:** [**https://github.com/maricaclimate20/MaricaClimate**](https://github.com/maricaclimate20/MaricaClimate)
