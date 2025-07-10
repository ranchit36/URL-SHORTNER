# URL Shortener

A simple URL shortener built with Node.js, Express, MongoDB, and Mongoose. It allows you to shorten long URLs and track visit history for each short URL.

## Features
- Shorten long URLs to unique short IDs
- Redirect to the original URL using the short ID
- Track visit history (timestamps) for each short URL
- View and manage data using MongoDB Compass

## Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally (for Compass integration)

## Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
   cd REPO-NAME
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:3000`.

## API Endpoints

### 1. Shorten a URL
- **Endpoint:** `POST /url`
- **Body:**
  ```json
  {
    "url": "https://www.example.com"
  }
  ```
- **Response:**
  ```json
  {
    "shortId": "abcdefgh"
  }
  ```

### 2. Redirect to Original URL
- **Endpoint:** `GET /:shortId`
- **Usage:**
  - Visit `http://localhost:3000/abcdefgh` in your browser to be redirected to the original URL.

## Data Management
- Use [MongoDB Compass](https://www.mongodb.com/products/compass) to view and manage your data.
- Connect to your local MongoDB instance: `mongodb://localhost:27017`
- Database: `url-shortener`
- Collection: `urls`

## License
This project is licensed under the MIT License.