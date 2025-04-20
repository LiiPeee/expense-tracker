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
se quiser criar imagem no docker

docker run --name meu-postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=root \
  -e POSTGRES_DB=myapp_db \
  -p 4444:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  -d \
  postgres:15-alpine

npx prisma migrate dev

# Inicie o projeto
npm run dev

```

##  📌 Rotas da API

```

➕ Criar Categoria
POST http://localhost:8080/api/category
Body Exemplo:
{
    "name": "xpto",
    "phone": "xpto",
    "email": "xpto.joe@gmail.com",
    "street": "valid street in DB",
    "type": "individual",
    "document": "document",
    "is_active": true or false
}

➕ Criar Contato
POST http://localhost:8080/api/contact
Body Exemplo:
{
     "name": "xpto",
    "phone": "xpto",
    "email": "xpto.joe@gmail.com",
    "street": "valid street in DB",
    "type": "individual",
    "document": "document",
    "is_active": true or false
}

➕ Criar Endereço
POST http://localhost:8080/api/address
Body Exemplo:
{
    "street": "xpto",
    "number": "xpto",
    "neighborhood": "xpto",
    "city": "pto,
    "state": "xpto",
    "postalCode": "xpto,
    "country": "xpto,
    "isPrimary": true
}


➕ Criar Transação
POST http://localhost:8080/api/transaction
Body exemplo:
Edit
{
    "email": "xpto,
    "value": 110,
    "paymentName": "Celular",
    "recurrence": "M" M de Mensal ou W de semana,
    "number_of_installments": 8,
    "installments_date": "12-16-2024",
    "paid": false,
    "category": {
        "id": 1
    },
    "comment": "Devo, não nego, pago quando puder",
    "contact": {
        "id": 1
    }
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
