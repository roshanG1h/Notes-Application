# Full Stack Notes Application

A complete Full Stack Notes Application built using React, Node.js, Express, and MySQL.
This project supports full CRUD operations with responsive UI and REST API integration.

---

# 🚀 Tech Stack

## Frontend

- React.js
- Vite
- Axios
- CSS3

## Backend

- Node.js
- Express.js

## Database

- MySQL

---

# 📁 Project Structure

```bash
fullstack-project/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── noteController.js
│   ├── routes/
│   │   └── noteRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── NoteForm.jsx
    │   │   ├── NoteItem.jsx
    │   │   └── NoteList.jsx
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    └── package.json
```

---

# ✨ Features

- Create Notes
- View All Notes
- Edit Notes
- Delete Notes
- MySQL Database Integration
- RESTful APIs
- Responsive User Interface
- Form Validation
- Error Handling
- Clean Folder Structure

---

# 🗄️ Database Setup

## Create Database

```sql
CREATE DATABASE notes_app;
```

---

## Use Database

```sql
USE notes_app;
```

---

## Create Table

```sql
CREATE TABLE notes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# ⚙️ Backend Setup

## Navigate to Backend

```bash
cd backend
```

---

## Install Dependencies

```bash
npm install
```

---

## Create `.env` File

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=notes_app
```

Replace `YOUR_PASSWORD` with your MySQL password.

---

## Run Backend Server

```bash
node server.js
```

OR

```bash
npm run dev
```

---

# ⚛️ Frontend Setup

## Navigate to Frontend

```bash
cd frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Install Required Packages

```bash
npm install axios @vitejs/plugin-react
```

---

## Run Frontend

```bash
npm run dev
```

---

# 🌐 Application URLs

## Backend

```bash
http://localhost:5000
```

---

## Frontend

```bash
http://localhost:5173
```

---

# 📬 API Endpoints

## Create Note

```http
POST /api/notes
```

---

## Get All Notes

```http
GET /api/notes
```

---

## Get Single Note

```http
GET /api/notes/:id
```

---

## Update Note

```http
PUT /api/notes/:id
```

---

## Delete Note

```http
DELETE /api/notes/:id
```

---

# 🧪 API Testing

Tested using:

- Postman
- Browser UI

---

# 🐛 Bug Fixes Completed

The debugging assignment included multiple intentional bugs.
The following issues were identified and fixed:

- Incorrect variable names
- Missing return statements
- Wrong comparison operators
- Async handling issues
- Validation logic problems
- Route parameter type mismatches
- API response handling errors
- Array method mistakes
- Incorrect CRUD logic
- Server configuration issues

---

# 🛡️ Validation & Error Handling

Implemented:

- Empty field validation
- Invalid ID checks
- 404 error handling
- Database error handling
- Server-side validation

---

# 📱 Responsive Design

Frontend UI is responsive and works on:

- Desktop
- Tablet
- Mobile Devices

---

# 🔥 Additional Improvements

Added:

- Proper folder structure
- Reusable React components
- Clean API architecture
- Modular backend design
- Better readability and maintainability

---

# 🚀 Future Improvements

Possible future enhancements:

- JWT Authentication
- User Login System
- Search Notes
- Pagination
- Dark Mode
- Toast Notifications
- Docker Deployment

---

# 📦 GitHub Commands

```bash
git init
git add .
git commit -m "Complete full stack notes application"
git push
```

---

# 👨‍💻 Author

Roshan Gupta

---

# 📄 License

This project is created for assessment and educational purposes.
