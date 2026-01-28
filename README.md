📘 Mini CRM Backend – Prysm Labs Assignment

(Detailed Explanation of README.md)

1️⃣ Project Title
# Mini CRM Backend – Prysm Labs Assignment

Explanation

This project is a Mini CRM (Customer Relationship Management) backend system developed specifically as part of the Prysm Labs Backend Developer Intern assignment.

It demonstrates:

Secure authentication

Role-based authorization

Clean backend architecture

Production-ready REST APIs

2️⃣ Tech Stack
## Tech Stack
- NestJS
- PostgreSQL
- Prisma
- JWT
- Swagger

Why these technologies were chosen:
🔹 NestJS

A modern, scalable backend framework built on Node.js

Encourages clean architecture (Modules, Controllers, Services)

Widely used in enterprise-level applications

🔹 PostgreSQL

A powerful relational database

ACID compliant and production-ready

Works efficiently with Prisma ORM

🔹 Prisma ORM

Type-safe ORM for Node.js

Simplifies database queries and relations

Provides migrations and schema validation

🔹 JWT (JSON Web Token)

Used for authentication and authorization

Secure stateless authentication mechanism

Protects private routes using bearer tokens

🔹 Swagger

API documentation and testing tool

Allows testing of protected endpoints

Improves API usability and clarity

3️⃣ Setup Instructions
## Setup Instructions
1. git clone
2. npm install
3. .env setup
4. prisma migrate
5. npm run start:dev

Step-by-Step Explanation
🔹 Step 1: Clone the repository
git clone https://github.com/your-username/mini-crm-backend.git
cd mini-crm-backend


This downloads the project source code to your local machine.

🔹 Step 2: Install dependencies
npm install


Installs all required packages such as:

NestJS core modules

Prisma client

JWT, Passport

bcrypt

Swagger

Validation libraries

🔹 Step 3: Environment variables setup
.env


Create a .env file in the root directory.

DATABASE_URL="postgresql://username:password@localhost:5432/mini_crm"
JWT_SECRET="your_jwt_secret_key"

Why this is important:

Keeps sensitive data out of source code

Makes the app configurable for different environments

🔹 Step 4: Database migration
npx prisma migrate dev


This command:

Creates database tables based on schema.prisma

Applies migrations

Generates Prisma Client

You should see tables:

User

Customer

Task

🔹 Step 5: Start the development server
npm run start:dev


Starts NestJS server in watch mode

Runs on http://localhost:3000

4️⃣ Environment Variables
## Environment Variables
DATABASE_URL=
JWT_SECRET=

Explanation:
🔹 DATABASE_URL

PostgreSQL connection string

Required by Prisma to connect to the database

🔹 JWT_SECRET

Secret key used to sign JWT tokens

Must be kept private and secure

5️⃣ Database Migration
## Database Migration
npx prisma migrate dev

Explanation:

Synchronizes Prisma schema with PostgreSQL

Creates and updates tables automatically

Ensures database consistency across environments

6️⃣ Run Server
## Run Server
npm run start:dev

Explanation:

Starts backend server

Enables hot-reload during development

Default port: 3000

7️⃣ Swagger API Documentation
## Swagger URL
http://localhost:3000/api

What Swagger provides:

Complete API documentation

Request/response schemas

JWT authentication support via Authorize button

Ability to test APIs directly from browser

8️⃣ How Evaluators Will Test Your Project

Open Swagger UI
http://localhost:3000/api

Register a user
POST /auth/register

Login and get JWT token
POST /auth/login

Click Authorize and paste:

Bearer <accessToken>


Test protected APIs:

/users (ADMIN only)

/customers

/tasks