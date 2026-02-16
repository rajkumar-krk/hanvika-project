# JobFlow Authentication Backend

Production-ready authentication backend for JobFlow application.

## Features

- JWT-based authentication
- Secure password hashing with bcrypt
- Input validation with Zod
- MongoDB Atlas integration
- Role-based access control
- Security middleware (Helmet, CORS)
- Request logging with Morgan

## API Endpoints

### Authentication

- `POST /api/auth/login` - User login

#### Login Request
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Success Response (200)
```json
{
  "accessToken": "jwt_access_token",
  "refreshToken": "jwt_refresh_token",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "role": "USER"
  }
}
```

#### Error Response (401)
```json
{
  "message": "Invalid credentials"
}
```

### Health Check

- `GET /health` - Server health status

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables in `.env`:
   ```
   PORT=5000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/jobflow?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=your-secret-key
   ```

3. Start the server:
   ```bash
   npm run dev  # Development mode with nodemon
   npm start    # Production mode
   ```

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- CORS protection
- Helmet security headers
- Request logging
- Error handling

## User Roles

- `USER` - Regular user
- `RECRUITER` - Recruiter with elevated permissions
