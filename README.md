create db forExpressPassportReactApp

MONGODB_URI= mongodb://dev:dev@192.168.11.119:27017/forExpressPassportReactApp

db.createUser(
  {
    user: "dev",
    pwd: "dev",  
    roles: [
       { role: "readWrite", db: "forExpressPassportReactApp" }
    ]
  }
)

# Express React Passport JWT

A super simplistic example of a fullstack app using Express, React, and Passport.

## Features
* Express
* Passport
* MongoDB
* Mongoose
* React
* Bootstrap
* React Router
* Formik

## Installation

```
git clone https://github.com/michaelmcshinsky/express-react-passport-jwt.git
cd express-react-passport-jwt
cp .env.example .env
npm install
```

## Usage

Update the `.env` file to your information
```
JWT_SECRET= # For token secret
MONGODB_URI= # For database connection
```
To start the app:

```
npm start
```

Navigation to [http://localhost:3000](http://localhost:3000)


