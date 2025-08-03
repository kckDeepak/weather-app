

# Weather App

A simple web application that fetches and displays the current weather for a given city.

## Features

  * **Frontend**: Built with **React** and **Material-UI** for a clean, responsive user interface.
  * **Backend**: A **Node.js** and **Express** server that acts as an API to fetch weather data.
  * **API Integration**: Uses the **Weatherstack API** to retrieve up-to-date weather information.
  * **User-Friendly**: Allows users to input a city name and get the current temperature and a brief description of the weather.
  * **Robust Error Handling**: Provides clear feedback to the user if a city is not found or if there's a server error.

## Getting Started

Follow these steps to get the application up and running on your local machine.

### Prerequisites

You'll need the following installed:

  * Node.js (LTS version recommended)
  * A Weatherstack API key. You can get a free one by signing up [here](https://weatherstack.com/).

### Backend Setup

1.  **Navigate to the backend directory** and install the required Node.js packages:

    ```bash
    cd backend
    npm install express axios dotenv
    ```

2.  **Create a `.env` file** in the backend directory and add your API key:

    ```bash
    WEATHER_API_KEY=your_weatherstack_api_key_here
    ```

3.  **Start the backend server**:

    ```bash
    node server.js
    ```

    The server will run on `http://localhost:3001`.

### Frontend Setup

1.  **Navigate to the frontend directory** and install the required packages:

    ```bash
    cd frontend
    npm install
    ```

    (This assumes you've used `create-react-app` or a similar tool to set up the project).

2.  **Configure the API proxy**. This is crucial for development to allow the frontend to communicate with the backend without CORS issues. Add the following line to your frontend's `package.json` file:

    ```json
    "proxy": "http://localhost:3001",
    ```

3.  **Start the React development server**:

    ```bash
    npm start
    ```

    The frontend will open in your browser, typically at `http://localhost:3000`.

## How to Use

1.  Ensure both the backend and frontend servers are running.
2.  Open your browser to `http://localhost:3000`.
3.  Enter the name of a city in the text field.
4.  Click the "Submit" button to see the current weather.

## Technologies Used

### Frontend

  * **React**
  * **Material-UI**
  * **Roboto Font**

### Backend

  * **Node.js**
  * **Express**
  * **Axios**
  * **Dotenv**
  * **Weatherstack API**