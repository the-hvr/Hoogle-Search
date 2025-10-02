# About HoogleSearch

HoogleSearch is a lightweight, responsive web application that allows users to search for images and view related descriptions. Built with Node.js, Express, and EJS, it uses APIs (like Pixabay) to fetch images dynamically based on user queries. The project is designed for simplicity and educational purposes, helping beginners understand backend API integration, templating, and frontend design.



# How It Works

 1. User visits the home page and enters a search term.

 2. The query is sent to the server using Express.js routes.

 3. The server makes an API request (e.g., to Pixabay) to fetch relevant images.

 4. The results, including images and descriptions, are rendered dynamically using EJS templates.

 5. If the route is invalid or no results are found, a custom 404 page is displayed.




# Features

 1. Search for images and display results with descriptions

 2. Custom 404 error page with a background image

 3. Responsive layout using CSS

 4. Navigation bar with project branding

 5. Modular code using EJS partials




# Tech Stack

 1. Node.js – Backend runtime environment

 2. Express.js – Web framework

 3. EJS – Templating engine

 4. Axios – API requests (Pixabay or other image API)

 5. CSS / JS – Frontend styling and interactivity




# Usage

 1. Visit the home page to see the project overview.

 2. Use the search box to enter any keyword.

 3. View images and descriptions returned from the API.

 4. If an invalid route is accessed, the custom 404 page is shown.




# Future Improvements

 1. Add pagination for image results

 2. Improve mobile responsiveness

 3. Add more social media links in the navbar

 4. Implement caching for faster API responses




# Installation & Setup

 1. Clone the repository
    git clone <your-repo-url>
    cd HoogleSearch

 2. Install dependencies
    npm install

 3. Create a .env file in the root directory
    PIXABAY_API_KEY=your_api_key_here
    PORT=3000

 4. Start the server
    node index.js

 5. Open in browser
    http://localhost:3000






# File Path
├── node_modules/              #  Node dependencies (do NOT push to GitHub)
├── public/
│   ├── images/
│   │   ├── background.png
│   │   ├── h-logo.png
│   │   └── error-background.png
│   ├── javascript/
│   │   └── index.js
│   └── stylesheet/
│       ├── search.css
│       └── style.css
├── views/
│   ├── partials/
│   │   ├── footer.ejs
│   │   ├── nav.ejs
│   │   └── starter.ejs
│   ├── error.ejs
│   ├── home.ejs
│   └── hoogle.ejs
├── .env                      # Environment variables (API keys, secrets) – do NOT push to GitHub
├── index.js                   # Main server file
├── package-lock.json
└── package.json

# Screenshot
<img width="1920" height="1080" alt="{8122DC49-1A6F-4DEF-99CA-D9707B549DE2}" src="https://github.com/user-attachments/assets/6bc70e6e-4cdd-4d0b-83e2-927282105d0e" />
<img width="1920" height="1080" alt="{FAF8EAD3-5853-4707-96C6-D24D4ADE927D}" src="https://github.com/user-attachments/assets/abb6a55e-79de-47a2-9448-ccb755970729" />
<img width="1920" height="1080" alt="{1EE7DA14-BC5D-4F35-AD80-FAF02453B1E8}" src="https://github.com/user-attachments/assets/174d0ecd-7bb0-49c2-afce-8452c1a52835" />




# License

This project is open-source under the MIT License

   1. You must give credit to @Harshvardhan Raj if you use this project.

   2. Commercial use is not allowed.


