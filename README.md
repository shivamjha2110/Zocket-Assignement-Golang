# **Real-Time Task Management System** 🚀  

🔗 **Live Demo**: [Task Management System](https://real-time-task-management-system-vzcn.onrender.com)  

🔗 **Backend API**: [API Base URL](https://real-time-task-management-system-backend.onrender.com)  

---

## **📌 Project Overview**  
This is a **real-time task management system** that allows users to:  
✅ **Register & Log in** securely (JWT authentication)  
✅ **Create, Assign & Track Tasks** dynamically  
✅ **Receive AI-powered Task Recommendations**  
✅ **Get Real-Time Task Updates** using WebSockets  
✅ **Deploy & Use from Anywhere!**  

---

## **🛠 Tech Stack**  

### **Frontend**  
- **React.js** (TypeScript)  
- **Tailwind CSS**  
- **Axios** (API Requests)  

### **Backend**
- **I have Created backend in: Golang as well as  Node.js + Express.js**   
- **MongoDB + Mongoose**  
- **JWT Authentication**  
- **Socket.io (WebSockets for real-time updates)**  

### **Deployment**  
- **Frontend**: [Render](https://real-time-task-management-system-vzcn.onrender.com)  
- **Backend**: [Render](https://real-time-task-management-system-backend.onrender.com)  

---

# API Documentation

## 🚀 API Endpoints

### 🔹 Authentication API

#### 1️⃣ User Registration
**Endpoint:** `POST /api/auth/register`

**Request:**
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "123456"
}
```

**Response:**
```json
{
    "message": "User registered successfully"
}
```

#### 2️⃣ User Login
**Endpoint:** `POST /api/auth/login`

**Request:**
```json
{
    "email": "john@example.com",
    "password": "123456"
}
```

**Response:**
```json
{
    "token": "jwt_token_here",
    "user": {
        "id": "user_id_here",
        "name": "John Doe",
        "email": "john@example.com"
    }
}
```

📌 **Important:** Store the `token` for authenticated requests!

### 🔹 Task Management API

#### 3️⃣ Create Task (Requires Authentication)
**Endpoint:** `POST /api/tasks`

**Headers:**
```json
{
    "Authorization": "Bearer jwt_token_here"
}
```

**Request:**
```json
{
    "title": "Complete the project",
    "description": "Work on the task management system."
}
```

**Response:**
```json
{
    "_id": "task_id_here",
    "title": "Complete the project",
    "description": "Work on the task management system.",
    "status": "pending",
    "assignedTo": "user_id_here",
    "createdAt": "timestamp_here"
}
```

#### 4️⃣ Get All Tasks (Requires Authentication)
**Endpoint:** `GET /api/tasks`

**Headers:**
```json
{
    "Authorization": "Bearer jwt_token_here"
}
```

**Response:**
```json
[
    {
        "_id": "task_id_here",
        "title": "Complete the project",
        "description": "Work on the task management system.",
        "status": "pending",
        "assignedTo": "user_id_here",
        "createdAt": "timestamp_here"
    }
]
```

#### 5️⃣ Update Task Status (Requires Authentication)
**Endpoint:** `PUT /api/tasks/{taskId}`

**Headers:**
```json
{
    "Authorization": "Bearer jwt_token_here"
}
```

**Request:**
```json
{
    "status": "completed"
}
```

**Response:**
```json
{
    "message": "Task updated successfully",
    "task": {
        "_id": "task_id_here",
        "title": "Complete the project",
        "description": "Work on the task management system.",
        "status": "completed",
        "assignedTo": "user_id_here",
        "updatedAt": "timestamp_here"
    }
}
```

#### 6️⃣ Delete Task (Requires Authentication)
**Endpoint:** `DELETE /api/tasks/{taskId}`

**Headers:**
```json
{
    "Authorization": "Bearer jwt_token_here"
}
```

**Response:**
```json
{
    "message": "Task deleted successfully"
}
```
## 📌 How to Run Locally?

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-repository.git
cd your-repository
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```

📌 Create `.env` file inside `backend/`
```ini
MONGO_URI=mongodb://yourmongoclusterlink
JWT_SECRET=mysecretkey
PORT=5000
```

Run the server:
```sh
node src/server.js
```

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
npm run dev
