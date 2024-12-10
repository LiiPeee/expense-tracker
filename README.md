
# Project Expense tracker

```
System about expense tracker to show for you where you spend your money.
```
## Routes
```
Create Transaction -
POST -http://localhost:8080/api/transaction

{ 
    "email": String,
    "transaction":{
        "value": Number,
        "paymentName": String,
        "recurrence":"MONTH || WEEK",
        "number_of_installments": Number,
        "installments_date": String,
        "paid": boolean,
        "category": "EXPENSE || INCOME",
        "comment": String,
        "contacts":{
            "name": String,
            "phone": String,
            "email": String
        },
     }
}
```

```
Create Account -
POST - http://localhost:8080/api/account

{
    "name": String,
    "email": String,
    "password": String
}
```
```
Get Account
GET - http://localhost:8080/account/[email]
---
```
```
Get Transaction By Month
GET - http://localhost:8080/api/transaction

Body
{
    "skip": 15,
    "take":5,
    "id": 3,
    "month": 11,
    "year": 2024
}
```
## Technology 
```
Typescript - Express - axios - nodemon - PostgresSQL - Prisma
Clean Arctheture - Solid
```

## COMANDS

### DEV
```
npm run dev
```

### DOCKER
```
docker compose up
```

### PRISMA
```
npx prisma migrate dev
```
```
npm install prisma typescript tsx @types/node --save-dev
```
```
npx prisma init
```
```
npx prisma
```



