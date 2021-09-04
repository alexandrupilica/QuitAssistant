import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Dimensions, Platform, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const { width } = Dimensions.get('screen');

export default function Home() {

    const [date, setDate] = useState(new Date(159805173000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    //const [text, onChangeText] = useState

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
     
      return (
        <View style={styles.container}>
          <View style={styles.button}>
            <Button  onPress={showDatepicker} title="Alegeti Data" />
        </View>
        
        <TextInput
                style={styles.input} 
                placeholder="Cum te simti?"></TextInput>
        <Button style={styles.but}
                title="Adauga"></Button>
          
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'orange',
            alignItems: 'center',
        },
        button: {
            paddingTop: '5%',
        },
        input: {
            height: '60%', 
            borderWidth: 1, 
            borderRadius: 15,
            width: '90%', 
            top: '10%',
            textAlignVertical: 'top',
            paddingLeft: 10,
            paddingTop: 5,  
        }, 
        but: {
            paddingTop: 15,
            marginTop: 30, 
        }
    });