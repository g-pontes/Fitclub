## 🏋️‍♀️ Fitclub
Este projeto foi criado com uma interface moderna e interativa para tornar a experiência de navegação intuitiva e envolvente para quem busca mais informações sobre a academia, as aulas e serviços.

## 🎨 Visão Geral
O Fitclub é uma aplicação web de página única com foco em design responsivo e navegação fluida. Desenvolvido em HTML, CSS e JavaScript, o site traz tudo o que uma academia precisa para atrair clientes de forma prática e eficiente.

## 🔗 Demonstração Online
URL de demonstração: [Insira o link aqui quando estiver disponível]

## 📂 Estrutura de Diretórios

Abaixo está a estrutura do projeto para facilitar o entendimento de cada componente.

```
Fitclub/
├── public/
│   ├── assets/                # Imagens e recursos estáticos
│   ├── css/                   # Arquivos de estilo separados por seção
│   │   ├── style.css          # Estilos globais
│   │   ├── navbar.css         # Navbar
│   │   ├── hero.css           # Seção de destaque
│   │   ├── program.css        # Seção de programas
│   │   ├── class.css          # Seção de aulas
│   │   ├── about.css          # Seção sobre
│   │   ├── service.css        # Seção de serviços
│   │   ├── community.css      # Seção de comunidade
│   │   └── footer.css         # Rodapé
│   ├── js/
│   │   └── main.js            # Scripts para a navbar e rolagem
│   └── index.html             # Página principal
└── server.js                  # Servidor Express para servir os arquivos
```

## 🚀 Funcionalidades Principais

Navbar Dinâmica:
- Ajuste automático da navbar com o scroll, oferecendo uma navegação limpa e moderna.
- Menu mobile com animações de abrir e fechar para uma experiência otimizada em dispositivos móveis.

Seções Focadas no Cliente:
- Hero: Destaque visual com chamadas de ação atraentes.
- Programas: Apresentação dos programas de treinamento disponíveis.
- Classes: Informações detalhadas sobre as aulas.
- Sobre: História e missão da academia.
- Serviços: Benefícios adicionais oferecidos aos clientes.
- Comunidade: Seção interativa para incentivar o engajamento dos membros.

##🛠️ Configuração e Uso

Pré-requisitos
- Node.js instalado
- Passos para Rodar o Projeto

Instalar Dependências:
- No terminal, dentro da pasta do projeto, execute:
```
npm install express
```
Iniciar o Servidor:

- Na raiz do projeto, rode o comando:
```
node server.js
```
- O servidor estará disponível em http://localhost:3000.

Visualizar no Navegador:

- Abra seu navegador e acesse http://localhost:3000 para explorar o site do Fitclub.

## 💻 Tecnologias Utilizadas
- HTML5 e CSS3 para estrutura e estilização
- JavaScript para interatividade
- Express.js para servir arquivos estáticos e criar um servidor local
- Node.js para execução do servidor
