import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput,Appbar,Button } from 'react-native-paper'

const DisplayLove = (props)=>{
    //console.log(!props.result.message)
    if(props.result === 'error')
    {
        return ( <View style={styles.container}>
            <Text style={styles.result}>Network Error!</Text>
            <Text style={styles.result}> Please Try again...</Text>
         </View>
           )
    }
    if(props.result==='Loading...' || props.result === '')
    {
        return <Text style={styles.result}> {props.result}</Text>
    }
    
    return (
        <View style={styles.container}>
           <Text style={styles.result}>{props.result.percentage}%</Text>
           <Text style={styles.result}>{props.result.result}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:"center"
  // backgroundColor:'green'
},
    result:{
        
        fontSize:30,
        textAlign:'center',
        margin:20
    }
})

export default DisplayLove;