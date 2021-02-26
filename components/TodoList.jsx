import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import tailwind from 'tailwind-rn';
import { MaterialIcons } from '@expo/vector-icons';

export const TodoList = ({ tasks }) => {
  return (
    <View style={tailwind('my-4')}>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={tailwind('flex items-center justify-between')}>
              <Text>{item.title}</Text>
              <MaterialIcons size={15} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
