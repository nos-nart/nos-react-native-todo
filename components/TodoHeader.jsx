import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import tailwind from 'tailwind-rn';

export const TodoHeader = () => {
  return (
    <View style={tailwind('')}>
      <Text style={tailwind('text-blue-500 font-bold text-2xl text-center')}>React Native 📱 </Text>
    </View>
  )
}
