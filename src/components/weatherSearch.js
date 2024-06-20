import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CustomTextInput from './customTextInput';

// menambahkan searchWeather sebagai sebuah prop
const WeatherSearch = ({ searchWeather }) => {
  const [location, setLocation] = useState('');

  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        // menambahkan text dan onChange
        text={location}
        onChange={setLocation}
      />
      <View style={styles.buttonWrapper}>
        {/* manjealankan function seacrhWeather dengan parameter location */}
        <Button style={styles.button} title="Search" onPress={() => searchWeather(location)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'grey',
  },
});

export default WeatherSearch;
