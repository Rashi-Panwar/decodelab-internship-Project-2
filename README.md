Full Stack Project 2 - Backend API Development

DecodeLabs Full Stack Development Internship

This project is a simple backend API developed as part of the DecodeLabs Full Stack Development Internship.

Project Overview

The project demonstrates backend development using Node.js.

The API handles application logic, user input, JSON responses and basic data validation.

Technologies Used

- Node.js
- JavaScript
- HTTP
- REST API
- JSON

Project Features

- Backend server
- GET API endpoint
- POST API endpoint
- User input handling
- JSON responses
- Basic data validation
- HTTP status codes
- 404 error handling

Project Structure

Project 2/
│
├── server.js
├── package.json
└── README.md

File Description

server.js

Contains the backend server, API endpoints, task data, request handling and validation logic.

package.json

Contains the project information and start script for running the Node.js server.

README.md

Contains project documentation, API details and instructions for running the project.

API Endpoints

1. GET /

Checks whether the API is running.

URL:

http://localhost:3000/

Method:

GET

2. GET /api/tasks

Returns all available tasks.

URL:

http://localhost:3000/api/tasks

Method:

GET

Example response:

{
"success": true,
"tasks": [
{
"id": 1,
"title": "Learn Node.js"
},
{
"id": 2,
"title": "Build Backend API"
}
]
}

3. POST /api/tasks

Creates a new task.

URL:

http://localhost:3000/api/tasks

Method:

POST

Request body:

{
"title": "Complete Project 2"
}

Example response:

{
"success": true,
"message": "Task created successfully.",
"task": {
"id": 3,
"title": "Complete Project 2"
}
}

Data Validation

The API checks that the task title:

- Exists
- Is a string
- Is not empty

If the title is missing or empty, the API returns HTTP Status 400.

Example:

{
"success": false,
"message": "Task title is required."
}

404 Error Handling

If an invalid endpoint is requested, the API returns HTTP Status 404.

Example:

{
"success": false,
"message": "Endpoint not found."
}

How to Run

1. Open the Project 2 folder in Visual Studio Code.
2. Open the VS Code terminal.
3. Check Node.js using:

node -v

4. Start the server using:

node server.js

5. Open the following URL in your browser:

http://localhost:3000/

Expected Output

The API returns JSON responses for different requests.

The project demonstrates:

- Backend development
- Server-side logic
- GET requests
- POST requests
- User input handling
- Data validation
- HTTP status codes
- API concepts

Important Note

The task data is stored temporarily in memory.

The data will reset when the server is stopped and started again.

Internship Project

Program: Full Stack Development Internship

Organization: DecodeLabs

Project: Project 2 - Backend API Development
