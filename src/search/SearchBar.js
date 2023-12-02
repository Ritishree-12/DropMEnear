import React, { useState } from 'react';
import { 
  View, 
  TextInput,
  TouchableOpacity 
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchBar() {

  const [location, setLocation] = useState('');

  return (
    <View>

      <GooglePlacesAutocomplete 
        // API key
        onPress={(data, details = null) => {
          // Set location
        }}
      />

      <TouchableOpacity>
        <Text>Search</Text>  
      </TouchableOpacity>

    </View>
  )

}