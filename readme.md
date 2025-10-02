# Task Manager - Full Stack Application

A modern, responsive task management application built with React.js frontend and Node.js/Express backend with MongoDB. Features user authentication, CRUD operations, and a clean, intuitive interface.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Tailwind](https://img.shields.io/badge/Styling-Tailwind_CSS-38B2AC)

## 🎥 Demo Video

[Watch the application demo](https://www.loom.com/share/894e02f0697f4ac9b2ca054f3d850b22?sid=f44bb59c-f0a5-477e-be8b-2cfc9cf62d49)

## 📋 Features

### ✅ Authentication & User Management
- User registration and login
- JWT-based authentication
- Protected routes and middleware
- User profile management
- Secure password hashing

### ✅ Task Management
- Create, read, update, delete tasks
- Task status tracking (Pending, In Progress, Completed)
- Priority levels (Low, Medium, High)
- Due date tracking
- Search and filter functionality
- Responsive task list

### ✅ Technical Features
- Responsive design with Tailwind CSS
- RESTful API architecture
- Error handling and validation
- Environment configuration
- Modular component structure

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM library
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/Ela160403/primetrade-frontend-assignment
cd primetrade-frontend-assigment
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
echo "MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=30d
PORT=5000" > .env
```

Start the backend server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory (from root)
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

### 4. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🏗️ Project Structure

```
primetrade-task/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── profile.js
│   │   └── tasks.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   │   │   ├── TaskManager.js
│   │   │   ├── Profile.js
│   │   │   └── ProtectedRoute.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🚀 Quick Start

1. **Start MongoDB** (ensure it's running on localhost:27017)
2. **Start Backend**: `cd backend && npm run dev`
3. **Start Frontend**: `cd frontend && npm start`
4. **Register** a new account or login with existing credentials
5. **Create tasks** and manage your workflow

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Profile (Protected)
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update user profile

### Tasks (Protected)
- `GET /api/tasks` - Get all tasks (with filters)
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 🎯 Usage

1. **Registration/Login**: Create an account or login with existing credentials
2. **Dashboard**: Access your personal task management interface
3. **Create Tasks**: Use the "Add New Task" button to create new tasks
4. **Manage Tasks**: Edit, delete, or mark tasks as complete
5. **Filter & Search**: Use search and filter options to find specific tasks
6. **Update Profile**: Manage your account information in the Profile section

## 🔧 Configuration

### Environment Variables

**Backend (.env)**
```env
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
PORT=5000
```

## 🐛 Troubleshooting

### Common Issues

1. **Tailwind CSS Not Working**
   ```bash
   cd frontend
   npm uninstall tailwindcss
   npm install -D tailwindcss@^3.4.0 postcss@^8.4.0 autoprefixer@^10.4.0
   ```

2. **MongoDB Connection Issues**
   - Ensure MongoDB is running locally or use MongoDB Atlas
   - Check connection string in `.env` file

3. **Port Already in Use**
   - Change PORT in backend `.env` file
   - Update frontend API URL in `src/services/api.js`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
```

### Backend (Heroku/Railway)
- Set environment variables in deployment platform
- Update CORS settings for production domain

## 👨‍💻 Author

Your Name
- GitHub: [@Ela160403](https://github.com/ela160403)
- Email: ela16042003@example.com
