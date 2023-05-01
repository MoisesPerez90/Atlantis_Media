# Social Network API

## Task

The main task is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. For the development, the app was created using Express.js for routing, a MongoDB database, and the Mongoose ODM and validator.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
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

## Mock Up

The following images show examples of the application's API routes being tested with Insomnia.

The following images show GET routes to return all users and all thoughts being tested in Insomnia:

![image](https://user-images.githubusercontent.com/118077086/235543835-4c17118b-f2d4-43c9-ae72-fee6b34ee128.png)
![image](https://user-images.githubusercontent.com/118077086/235543885-604b34b4-6a26-4a06-b42c-3db4e751c383.png)

The following images show GET routes to return a single user and a single thought being tested in Insomnia:

![image](https://user-images.githubusercontent.com/118077086/235543973-b4162d32-7ab2-4ecb-8fc2-a16b63290b4e.png)
![image](https://user-images.githubusercontent.com/118077086/235544016-51c36afe-690c-4299-844e-474eb61ff72a.png)

The following images show the POST route for a user’s friend list being tested in Insomnia:

![image](https://user-images.githubusercontent.com/118077086/235544186-a6afc45b-e084-4132-9aa5-56cae5c16814.png)

The following images show the POST route for a reactions being tested in Insomnia:

![image](https://user-images.githubusercontent.com/118077086/235544213-0d581381-65c2-4f39-9572-ac0901a09eb3.png)

### Walkthrough video

https://drive.google.com/file/d/1EMZSUdPBCp7Tle0EY76nKDJJfX_H-Drh/view?usp=sharing

## Needs

Be sure to have MongoDB and all dependencies installed on your machine. (npm install)


