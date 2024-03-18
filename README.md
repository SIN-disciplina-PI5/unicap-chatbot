# Documentação do Projeto Chatbot Unicap

## Introdução

Bem-vindo à documentação do projeto Chatbot Unicap! Este documento oferece informações essenciais para entender, configurar e implantar o chatbot desenvolvido para a Faculdade Unicap. Este projeto é parte integrante do Trabalho de Conclusão de Curso (TCC) e utiliza a plataforma Typebot para implementação.

## Estrutura do Projeto

O projeto consiste em uma página HTML que incorpora o chatbot fornecido pela plataforma Typebot. Aqui está uma visão geral dos principais arquivos e pastas:

- `index.html`: Arquivo principal da aplicação que contém a estrutura HTML e integração com o Typebot.
- `style.css`: Arquivo de estilo que define a aparência da página.
- `manifest.json`: Arquivo de manifesto para configurar as propriedades da Progressive Web App (PWA).
- `pwabuilder-sw.js`: Arquivo JavaScript que registra o service worker para oferecer uma experiência PWA.
- `assets/`: Pasta que armazena imagens e ícones utilizados na aplicação.

## Configuração

Antes de implantar o chatbot, é necessário fazer algumas configurações:

### Typebot

1. Obtenha as credenciais do Typebot para o seu projeto.
2. No arquivo `index.html`, substitua `chatbot-unicap-pscf88a` pelo identificador do seu projeto Typebot.
3. Personalize as configurações do Typebot conforme necessário, como a mensagem de pré-visualização e temas, no bloco de script `Typebot.initBubble`.

### Imagens e Ícones

Certifique-se de substituir as imagens e ícones na pasta `assets/` pelos relacionados à Faculdade Unicap.

## Implantação

Para implantar o projeto, siga estas etapas:

1. Carregue todos os arquivos para um servidor web ou use uma plataforma de hospedagem, como Vercel, Netlify ou GitHub Pages.
2. Certifique-se de que o arquivo `pwabuilder-sw.js` esteja no mesmo diretório que `index.html`.
3. Acesse a página implantada para visualizar o chatbot em ação.

## Funcionalidades

O chatbot foi projetado para fornecer informações relevantes sobre a Faculdade Unicap. Os usuários podem iniciar uma conversa e obter respostas automáticas.

## Considerações Finais

Este projeto é uma contribuição valiosa para o TCC, demonstrando a implementação prática de um chatbot para facilitar a interação e fornecer informações aos usuários da Faculdade Unicap.
