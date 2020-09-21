import React,{useState} from 'react';
import { Text,FlatList,View} from 'react-native';
import {styles} from '../styles';
import TodoItem from './TodoItem';




export default function Headders({todos,pressHandler}) {
    
  return (
        <View style={{flex:1}}>
          
         <FlatList style={styles.ortayazi} 
        data={todos}
        renderItem={({item})=>(

        <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
        
        )}
        ></FlatList>
        
        </View>
  
    
  );
}