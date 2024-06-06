
My chat application is a fully responsive platform that combines cutting-edge technologies to deliver a seamless user experience. Using React for the frontend, it incorporates React Router for smooth navigation and Framer Motion for engaging animations. Authentication and user management are handled by Cookies, ensuring secure sign-ups and logins with user IDs stored securely in cookies. Chat history is stored locally in the browser's local storage for each user, indexed by their user ID, which enhances the user experience by retaining message histories across sessions. This local storage approach ensures quick access to chat history without the need for backend queries.Our focus on security, performance optimization, and continuous user feedback ensures that this chat application not only meets current user needs but is also well-positioned for future enhancements and scalability.

Overview
A sign-in page
A sign-up page
A chat interface where users can interact with a chatbot that translates user messages into another language using the Google Translate API.


Features
Sign-In Page: Allows users to sign in with email and password, with basic form validation.
Sign-Up Page: Enables users to create an account with name, email, password, and confirm password fields, including validation.
Chat Interface: A chat interface where users can send messages and receive translated responses from a chatbot using the Google Translate API.
Technologies Used
Frontend: React
Routing: React Router
Styling: Tailwind CSS
Animations: Framer Motion
Storage: Cookies and Local Storage
API: Google Translate API

Setup Instructions
Prerequisites
Node.js installed on your machine
npm (Node Package Manager)
Installation
Clone the repository:
 

git clone https://github.com/latifamho/RaizerChatBot
Navigate to the project directory:
 

cd RaizerChatBot-main
Install dependencies:
 

npm install
Running the Project Locally
Start the development server:
 


npm start
Open your browser and go to http://localhost:3000 to view the application.
 
Deployed Website: https://raizer-chat-bot.vercel.app/
API Integration
The chatbot translates messages using the Google Translate API.

API Documentation: Google Translate API
Project Structure
src/
components/: Contains React components 
index.css Contains Tailwind CSS files
Utils/: Contains API service files
App.js: Main application component
index.js: Entry point of the application



