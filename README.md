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
