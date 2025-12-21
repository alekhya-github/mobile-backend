# Mobile Backend API

A Node.js Express server that provides REST API endpoints for mobile phone data.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Start Production Server

```bash
npm run build
npm start
```

## 📋 Available Endpoints

- **GET /health** - Health check endpoint
- **GET /api/phones** - Get all phones
- **GET /api/phones/:id** - Get phone by ID
- **GET /api/phones/brand/:brand** - Get phones by brand
- **GET /api/phones/brands** - Get available brands

## 📊 API Response Format

All API responses follow this structure:

```json
{
  "success": boolean,
  "data": any,
  "message": string,
  "error": string (only on errors)
}
```

## 🛠️ Development

- **Port**: 3001 (configurable via PORT environment variable)
- **CORS**: Enabled for `http://localhost:3000` (React app)
- **Hot Reload**: Available with `npm run dev`

## 📱 Example Usage

```javascript
// Get all phones
fetch("http://localhost:3001/api/phones")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Get phone by ID
fetch("http://localhost:3001/api/phones/iphone-17-pro")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Get phones by brand
fetch("http://localhost:3001/api/phones/brand/apple")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## 🏗️ Project Structure

```
src/
├── app.ts              # Express app configuration
├── index.ts            # Server entry point
├── models/
│   └── Phone.ts        # Phone interface and types
├── data/
│   └── phoneData.ts    # Mock phone data
├── services/
│   └── phoneService.ts # Business logic
├── controllers/
│   └── phoneController.ts # Route handlers
└── routes/
    └── phoneRoutes.ts  # Route definitions
```
