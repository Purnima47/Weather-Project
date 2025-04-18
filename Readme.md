# 🌦️ Weather Project

A simple yet functional weather application built using HTML, CSS, and JavaScript. This app fetches real-time weather data from the OpenWeatherMap API based on user input.

## 🚀 Features

- 🔍 Search weather by city name  
- 🌡️ Displays temperature, humidity, wind speed, and weather condition  
- 🌇 Dynamic background images based on weather  
- 🌐 Fetches real-time data using the OpenWeatherMap API  

## 📸 Preview

![image](https://github.com/user-attachments/assets/744c9707-0a07-40c1-bed6-377361a03979)

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript   
- [OpenWeatherMap API](https://openweathermap.org/api)

## 📂 Project Structure

```
Weather-Project/
├── assets/         # Images and icons used in the website
├── css/            # Stylesheets
│   └── styles.css  # Main CSS file
├── js/             # JavaScript files
│   └── index.js    # Main JavaScript file
├── index.html      # Homepage
└── README.md       # Project documentation
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Purnima47/Weather-Project.git
cd Weather-Project
```

### 2. Open the App

You can open the app by:

- Using **Live Server** in Visual Studio Code  
**OR**  
- Simply opening the `index.html` file directly in your browser

### 3. Add Your API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api) and create a free account.
2. Navigate to the API section and copy your personal **API key**.
3. Open `script.js` and replace the placeholder with your actual API key:

```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

Save the file, then refresh the browser to see live weather data for your selected city.

## 📌 To Do / Future Enhancements

- Add geolocation support to fetch weather based on user location  
- Improve UI/UX for responsiveness  
- Add 5-day forecast feature  

## 🤝 Contributing

Contributions are welcome! Please fork the repository and open a pull request with your changes.