import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './src/constant';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import WeatherSearch from './src/components/weatherSearch';
import WeatherInfo from './src/components/weatherInfo';

const App = () => {
  // mendefinisikan state "weatherData" dan "setWeatherData"
  const [weatherData, setWeatherData] = useState();

  // mendefinisikan state status
  const [status, setStatus] = useState();

  // mendefinisikan function renderComponent
  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" />;
      case 'success':
        return <WeatherInfo weatherData={weatherData} />;
      case 'error':
        return <Text style={styles.text}>Something went wrong. Please try again with a correct city name.</Text>;
      default:
        return;
    }
  };
  // function searchWeather dengan menggunakan axios
  function searchWeather(location) {
    // mengatur status ke "loading"
    setStatus('loading');
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        // Menambahkan code di bawah
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15; // Konversi Kelvin ke Celcius
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        // mengatur status ke "succes"
        setStatus('success');
      })
      .catch((error) => {
        // mengatur status ke "error"
        setStatus('error');
      });
  }

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />

      {/* sudah menggunkan function renderComponent */}
      {/* {weatherData && <WeatherInfo weatherData={weatherData} />} */}

      {/* renderComponent */}
      <View style={styles.marginTop20}>{renderComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    marginTop: 30,
    textAlign: 'center',
  },
});

export default App;
