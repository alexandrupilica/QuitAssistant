import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Button} from 'react-native';


const { width } = Dimensions.get('screen');
const width_proportion = '95%';
const height_first = '15%';
const height_second = '15%';
const height_third = '15%';

import UpdatePage from './UpdatePage';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.first}>
            <Text style={styles.text}>Au trecut 3 zile fara fumat.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.second}>
            <Text style={styles.text}>Ai refuzat 60 tigari.</Text>    
            </TouchableOpacity>


            <TouchableOpacity style={styles.third}>
            <Text style={styles.text}> Ai economisit 80 lei.</Text>    
            </TouchableOpacity>
            <Button title="Go to Update" onPress={() => navigation.navigate('Update Stats')} />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffcc80',
        alignItems: 'center',
        
    },
    first: {
        height: height_first,
        backgroundColor: '#ff9900',
        width: width_proportion,
        marginTop: '3%', 
        fontSize: 15, 
    },
    second: {
        height: height_second,
        backgroundColor: '#ff9900',
        width: width_proportion,
        marginTop: '3%',  
        fontSize: 15, 
    },
    third: {
        height: height_third,
        backgroundColor: '#ff9900',
        width: width_proportion,
        marginTop: '3%',  
         
    },
    text: {
        alignItems: 'center',
        color: '#000', 
        marginTop: '10%', 
        marginLeft: '22%', 
        fontSize: 18,
    },
    med: {
        height: height_second,
        backgroundColor: '#ff9900',
        width: width_proportion,
        marginTop: '3%',
        backgroundColor: '#000',
        
         
    }, 
    textmed: {
        color: '#fff',
        alignItems: 'center',
        marginTop: '10%', 
        marginLeft: '22%', 
        fontSize: 15, 
        fontWeight: 'bold',
    }
});
