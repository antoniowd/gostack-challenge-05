<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios-new.png" style="width: 100%;"/>

<h3 align="center">
  Challenge 05: First project with Node.js
</h3>

<blockquote align="center">“For those who get better every day, getting ready is a utopia!”</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafios?style=social">
  </a>
</p>

## :rocket: About the challenge

In this challenge, you must create an application to continue training what you've learned so far on Node.js and TypeScript, using the concept of models, repositories and services!

This is an application to store incoming and outgoing financial transactions, which should allow the registration and listing of these transactions.

### Application requirements

- **POST /transactions**: The route must receive *title*, *value* and *type* within the body of the request, being *type* the type of transaction, which must be "income" for entries (deposits) and "outcome" for exits (withdrawals). When registering a new transaction, it must be stored inside an object with the following format:

```json
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

- **GET /transactions**: This route must return a list with all the transactions you have registered so far, along with the sum of entries, withdrawals and total credit. This route must return an object with the following format:

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

## :memo: Licence

This project is under license from MIT. See the archive [LICENSE](LICENSE) to more details.

---

Made with 💜 by Rocketseat :wave: [Join our community!](https://discordapp.com/invite/gCRAFhc)
