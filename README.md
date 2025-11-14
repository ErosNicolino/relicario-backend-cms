# Relicário Rock Bar -- Backend (Strapi CMS)

Este repositório contém o CMS oficial do Relicário Rock Bar,
desenvolvido com Strapi. Ele é responsável por gerenciar agenda,
cardápio e todo o conteúdo dinâmico consumido pelo site frontend.

------------------------------------------------------------------------

## Visão Geral

O backend foi construído com foco em:

-   Organização simples de coleções.
-   Controle seguro de acesso.
-   Compatibilidade com ambiente de produção no Render.
-   Escalabilidade usando PostgreSQL.

------------------------------------------------------------------------

## Tecnologias Utilizadas

-   Strapi v4/v5
-   Node.js
-   PostgreSQL
-   Render (Deploy)

------------------------------------------------------------------------

## Estrutura do CMS

Coleções principais:

-   Agenda\
-   Cardapio\
-   Categorias\
-   Uploads (imagens)

Middlewares configurados para CORS e segurança.

------------------------------------------------------------------------

## Como Rodar Localmente

1.  Instale dependências:

```{=html}
<!-- -->
```
    npm install

2.  Inicie o servidor:

```{=html}
<!-- -->
```
    npm run develop

3.  Acesse o painel administrativo:

```{=html}
<!-- -->
```
    http://127.0.0.1:1337/admin

4.  Configure permissões em:

-   Settings → Users & Permissions Plugin → Public\
-   Ative acesso às rotas necessárias.

------------------------------------------------------------------------

## Variáveis de Ambiente Necessárias

Crie um arquivo `.env` contendo:

    APP_KEYS=...
    API_TOKEN_SALT=...
    ADMIN_JWT_SECRET=...
    TRANSFER_TOKEN_SALT=...

    DATABASE_CLIENT=sqlite or postgres
    DATABASE_HOST=
    DATABASE_PORT=
    DATABASE_NAME=
    DATABASE_USERNAME=
    DATABASE_PASSWORD=
    DATABASE_SSL=false

No deploy no Render, use PostgreSQL e configure as variáveis conforme
fornecidas pelo serviço.

------------------------------------------------------------------------

## Deploy no Render

1.  Suba o backend para um repositório GitHub.
2.  No Render:
    -   Crie um serviço PostgreSQL.
    -   Crie um Web Service para o Strapi.
3.  Configure as variáveis de ambiente.
4.  Deploy automático a cada push.

------------------------------------------------------------------------

## Licença

Código exclusivo para uso da equipe Relicário Rock Bar.
