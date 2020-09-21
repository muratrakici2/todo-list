import React from 'react';
import { Text,TouchableOpacity,StyleSheet} from 'react-native';


export default function TodoItem({item,pressHandler}){

    return(
<TouchableOpacity onLongPress={()=>pressHandler(item.key)} style={styles.touch}>
    <Text style={styles.todo}>{item.text}</Text>
</TouchableOpacity>
)
}

const styles = StyleSheet.create({
    todo: {
        fontSize:20,
        color:'black',
       
     
        
    },
    touch:{
        borderStyle:'dashed',
        borderColor:'tomato',
        borderWidth:1,
        padding:5,
        marginVertical:8,
        borderRadius:10,
    }
})