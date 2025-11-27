# Track-3 Full-stack Application

This is a full-stack application with a React frontend and a Node.js/Express backend.

## Tech Stack

**Frontend:**
*   React.js
*   React Router DOM

**Backend:**
*   Node.js
*   Express.js
*   MySQL (via Sequelize ORM)
*   CORS
*   Concurrently (for running both frontend and backend in development)

## Setup Steps

To get this project up and running locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/the-ayushgupta/Track-3-Full-stack.git
cd Track-3-Full-stack
```

### 2. Backend Setup

#### Install Dependencies

```bash
npm install
```

#### Database Configuration

This application uses MySQL. You need to:

1.  Ensure you have a MySQL server running.
2.  Create a database named `employee_task_db`.
3.  Update the database credentials in `config/db.js` if they are different from:
    *   **Database Name:** `employee_task_db`
    *   **Username:** `root`
    *   **Password:** `Khsi12234#@!`

#### Run the Backend

```bash
npm start
```

This will start the backend server on `http://localhost:5000`.

### 3. Frontend Setup

#### Navigate to Frontend Directory

```bash
cd frontend
```

#### Install Dependencies

```bash
npm install
```

#### Run the Frontend

```bash
npm start
```

This will start the frontend development server on `http://localhost:3000`.

### 4. Run Both Frontend and Backend (Development)

From the project root directory, you can run both the frontend and backend concurrently:

```bash
npm run dev
```

This command uses `concurrently` to start both servers.

## Deployment to GitHub Pages (Frontend Only)

The frontend of this application is deployed to GitHub Pages. The backend requires a separate hosting solution.

### Access the Hosted Frontend

Your hosted frontend should be available at: [http://the-ayushgupta.github.io/Track-3-Full-stack](http://the-ayushgupta.github.io/Track-3-Full-stack)

**Note:** The hosted frontend will not display data until the backend API is deployed to a public server and the frontend's API calls are updated to point to the public backend URL.

## Future Improvements

*   Deploy the backend API to a public server (e.g., Heroku, Railway, Render).
*   Update frontend API calls to use the deployed backend URL.

