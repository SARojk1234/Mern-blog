Sure, here's the updated README.md file with the live link included:

---

# MERN Blog

Welcome to the MERN Blog repository! This is a simple blog application built using the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js. This application allows users to create, read, update, and delete blog posts.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Create and Manage Posts**: Authenticated users can create new blog posts and manage their existing posts.
- **View and Interact with Posts**: Users can view all blog posts and interact with them by leaving comments.
- **Responsive Design**: The application is designed to be responsive and work well on various devices and screen sizes.

## Live Demo

Check out the live demo of the application [here](https://mern-blog-grps.onrender.com/).

## Installation

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/SARojk1234/Mern-blog.git
```

2. Navigate to the project directory:

```bash
cd Mern-blog
```

3. Install the dependencies for both the client and server:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

4. Create a `.env` file in the `server` directory and add the following environment variables:

```plaintext
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Replace `your_mongodb_uri` with your MongoDB connection string and `your_jwt_secret` with a random string used for JWT token generation.

5. Run the server and client concurrently:

```bash
# From the root directory
npm run dev
```

6. Access the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
