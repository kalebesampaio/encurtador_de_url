# Encurtador de URL
Encurtador URL é uma ferramenta para encurtar URLs e gerar linkscurtos Com o encurtador de URL é possível criar um link encurtado fácil de compartilhar

## Tecnologias utilizadas:

- Backend (NodeJS, Express, Postgres, Typeorm, TypeScript, Ejs, Zod)

## Rodando projeto

- Backend
Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

````
yarn install
````


**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

````
yarn --version
````

Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

````
npm install --global yarn
````

Para rodar as migrations no seu banco de dados use 

````
yarn typeorm migration:run -d src/data-source.ts
````
  
- Para rodar o projeto

````
yarn dev
````
