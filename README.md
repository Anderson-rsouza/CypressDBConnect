# CypressDBConnect

Este repositório é um template genérico para integração do Cypress com um banco de dados SQL Server utilizando a biblioteca mssql. Ele fornece uma estrutura básica e configurável para que você possa facilmente adaptar ao seu ambiente e começar a executar testes que integram validações no banco de dados.

🚀 O que este repositório oferece? Configuração inicial do Cypress para integração com SQL Server. Estrutura pronta para substituir com suas próprias credenciais e queries. Guia rápido de configuração para adaptar ao seu projeto.

📂 Como usar? Clone o repositório:
```
git clone https://github.com/Anderson-rsouza/CypressDBConnect.git
```
Acesse a pasta do projeto:
```
cd .\CypressDBConnect\
```
Instale as dependências:
````
npm install
````
Substitua os dados genéricos:

No arquivo de configuração (cypress/support/mssql.js), insira as credenciais do seu banco de dados.

Execute os testes:
```
npx cypress open
```

⚠️ Atenção Este projeto não inclui credenciais reais nem configurações específicas de banco de dados. É necessário substituí-las pelos dados do seu ambiente.

Com este boilerplate, você pode economizar tempo e esforço ao integrar testes Cypress com SQL Server. Basta adaptar ao seu contexto e começar a testar! 🚀
