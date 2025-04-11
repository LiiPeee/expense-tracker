# 💸 Expense Tracker
Expense Tracker é uma aplicação para controle de gastos pessoais. Com ela, é possível cadastrar e visualizar transações financeiras de forma simples e organizada.

O projeto foi desenvolvido utilizando os princípios da Clean Architecture e DDD (Domain-Driven Design), garantindo uma estrutura robusta, escalável e de fácil manutenção.

# 🛠️ Tecnologias Utilizadas
Node.js + TypeScript

Prisma ORM

PostgreSQL

Programação Orientada a Objetos (POO)

Clean Architecture

Domain-Driven Design (DDD)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/expense-tracker.git

# Acesse a pasta do projeto
cd expense-tracker

# Instale as dependências
npm install

# Configure o banco de dados no arquivo .env

# Execute as migrações do Prisma
npx prisma migrate dev

# Inicie o projeto
npm run dev

```

##  📌 Rotas da API

```python
➕ Criar Transação
POST http://localhost:8080/api/transaction

Body exemplo:

json
Copy
Edit
{
  "title": "Compra no mercado",
  "amount": 150.00,
  "type": "expense", // ou "income"
  "category": "Alimentação"
}
📄 Listar Transações
GET http://localhost:8080/api/transaction
```

## 🧱 Arquitetura

A aplicação foi estruturada com base nos princípios da Clean Architecture, separando responsabilidades em camadas como:

Domain: entidades e regras de negócio

Application: casos de uso

Infrastructure: comunicação com banco de dados (Prisma)

Interface/HTTP: rotas e controladores


## License

[MIT](https://choosealicense.com/licenses/mit/)