# Workflo  

This web-based task management application is designed to streamline the way individuals and teams organize their workflows. Modeled after the intuitive interface of Trello, it features user-friendly task boards segmented into four specific columns: "To-Do", "In Progress", "Under Review", and "Completed". Users can engage with a robust suite of features including secure user authentication, dynamic task creation with customizable priorities and deadlines, and a practical drag-and-drop interface for real-time task management. The application ensures that all tasks are neatly organized and persistently stored, allowing users to focus on what's important—seamlessly managing their project tasks efficiently and effectively.

## Getting Started  

These instructions will get you a copy of the project up and running on your local machine or using Docker. Please follow the installation steps to set up the project environment.  

### Prerequisites  

Before running the project, ensure you have the following installed:  
- Node.js (v18+)  
- Docker (if you choose to run the application using Docker)  
- npm (Node Package Manager)  
- MongoDB (if not using Docker), running locally or hosted in the cloud  

### Installation  

The project consists of two main parts: the client and the server. You can set up the environment using Docker or by manually installing the necessary packages.  

#### Option 1: Using Docker  

1. **Docker Setup**  
    - Ensure Docker is installed on your system. You can download and install Docker from [Docker's website](https://www.docker.com/get-started).  
    
    - Navigate to the root directory of the project in your terminal and run:  
      ```  
      docker compose up  
      ```  
    - This command will automatically set up the client and server environments as defined in the `docker-compose.yml` file.  

#### Option 2: Manual Setup  

1. **Clone the Repository**  
    ```  
    git clone https://github.com/aljithkj02/work-flo.git  
    ```  
   
2. **Install Dependencies**  

    Navigate to both the `client` and `server` directories and install their dependencies:  
    ```  
    cd client  
    npm install  

    cd ../server  
    npm install  
    ```  

3. **Environment Variables**  

    Copy the `.env.example` file in both `client` and `server` directories to a new file named `.env`, and modify it to include your specific environment variables:  
    ```  
    cd client  
    cp .env.example .env  
    # edit .env as necessary  

    cd ../server  
    cp .env.example .env  
    # edit .env as necessary  
    ```  

### Running the Application  

After setting up the project, you can run the application in development or production mode.  

- **Development Mode**
    ```
    npm run dev
    ```

- **Production Mode**  
- Build the application:  
  ```  
  npm run build  
  ```  
- Start the application:  
  ```  
  npm run start  
  ```  

## Usage  

After setting up and running the project, you can access:  
- **Client**: [http://localhost:3000](http://localhost:3000) 
- **Server**: [http://localhost:8000](http://localhost:8000)

