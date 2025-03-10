
# **Twitter Clone**

A full-stack **Twitter Clone** application that replicates core features of Twitter, including user authentication, tweet creation, liking, commenting etc. This project demonstrates the use of modern web development technologies to build a scalable and responsive social media platform.

---

## **Features**

### **User Features:**
- **User Authentication**: Secure login and registration using JWT.
- **Tweet Creation**: Post tweets with real-time updates.
- **Like and Comment**: Interact with tweets by liking and commenting.
- **Real-Time Notifications**: Receive instant notifications for likes, comments, and other interactions.
- **Profile Management**: View and update user profiles.

### **Admin Features:**
- **User Management**: Manage user accounts and monitor activity.
- **Content Moderation**: Remove inappropriate tweets or comments.

---

## **Technologies Used**


### **Frontend:**
- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **DaisyUI**: A component library for Tailwind CSS.
- **react-icons**: A library that provides a collection of popular icons for React applications.
- **react-hot-toast**: A lightweight, customizable, and beautiful React toast library.
- **tanstack/react-query**: A powerful React library for managing server state with query caching, auto re-fetching, and more.

### **Backend:**
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A minimal and flexible Node.js web application framework.
- **Cloudinary**: A cloud-based image and video management service for uploading and delivering media assets.
- **bcrypt**: A library for hashing passwords to store them securely.
- **jsonwebtoken**: A library for generating and verifying JSON Web Tokens (JWT) for authentication and authorization.


### **Database:**
- **MongoDB**: For storing user, tweet, and interaction data.

---

## **Installation and Setup**

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/whiteblueskyss/x-clone
   cd twitter-clone
   ```

2. **Install Dependencies**:
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Set Up Environment Variables**:



```js
MONGO_URI=...
PORT=...
JWT_SECRET=...
NODE_ENV=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

4. **Run the Application**:
   - Start the backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd frontend
     npm start
     ```

5. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.

---

## **Usage**

1. **User Registration and Login**:
   - Register a new account or log in with existing credentials.

2. **Post Tweets**:
   - Create tweets and view them in real-time.

3. **Interact with Tweets**:
   - Like and comment on tweets, and receive real-time notifications.

4. **Profile Management**:
   - Update your profile and view other users' profiles.
