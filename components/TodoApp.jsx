import React from 'react';
import { View } from 'react-native';
import tailwind from 'tailwind-rn';

import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';

const initTasks = [
  { title: 'Learn React Native', status: false, id: 3 },
  { title: 'Learn Typescript', status: false, id: 1 },
  { title: 'Learn framer-motion', status: false, id: 2 },
]

export const TodoApp = () => {
  const [tasks, setTasks] = React.useState(initTasks);

  return (
    <View style={tailwind('my-6')}>
      <TodoHeader />
      <TodoList tasks={tasks}/>
    </View>
  )
}
