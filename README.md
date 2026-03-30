# Quantity Measurement App - React Frontend

A modern, professional React application for quantity measurement with dual authentication (JWT + Google OAuth2).

## 🎨 Features

- **Dual Authentication**: Email/Password and Google OAuth2 login
- **Measurement Types**: Length, Weight, Volume, Temperature
- **Operations**: Compare, Convert, Add, Subtract, Divide
- **Operation History**: Track all your measurements
- **Modern UI**: Professional design with smooth animations
- **Responsive**: Works on desktop, tablet, and mobile

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend server running on http://localhost:8080

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Auth/           # Login, Register, OAuth components
│   ├── Dashboard/      # Main dashboard with measurement types
│   ├── Operations/     # Measurement operation forms
│   ├── History/        # Operation history viewer
│   └── Layout/         # Navbar and ProtectedRoute
├── context/
│   └── AuthContext.jsx # Global authentication state
├── services/
│   ├── api.js          # Axios instance with interceptors
│   └── auth.js         # Auth and measurement API services
├── utils/
│   └── constants.js    # App constants and configurations
├── App.jsx             # Main app with routing
└── main.jsx            # App entry point
```

## 🎨 Color Palette

- Primary Blue: `rgb(19, 78, 142)`
- Primary Red: `rgb(192, 7, 7)`
- Accent Orange: `rgb(255, 68, 0)`
- Accent Yellow: `rgb(255, 179, 63)`

## 🔐 Authentication

### Email/Password
1. Register or login with your credentials
2. Access token (15 min) and refresh token (7 days) stored in localStorage
3. Automatic token refresh on expiry

### Google OAuth2
1. Click "Continue with Google"
2. Authenticate with Google
3. Redirected back with JWT tokens
4. Seamless login experience

## 📊 Usage

### Dashboard
- View all available measurement types
- Click a type to see available operations

### Operations
- Select an operation (Compare, Convert, Add, etc.)
- Fill in the form with values and units
- Get instant results

### History
- View all your previous measurements
- Filter by operation type or measurement type
- See errors and successful operations

## 🛠 Build for Production

```bash
npm run build
```

## 📝 Environment Variables

Backend URL is configured in `src/utils/constants.js`:
```javascript
export const API_BASE_URL = 'http://localhost:8080';
```

Change this to your production backend URL when deploying.

## 🤝 Contributing

This is a private project. For any issues or questions, contact the development team.

