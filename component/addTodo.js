import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View, TouchableOpacity, Text } from 'react-native';


export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val);
    }
    const sıfırla = (text) => {
        submitHandler(text)
        setText("")
    }
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>

            <TextInput
                style={styles.input}
                value={text}
                placeholder='Ekle...'
                placeholderTextColor={"#BF0426"}
                onChangeText={changeHandler}
            ></TextInput>
            <TouchableOpacity style={styles.butontip} onPress={() => sıfırla(text)}>
                <Text style={{fontSize:20,color:'white'}}>Ekle</Text>
            </TouchableOpacity>


        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        flex: 1,
        borderColor: 'tomato',
        borderWidth: 2,
        paddingStart: 3,
        borderRadius: 15,
        marginLeft: 5,
        marginVertical:5,
        fontSize:20,
       // backgroundColor:"red"

        

    },
    butontip: {
        backgroundColor: '#F2BC57',
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        borderRadius: 3,
        marginVertical:5

    }
})