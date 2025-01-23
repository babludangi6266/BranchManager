# Branch Manager

Branch Manager is a simple backend project designed to manage branches in an organization. It includes features for creating, retrieving, updating, and deleting branch information, with optional support for uploading and managing branch logos.

## Features

- **Create Branch**: Add new branches with a name, location, and optional logo.
- **Retrieve All Branches**: Fetch details of all branches.
- **Update Branch**: Edit the details of an existing branch, including its logo.
- **Delete Branch**: Remove a branch by its ID.
- **Logo Support**: Upload and store branch logos as base64 strings.

## Technologies Used

- **Backend Framework**: Express.js
- **Database**: MongoDB (with Mongoose as the ODM library)
- **File Uploads**: Multer
- **Environment Management**: dotenv
- **Utilities**: Body-parser, Cors

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- MongoDB

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/babludangi6266/BranchManager.git
   cd auth-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/branchmanager
   ```

4. Start the server:

   - In production mode:

     ```bash
     npm start
     ```

   - In development mode (with nodemon):

     ```bash
     npm run dev
     ```

5. Access the API:

   The server will run on `http://localhost:5000`.

## API Endpoints

### Branch Management

#### 1. Create a Branch

- **Endpoint**: `POST /api/branches/createBranch`
- **Description**: Creates a new branch.
- **Request Body**:
  ```json
  {
    "branchName": "string",
    "branchLocation": "string",
    "branchLogo": "File (optional)"
  }
  ```

#### 2. Get All Branches

- **Endpoint**: `GET /api/branches/getAllBranches`
- **Description**: Retrieves all branch details.

#### 3. Update a Branch

- **Endpoint**: `PUT /api/branches/updateBranch/:id`
- **Description**: Updates the branch details.
- **Request Body**:
  ```json
  {
    "branchName": "string",
    "branchLocation": "string",
    "branchLogo": "File (optional)"
  }
  ```

#### 4. Delete a Branch

- **Endpoint**: `DELETE /api/branches/deleteBranch/:id`
- **Description**: Deletes a branch by its ID.

## Folder Structure

```
BranchManager/
├── controllers/
│   └── branchController.js    # Contains branch-related logic
├── models/
│   └── branchModel.js         # Mongoose schema for branches
├── routes/
│   └── branchRoutes.js        # API routes for branch management
├── uploads/                   # Temporary storage for uploaded files
├── .env                       # Environment variables
├── server.js                  # Entry point of the application
├── package.json               # Dependencies and scripts
```

## Key Packages

- **Express**: For building the backend server.
- **Mongoose**: For interacting with MongoDB.
- **Multer**: For handling file uploads.
- **dotenv**: For managing environment variables.
- **cors**: For enabling Cross-Origin Resource Sharing.
- **nodemon**: For automatic server restarts during development.

## Running the Application

1. Start the server:

   ```bash
   npm run dev
   ```

2. Use a tool like Postman or cURL to interact with the API endpoints.

## License

This project is licensed under the ISC License.

## Author

Developed by Bablu.

