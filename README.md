# Mongoose Social Media: NoSQL Challenge

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Preview](#preview)
- [Contributors](#contributors)

## Description

This project contains the API back-end code for a social media network, using a MongoDB database, Express.js for routing, and the Mongoose ODM.

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

In order to use the application, follow these steps in the terminal in the root of your application:

`npm init`

`npm install express`

`npm install mongoose`

## Usage

Once npm packages have been installed, user may use the application using the following commands in the terminal:

`npm start`

## Testing

In order to test the API routes, open Insomnia and use the following:

### GET all users and POST new user.

`/api/users`

### GET user by id, PUT to update a user by id, DELETE to remove user by id.

`/api/users/<userid>`

### POST to add a new friend, DELETE to remove a friend.

`/api/users/<userid>/friends/<friendid>`

### GET all thoughts, POST to create a new thought.

`/api/thoughts`

### GET thought by id, PUT to update a thought by id, DELETE to remove a thought.

`/api/thoughts/<thoughtid>`

### POST to create a reaction.

`/api/thoughts/<thoughtid>/reactions`

### DELETE a reaction by id.

`/api/thoughts/<thoughtid>/reactions/<reactionid>`

## Preview

[![image.png](https://i.postimg.cc/gcysHdMC/image.png)](https://postimg.cc/MXT1WkJ5)

## Video Walkthrough

[User and Friend Routes](https://drive.google.com/file/d/1DqmCr-VIa2-rlY1xWx6nUAwgJgdJ7Yhh/view?usp=sharing)

[Thought snd Reaction Routes](https://drive.google.com/file/d/1WSrwy8MTXRs2WBEsuD2cx4Exh6gb3cx3/view?usp=sharing)

## Contributors

Michelle Stone
