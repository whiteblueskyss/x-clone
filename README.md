
# **Twitter Clone**

A full-stack **Twitter Clone** application that replicates core features of Twitter, including user authentication, tweet creation, liking, commenting, and real-time notifications. This project demonstrates the use of modern web development technologies to build a scalable and responsive social media platform.

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
- **ReactJS**: For building a dynamic and responsive user interface.
- **Redux**: For state management across the application.

### **Backend:**
- **NodeJS**: For building a scalable server-side application.
- **ExpressJS**: For creating RESTful APIs.
- **Socket.IO**: For enabling real-time communication and notifications.

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
   - Create a `.env` file in the `backend` directory and add the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     SOCKET_PORT=your_socket_port
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
