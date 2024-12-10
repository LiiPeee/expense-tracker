
# Project Expense tracker

```
System about expense tracker to show for you where you spend your money.
```
## Routes
```
Create Transaction-
POST -http://localhost:8080/api/transaction

{ 
    "email": "any",
    "transaction":{
        "value": any,
        "formatPayment": "any",
        "recurrence":"MONTH",
        "number_of_installments": 34,
        "installments_date": "11-16-2024",
        "paid": false,
        "contacts":{
            "name": "xpto",
            "phone": "any",
            "email": "any"
        },
        "category": "EXPENSE",
        "comment": "any"
     }
}
```

## Tecnology

```
Typescript - Express - axios - nodemon - PostgresSQL - Prisma
Clean Arctheture - Solid
```

