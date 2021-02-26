import { StatusBar } from 'expo-status-bar';
import React from 'react';
import tailwind from 'tailwind-rn';
import { View } from 'react-native';

import { TodoApp } from './components/TodoApp';

export default function App() {
  return (
    <View style={tailwind('flex justify-center px-3')}>
      <TodoApp />
      <StatusBar style="auto" />
    </View>
  );
}
