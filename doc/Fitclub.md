# Fitclub Project Documentation

## Estrutura do Projeto

Este projeto consiste em uma página de site estática para a academia Fitclub. O projeto inclui uma estrutura HTML, CSS para estilização e JavaScript para funcionalidades da navbar e navegação. O servidor Express serve a aplicação na porta 3000.

### Estrutura de Diretórios

```
Fitclub/
├── public/
│   ├── assets/
│   │   └── [Imagens e recursos estáticos]
│   ├── css/
│   │   ├── style.css          # Estilos gerais do site
│   │   ├── navbar.css         # Estilos para a barra de navegação
│   │   ├── hero.css           # Estilos para a seção hero
│   │   ├── program.css        # Estilos para a seção program
│   │   ├── class.css          # Estilos para a seção class
│   │   ├── about.css          # Estilos para a seção about
│   │   ├── service.css        # Estilos para a seção service
│   │   ├── community.css      # Estilos para a seção community
│   │   └── footer.css         # Estilos para o rodapé
│   ├── js/
│   │   └── main.js            # Funções JavaScript para a navbar e rolagem
│   └── index.html             # Página principal do site
└── server.js                  # Servidor em Node.js para servir arquivos estáticos
```

### Descrição dos Arquivos

## /public/assets/: Contém as imagens e recursos estáticos utilizados no site.

##  /public/css/: Contém arquivos CSS separados para cada seção do site, facilitando a organização e manutenção do código:

    - style.css: Estilos gerais e globais do site.
    - navbar.css: Estilos específicos para a navbar.
    - hero.css: Estilos para a seção hero.
    - program.css: Estilos para a seção de programas.
    - class.css: Estilos para a seção de classes.
    - about.css: Estilos para a seção sobre a academia.
    - service.css: Estilos para a seção de serviços.
    - community.css: Estilos para a seção de comunidade.
    - footer.css: Estilos para o rodapé.

## /public/js/main.js: Arquivo JavaScript para interação e navegação na página. Principais funcionalidades:

    - Função scrollHeader(): Adiciona a classe scroll-header ao cabeçalho ao rolar a página.
    - Funcionalidade para abrir e fechar o menu mobile através dos botões navToggle e navClose.
    - Gerenciamento de links ativos na navegação (active-link) com base na rolagem e nas seções da página.
    - Atualização do link ativo com base no scroll para uma navegação mais intuitiva.

## /public/index.html: Estrutura HTML que define toda a estrutura da página e exibe o conteúdo do site.

## server.js: Servidor em Node.js que utiliza o framework Express para servir os arquivos estáticos e o index.html:

    - Define a pasta public como diretório de arquivos estáticos.
    - Configura a rota principal (/) para servir o arquivo index.html.
    - Inicializa o servidor na porta 3000.

## Como Executar o Projeto

    Instalar Dependências:
    - Execute npm install express para instalar o framework Express.
    Executar o Servidor:
    - Na pasta raiz do projeto, execute o comando: `node server.js`
    - O servidor estará disponível em http://localhost:3000.
    Navegar pelo Site:
    - Abra o navegador e acesse http://localhost:3000 para visualizar o site Fitclub.

## Funcionalidades JavaScript

    Navbar Dinâmica:
    - Adaptação da navbar com rolagem, alterando o estilo quando o usuário desce a página.
    - Menu mobile com opções de abrir e fechar.
    Links Ativos:
    - A navegação é atualizada com um estilo ativo (active-link) com base na seção visível na rolagem da página.
    - O logotipo atua como link para a seção hero, marcando o primeiro link como ativo.
    
### Considerações Finais
Este projeto visa fornecer uma experiência de navegação fluida e visualmente agradável para usuários que visitam o site da academia Fitclub, com foco em uma interface intuitiva e responsiva.
