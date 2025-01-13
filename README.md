# stock-management-v1
Stock Management System.
Tech stack:
1. Backend: NestJS
2. Frontend: Next.js

# Backend APIs:
1. Add Item
2. Add Stock Entry
3. Get Stock Ledger data

# Backend Entities:
1. Item
2. Batch Item
3. Stock Entry
4. Stock Entry Detail
5. Stock Ledger

# Frontend Dashboard Pages:
1. Item
2. Stock Entry
3. Report Stock Ledger

# requirements
1. (Node.js)[https://nodejs.org/en/download/current]
2. (NPM package manager)[https://nodejs.org/en/download/current]
3. (SQLite)[https://www.sqlite.org/download.html]

# Getting Started in Local Development
1. Clone the repository.
2. go to the `backend` directory
3. do npm install. 
4. duplicate .env.example, then rename to .env
5. if this is your first time using this repository, run command `npx prisma migrate dev` to apply migrations to the database
6. run `npm run start:dev`
7. go to the `frontend` directory
8. do npm install.
9. duplicate .env.local.example, then rename to .env.local
10. run `npm run dev`
11. open your browser. Go to url `http://localhost:3001` (if the frontend port uses the default = 3001)