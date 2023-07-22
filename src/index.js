import express from 'express';
const app = express();
const port = 3000;

// Custom middleware function using call() method
const apiHandler = function (req, res) {
    // Get the appropriate handler function based on the request method
    const handler = this[req.method.toLowerCase()];

    // If a handler function exists, invoke it with req and res objects
    if (handler) {
        handler.call(this, req, res);
    } else {
        res.sendStatus(405); // Method Not Allowed
    }
};

// Define API handlers
const apiHandlers = {
    get(req, res) {
        // Logic to retrieve and send user data
        const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
        res.json(users);
    },
    post(req, res) {
        // Logic to create a new user
        const newUser = { id: 3, name: 'Mike' };
        res.json(newUser);
    },
    put(req, res) {
        const userId = req.params.id;
        // Logic to update user with given userId
        res.send(`User ${userId} updated`);
    },
    delete(req, res) {
        const userId = req.params.id;
        // Logic to delete user with given userId
        res.send(`User ${userId} deleted`);
    },
};

// Mount the custom middleware function
app.use('/api/users', apiHandler.bind(apiHandlers));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});