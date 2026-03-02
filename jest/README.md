# 🧪 Jest + Supertest Setup Guide (Express.js)

This guide explains **step-by-step** how to set up Jest testing for an Express.js backend for the first time.

We will cover:

- Installing Jest & Supertest  
- Why we use `--save-dev`  
- Configuring `package.json`  
- Creating the test folder structure  
- Writing your first test  
- Understanding each testing function  

---

# 📦 Step 1 — Install Required Packages

- Inside your project root, run:


npm install --save-dev jest supertest

- 🔍 What are these packages?
✅ Jest

Jest is a JavaScript testing framework.

It provides:

describe() → groups related tests

it() / test() → defines a single test

expect() → checks expected results

Assertion methods like .toBe(), .toEqual(), .toHaveProperty()

✅ Supertest

Supertest is used to test HTTP APIs.

Since we are using Express, Supertest allows us to:

Send fake HTTP requests

Test API endpoints without running the server manually

Check response status codes

Check JSON response body

✅ Why --save-dev?

We use:

--save-dev

Because:

Jest and Supertest are only used during development.

They are not required in production.

They should not increase production bundle size.

They will be added under:

"devDependencies"

in package.json.

# ⚙️ Step 2 — Add Test Script in package.json

- Open package.json and add:

"scripts": {
  "test": "jest"
}

Now you can run:

npm test

Instead of:

npx jest

# 📁 Step 3 — Project Structure

- Your structure should look like this:

project-root/
│
├── src/
│   ├── app.js
│   └── __tests__/
│       └── app.test.js
│
├── package.json
🔹 Why __tests__ folder?

Jest automatically detects test files inside:

__tests__/

This is a convention.

You create this folder inside src/ (same level where app.js exists).

# 📄 Step 4 — Example Express App (app.js)

- const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.post("/api/auth/register", (req, res) => {
  const { username, email, password } = req.body;

  res.status(201).json({
    message: "User registered successfully",
    user: { username, email },
  });
});

module.exports = app;

⚠️ Important:
We export app instead of calling app.listen() because Supertest needs access to the Express app instance directly.

# 🧪 Step 5 — Writing Your First Test (app.test.js)

- Inside:

src/__tests__/app.test.js

Add:

const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return 200 and Hello World", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Hello World");
  });
});

describe("POST /api/auth/register", () => {
  it("should return 201 and user data", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        username: "testuser",
        email: "testuser@email.com",
        password: "password123",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message", "User registered successfully");
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("username", "testuser");
    expect(res.body.user).toHaveProperty("email", "testuser@email.com");
  });
});

# 🧠 Understanding the Test Functions

- describe()
describe("GET /", () => { ... });

Groups related tests.

Helps organize test output.

Makes test reports readable.

Think of it as a category.

🔹 it() (or test())
it("should return 200 and Hello World", () => { ... });

Defines a single test case.

The first argument:

A human-readable description.

The second argument:

The actual test function.

🔹 async / await

Since HTTP requests are asynchronous, we use:

async () => {
  const res = await request(app)...
}

This waits for the request to complete before checking results.

🔹 request(app)

From Supertest.

Instead of:

http://localhost:3000

We directly pass the Express app instance.

This avoids starting a real server.

🔹 .get() / .post()

Simulates HTTP request methods.

Examples:

.get("/")
.post("/api/auth/register")
🔹 .send()

Used for POST requests to send JSON body:

.send({
  username: "testuser"
})
🔹 expect()

Core Jest assertion function.

Checks if something matches expected result.

Common Matchers:
Matcher	Meaning
.toBe()	Exact value match
.toEqual()	Deep object comparison
.toHaveProperty()	Checks if object contains property
.toContain()	Checks if array/string contains value

# ▶️ Step 6 — Run the Test

- Run:

npm test

If everything is correct, you will see something similar like this:


 PASS  src/__tests__/app.test.js
  GET /
    √ should return 200 and Hello World  (15 ms)                                                                                                             
  POST /api/auth/register                                                                                                                                    
    √ should return a user and return 201 with user data (12 ms)                                                                                             
                                                                                                                                                             
Test Suites: 1 passed, 1 total                                                                                                                               
Tests:       2 passed, 2 total                                                                                                                               
Snapshots:   0 total
Time:        0.292 s, estimated 1 s
Ran all test suites.


```bash
Author : Abinash Deka
