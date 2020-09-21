import React, { useState, useEffect } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import Headders from './component/Headders';
import { styles } from './styles';
import AddTodo from './component/addTodo';


export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('todos').then(todos => {

      if (todos !== null)
        setTodos(JSON.parse(todos))
    });
  }, [])

  useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  const submitHandler = (text) => {


    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    });




  }


  return (
    <View style={{ flex: 1 }}>

      <View style={styles.ust}>
        <Text style={styles.ustyazi}>List</Text>
      </View>

      <View style={styles.alt}>
        <AddTodo submitHandler={submitHandler}></AddTodo>
      </View>

      <View style={styles.orta}>
        <Headders todos={todos} pressHandler={pressHandler} ></Headders>
      </View>




    </View>
  );
}




