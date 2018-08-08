# Building Serverless RESTful Web APIs with Cloud Functions, Firestore, Express and JavaScript ES6

You will need a Firebase project and firebase tools cli

```
npm install -g firebase-tools
```

## Clone this repository

```
git clone git@github.com:mayurc137/serverless-rest-api-boilerplate.git .
```

## Updating firebase project id

You need to change the firebase project name in *.firebaserc* file.

```
{
  "projects": {
    "default": "YOUR-FIREBASE-PROJECT-ID"
  }
}
```

After that, you can log in to firebase in the terminal 

```
firebase login
```


## Deploy to firebase

To deploy functions to firebase

```
firebase deploy
```

## Read values from the request

Content Type\n	
Request Body\n	
Behavior\n

```
application/json	
'{"name":"John"}'	
request.body.name equals 'John'
```
```
application/octet-stream	
'my text'	
request.body equals '6d792074657874' (the raw bytes of the request; see the Node.js Buffer documentation)
```
```
text/plain	
'my text'	
request.body equals 'my text'
```
```
application/x-www-form-urlencoded	
'name=John'	
request.body.name equals 'John'
```

## Adding Middleware

Add middleware to authenticate requests or perform additional tasks

```
let myMiddleware = (req, res, next) => {
    //authentication code goes here
    next();
}

app.use(myMiddleware);
```

## Building multiple CRUD interfaces:

GET /

```
app.get('/', (req, res) => {
    let response = Endpoints.list();
    res.send(response);
});
```

GET /:id

```
app.get('/:id', (req, res) => {
    let id = req.params.id;
    let response = Endpoints.getById(id);
    res.send(response);
});
```

POST /

```
app.post('/', (req, res) => {
    let response = Endpoints.create();
    res.send(response);
});
```

PUT /:id

```
app.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let response = Endpoints.update(id, body);
    res.send(response);
});
```

DELETE /:id

```
app.delete('/:id', (req, res) => {
    let id = req.params.id;
    let response = Endpoints.delete(id);
    res.send(response);
});
```