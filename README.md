# PLP Study Plan Generator

An interactive MERN stack application for generating and managing personalized study plans.

## 🚀 Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Cookie-based Auth** - Secure session management
- **Google GenAI** - AI-powered plan generation
- **Nodemailer** - Email notifications
- **Express Validator** - Request validation

### Frontend
- **React** - UI library
- **Vite** - Build tool and development server
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **TailwindCSS** - Styling
- **React Toastify** - Toast notifications
- **Context API** - State management

## 🎯 Project Presentation & Pitch

### Pitch Deck
[View the pitch deck](https://www.canva.com/design/DAG4pvW5bwE/uHQiVhdqQC_wyZD4x1hg9w/edit?utm_content=DAG4pvW5bwE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

### Demo Video
A 5-10 minute video walkthrough of the application showcasing key features is available upon request. The demo covers:
- User registration and authentication
- AI-powered study plan generation
- Study plan management and tracking
- Admin dashboard features
- Payment integration and subscription management

### Key Features Demonstrated
1. **Authentication System** - Secure JWT and cookie-based auth
2. **AI-Generated Study Plans** - Powered by Google GenAI for personalized learning paths
3. **Progress Tracking** - Real-time quiz and assignment submissions
4. **Admin Dashboard** - User management and analytics
5. **Payment Integration** - Paystack integration for premium plans

## 📁 Project Structure

```
plp_final_project_MERN/
├── backend/                   # Backend server
│   ├── controllers/          # Request handlers
│   ├── cron-jobs/           # Scheduled tasks
│   ├── lib/                 # Utility libraries
│   ├── middleware/          # Express middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── utils/              # Helper functions
│   ├── db.js              # Database configuration
│   ├── server.js          # Express app setup
│   └── package.json       # Backend dependencies
│
└── my-app/                # Frontend React application
    ├── public/           # Static files
    ├── src/
    │   ├── assets/      # Images, fonts, etc.
    │   ├── Components/  # Reusable components
    │   ├── context/     # React Context providers
    │   ├── pages/       # Page components
    │   │   ├── admin/  # Admin dashboard
    │   │   └── user/   # User dashboard
    │   ├── App.jsx     # Root component
    │   └── main.jsx    # Entry point
    ├── index.html
    └── package.json    # Frontend dependencies
```

**Project images**
(home page)
<img  src="./images/home.png" style="width:100%; height:100%;/>

(Register page)
<img src="./images/register.png" style="width:100%; height:100%;/> 

(Login page)
<img src="./images/login.png" style="width:100%; height:100%;/>

(User Dashboard page)
<img src="./images/dashboard.png" style="width:100%; height:100%;/>

# VISIST LIVE SITE HERE

[Visit live site](https://plp-final-project-mern.vercel.app)

# VIDEO PRESENTATION
[vIDEO PRESENTATION](https://www.canva.com/design/DAG4pvW5bwE/uHQiVhdqQC_wyZD4x1hg9w/edit?utm_content=DAG4pvW5bwE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

# PITCH DECK
[PITCH DECK](https://www.canva.com/design/DAG4pvW5bwE/uHQiVhdqQC_wyZD4x1hg9w/edit?utm_content=DAG4pvW5bwE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Google Cloud API key (for AI features)

### Environment Variables

#### Backend (.env)
``` bash
DB_NAME=my_study_budy_ai
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
ORIGIN_URI=http://localhost:5173
JWT_SECRET=your_secret_code
PAYSTACK_SECRET_KEY=sk_live_key(paystack)
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=development
```

#### Frontend (.env)
```
VITE_API_URL=http://localhost:3000
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/VictorOduorKe/plp_final_project_MERN.git
cd plp_final_project_MERN
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../my-app
npm install
```

4. Start the backend server
```bash
cd backend
npm run dev
```


5. Start the frontend development server
```bash
cd my-app
npm run dev
```
**Create a .env in frontend(my-app) with these**
```bash
VITE_API_URL=http://localhost:3000
VITE_NODE_ENV=development
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 🧪 Running Tests

Backend tests use an in-memory MongoDB instance (mongodb-memory-server) so they are isolated and fast.

To run backend tests:

```bash
cd backend
npm test
```

Notes:
- Tests set up an in-memory database and seed helper functions are available in `backend/tests/setup.js`.
- If tests fail due to environment variables, make sure `JWT_SECRET` is set in your shell or `.env` for more deterministic tokens.

If you want to run frontend tests or add E2E tests, consider adding a `cypress` or `playwright` configuration under `my-app/`.

## 🌟 Features

- **User Authentication**
  - JWT and Cookie-based auth
  - Email verification
  - Password recovery

- **Study Plan Management**
  - AI-generated study plans
  - Weekly and daily task tracking
  - Progress monitoring

- **Quiz System**
  - Practice questions
  - Performance tracking
  - Score analytics

- **Admin Dashboard**
  - User management
  - Payment analytics
  - Content moderation

- **Payment Integration**
  - Premium plan subscriptions
  - Payment history
  - Subscription management

## 🔒 Security Features

- HTTP-only cookies for JWT storage
- CORS configuration
- Request validation
- Protected routes
- Rate limiting
- Input sanitization

## 📡 API Endpoints

All endpoints are based at `http://localhost:3000` (local development) or your deployed backend URL.

### Authentication Endpoints

#### POST /auth/register
Register a new user account.

**Request:**
```json
{
  "first_name": "John",
  "second_name": "Doe",
  "phone_number": "0712345678",
  "email": "john@example.com",
  "password": "Password123!",
  "confirmPassword": "Password123!"
}
```

**Response (201):**
```json
{
  "message": "✅ User registered successfully",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "first_name": "John",
    "second_name": "Doe",
    "email": "john@example.com"
  }
}
```

#### POST /auth/login
Authenticate a user and receive JWT cookie.

**Request:**
```json
{
  "email": "john@example.com",
  "password": "Password123!"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "first_name": "John",
    "second_name": "Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

Sets HTTP-only cookie: `token=<JWT>`

#### POST /auth/logout
Logout and clear auth cookie.

**Response (200):**
```json
{
  "message": "User logged out"
}
```

### Subject Endpoints (Protected)

#### POST /api/subjects
Create a new subject for the authenticated user.

**Request:**
```json
{
  "title": "Mathematics",
  "description": "Advanced calculus and algebra"
}
```

**Response (201):**
```json
{
  "id": "507f1f77bcf86cd799439011",
  "user_id": "507f1f77bcf86cd799439012",
  "title": "Mathematics",
  "description": "Advanced calculus and algebra",
  "createdAt": "2025-01-14T10:30:00.000Z"
}
```

#### GET /api/subjects/:user_id
Fetch all subjects for a user.

**Response (200):**
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "title": "Mathematics",
    "description": "Advanced calculus and algebra"
  }
]
```

#### DELETE /api/subjects/:id
Delete a subject by ID.

**Response (200):**
```json
{
  "message": "Subject deleted successfully"
}
```

### Admin Endpoints (Protected - Admin role required)

#### GET /api/admin/users
Fetch all users (admin only).

**Response (200):**
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "first_name": "John",
    "second_name": "Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2025-01-14T10:30:00.000Z"
  }
]
```

#### DELETE /api/admin/users/:id
Delete a user by ID (admin only).

**Response (200):**
```json
{
  "message": "User deleted successfully"
}
```

#### PATCH /api/admin/users/:id/status
Toggle user status between "active" and "blocked".

**Response (200):**
```json
{
  "message": "User status updated to active",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "status": "active"
  }
}
```

### Study Plan Endpoints (Protected)

#### GET /plan
Fetch study plans for a user.

**Query Parameters:**
- `user_id` - The user's ID
- `subject_id` (optional) - Filter by subject

**Response (200):**
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "user_id": "507f1f77bcf86cd799439012",
    "subject_id": "507f1f77bcf86cd799439013",
    "title": "Weekly Math Plan",
    "tasks": [
      {
        "day": "Monday",
        "topic": "Calculus Basics",
        "duration": "2 hours"
      }
    ]
  }
]
```

#### POST /plan
Generate a new AI-powered study plan.

**Request:**
```json
{
  "user_id": "507f1f77bcf86cd799439012",
  "subject_id": "507f1f77bcf86cd799439013",
  "duration": "4 weeks",
  "level": "intermediate"
}
```

**Response (201):**
```json
{
  "id": "507f1f77bcf86cd799439011",
  "plan": { /* Generated plan with tasks */ }
}
```

### Payment Endpoints

#### POST /payment
Initiate a payment for a subscription.

**Request:**
```json
{
  "user_id": "507f1f77bcf86cd799439011",
  "amount": 5000,
  "package": "premium"
}
```

**Response (200):**
```json
{
  "authorization_url": "https://checkout.paystack.com/...",
  "access_code": "...",
  "reference": "..."
}
```

#### GET /payment/status/:user_id
Check payment and subscription status for a user.

**Response (200):**
```json
{
  "status": "active",
  "package": "premium",
  "expiresAt": "2025-06-14T10:30:00.000Z"
}
```

### Error Responses

All errors follow this format:

**400 Bad Request:**
```json
{
  "error": "Email and password are required"
}
```

**401 Unauthorized:**
```json
{
  "message": "Not authorized, no token"
}
```

**403 Forbidden:**
```json
{
  "message": "Forbidden: insufficient role"
}
```

**500 Server Error:**
```json
{
  "error": "Server error"
}
```

For full API documentation, see [backend/API.md](./backend/API.md).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -am 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Create Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Author

- Victor Oduor
- GitHub: [@VictorOduorKe](https://github.com/VictorOduorKe)
