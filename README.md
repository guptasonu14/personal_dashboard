# Personal Dashboard Application

![image](https://github.com/user-attachments/assets/4aff164e-8ba3-43cf-81ad-b9696f05e9ad)


This is a simple personal dashboard application built using ReactJS. It displays current weather information and top news headlines.

## Features

- **Weather Widget**: Shows current weather conditions including temperature and weather icon.
- **News Widget**: Displays top news headlines with links to full articles.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- ReactJS
- Axios for API requests
- CSS for styling
- NewsAPI.org for news headlines
- OpenWeatherMap API for weather data

## Project Structure

The project is structured as follows:

personal-dashboard-app/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Dashboard.js
│ │ ├── News.js
│ │ ├── Weather.js
│ ├── styles/
│ │ ├── Dashboard.css
│ │ ├── News.css
│ │ ├── Weather.css
│ ├── App.css
│ ├── App.js
│ ├── index.css
│ └── index.js
├── .gitignore
├── package.json
└── README.md


## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/personal-dashboard-app.git
   cd personal-dashboard-app

2. Install dependencies
   npm install

3. npm start

4. View the application

   Open http://localhost:3000 in your browser.

Design Decisions
Used separate components for Weather and News widgets for modularity.
Implemented periodic data fetching for news updates every 30 seconds.
Styled components using CSS to achieve a modern and responsive design.
