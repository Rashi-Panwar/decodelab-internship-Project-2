const http = require("http");

const PORT = 3000;

let tasks = [
    {
        id: 1,
        title: "Learn Node.js"
    },
    {
        id: 2,
        title: "Build Backend API"
    }
];

function sendJson(res, statusCode, data) {
    res.writeHead(statusCode, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify(data, null, 2));
}

function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            if (!body) {
                resolve({});
                return;
            }

            try {
                const data = JSON.parse(body);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });

        req.on("error", (error) => {
            reject(error);
        });
    });
}

const server = http.createServer(async (req, res) => {

    // Home Route
    if (req.method === "GET" && req.url === "/") {

        return sendJson(res, 200, {
            success: true,
            message: "Task Manager API is running successfully.",
            endpoints: {
                getTasks: "GET /api/tasks",
                createTask: "POST /api/tasks"
            }
        });
    }

    // GET /api/tasks
    if (req.method === "GET" && req.url === "/api/tasks") {

        return sendJson(res, 200, {
            success: true,
            tasks: tasks
        });
    }

    // POST /api/tasks
    if (req.method === "POST" && req.url === "/api/tasks") {

        try {

            const body = await getRequestBody(req);

            // Basic validation
            if (
                !body.title ||
                typeof body.title !== "string" ||
                body.title.trim() === ""
            ) {

                return sendJson(res, 400, {
                    success: false,
                    message: "Task title is required."
                });
            }

            const newTask = {
                id: tasks.length > 0
                    ? tasks[tasks.length - 1].id + 1
                    : 1,
                title: body.title.trim()
            };

            tasks.push(newTask);

            return sendJson(res, 201, {
                success: true,
                message: "Task created successfully.",
                task: newTask
            });

        } catch (error) {

            return sendJson(res, 400, {
                success: false,
                message: "Invalid JSON data."
            });
        }
    }

    // 404 Route
    return sendJson(res, 404, {
        success: false,
        message: "Endpoint not found."
    });
});

server.listen(PORT, () => {

    console.log("--------------------------------------");
    console.log("Task Manager API Started");
    console.log("--------------------------------------");
    console.log(`Server running at: http://localhost:${PORT}`);
    console.log("--------------------------------------");

});