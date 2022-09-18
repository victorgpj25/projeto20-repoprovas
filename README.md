# RepoProvas API

This is an API developed to organize and publicize students previous tests. It is developped in `node.js` using `express`. This is a project created to study and learn express and should not be used as a operating finished product.

## Features

This API counts with the following routes

### Authentication

#### Sign Up

You can sign-up to this API by making a POST request to route `/signup` with a object like

```js
{
  email, // string with email format and required
  password, // string and required
  confirmPassowrd // string - exactly the same input  as the previous field
}
```

If everything is ok, it will return status code 201. If any key is improperly passed it will return status code 422. If the email is already being used it will return status code 409. If anything breaks internally it will return status code 500.

#### Sign In

You can login to this API by making a POST request to route `/signin` with a object like

```js
{
  email, // string with email format and required
  password // string and required
}
```

If everything is ok, it will return status code 200 and a object like

```js
{
  token // jwt string
}
```

If any key is improperly passed it will return status code 422. If the email or the password is wrong it will return status code 401. If anything breaks internally it will return status code 500.

### Tests

#### Register Test

You can register a test into this API by making a POST request to route `/tests` with a object like

```js
{
  name, // String and required - test name
  pdfUrl, // String in uri format and required - test pdf url 
  category, // String and required - one of pre-registered values: 'HTML e CSS', 'JavaScript', 'React', 'Humildade', 'Planejamento' or 'Autoconfiança'
  discipline, // String and required - one of pre-registered values: 'Projeto', 'Prática' or 'Recuperação'
  teacher, // String and required - one of pre-registered values: 'Diego Pinho' or 'Bruna Hamori'
}
```

P.S. Teacher and Discipline fields must match:

```js
{
  Diego_Pinho_disciplines = ['HTML e CSS', 'JavaScript', 'React']
  Bruna_Hamori_disciplines = ['Humildade', 'Planejamento', 'Autoconfiança']
}
```

And headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 201. If any key is improperly passed it will return status code 422. If the given auhtentication token is not valid or not sent, it will return status code 401. If category, discipline or teacher input do not match pre-registered values, or teacher and disciplines do not match, it will return status code 404. If given pdfUrl is already registered, it will return status code 409. If anything breaks internally it will return status code 500.

#### Get Tests by Disciplines

You can get all tests grouped by discipline from this API by making a GET request to route `/tests/discipline` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and all tests in selected format. If the given auhtentication token is not valid or not sent, it will return status code 401. If anything breaks internally it will return status code 500.

#### Get Tests by Teacher

You can get all tests grouped by teacher from this API by making a GET request to route `/tests/teacher` with headers like

```js
{
  Authentication // JWT auhentication token - format: Bearer {token} 
}
```

If everything is ok, it will return status code 200 and all tests in selected format. If the given auhtentication token is not valid or not sent, it will return status code 401. If anything breaks internally it will return status code 500.