import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {  Image, SafeAreaView, FlatList, StyleSheet, Text, TouchableOpacity, View, Button, Dimensions, Platform, TextInput, InteractionManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import { openDatabase } from 'expo-sqlite';
const db = openDatabase('UserData.db');

const { width } = Dimensions.get('screen');
const width_proportion = '95%';
const height_first = '15%';
const height_second = '15%';
const height_third = '15%';


function Home({navigation}) {

  //var startDate = '29-03-2021';
  //var nrCigDaily = '20';
  //var pricePerCig = '1.2'; 

  return (
    <View style={homeStyles.container}>
            <TouchableOpacity style={homeStyles.first}>
            <Text style={homeStyles.text}>Au trecut 3 zile fara fumat.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.second}>
              <Text style={homeStyles.text}>Ai refuzat 60 tigari.</Text>    
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.third}>
            <Text style={homeStyles.text}> Ai economisit 80 lei.</Text>    
            </TouchableOpacity>
            <TouchableOpacity style={homeStyles.update}  onPress={() => navigation.navigate('Update Stats')}>
            <Text style={homeStyles.text2}>Modifica datele</Text>    
            </TouchableOpacity>
            
        </View>
    );
  }
  
  // db.transaction((tx) => {
  //   tx.executeSql(
  //     'create table if not exists UserData (startDate text, nrCigDaily int, pricePerCig int);', 
  //     []  
  //   );
  //   tx.executeSql('insert into UserData(startDate, nrCigDaily, pricePerCig) values (?, ?, ?)', 
  //     [startDate, nrCigDaily, pricePerCig]
  //   );
  // });




  function UpdatePage() {

    let [startDate, setStartDate] = useState('');
    let [nrCigDaily, setNrCigDaily] = useState('');
    let [pricePerCig, setPricePerCig] = useState('');

    // const updatePage () {
    //   db.transaction(function (tx) {
    //     tx.executeSql(
    //       'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
    //       [userName, userContact, userAddress],
    //       (tx, results) => {
    //         console.log('Results', results.rowsAffected);
    //         if (results.rowsAffected > 0) {
    // }

    return (
      <View style={updateStyles.container}>

      <Text style={updateStyles.text}>Data de start:</Text>
      <TextInput style={{padding: 10}}
                placeholder="Format: YYYY-MM-DD"
                onChangeText={
                  (startDate) => setStartDate(startDate)
                }
                keyboardType="numeric"
                maxLength={10}
      ></TextInput>
      <Text style={updateStyles.text}>Numarul de tigari fumate zilnic:</Text>
      <TextInput style={{padding: 10}}
                placeholder="Ex: 10"
                onChangeText={
                  (nrCigDaily) => setNrCigDaily(nrCigDaily)
                }
                keyboardType="numeric"
                maxLength={10}
      ></TextInput>
      <Text style={updateStyles.text}>Pretul mediu al unei tigari(RON):</Text>
      <TextInput style={{padding: 10}}
                placeholder="Ex: 1.2"
                onChangeText={
                  (pricePerCig) => setPricePerCig(pricePerCig)
                }
                keyboardType="numeric"
                maxLength={10}
      ></TextInput>
      <TouchableOpacity style={updateStyles.touch}>
        <Text style={{color: '#000'}}>Modifica</Text>
      </TouchableOpacity>
    </View>
  );
}

const DATA1 = [
  {
    id: '1',
    title: '1 zi fara sa fumezi!',
    value: 1,
  },
  {
    id: '2',
    title: '7 zile fara sa fumezi!',
  },
  {
    id: '3',
    title: '30 zile fara sa fumezi!',
  },
  {
    id: '4',
    title: '90 zile fara sa fumezi!',
  },
  {
    id: '5',
    title: '6 luni fara sa fumezi!',
  },
  {
    id: '6',
    title: '1 an fara sa fumezi!',
  },
  {
    id: '7',
    title: '20 tigari refuzate!',
  },
  {
    id: '8',
    title: '100 tigari refuzate!',
  },
];

const Item1 = ({ title }) => (
  <View style={trophyStyles.item}>
      <Image source={require("./assets/trophy.png")} style={{ height: 60, width: 60 }} />
      <Text style={trophyStyles.title}>{title}</Text>
  </View>
);

function Trophies() {
  const renderItem = ({ item }) => (
    <Item1 title={item.title} />
    );
    
    return (
      <SafeAreaView style={trophyStyles.container}>
          <FlatList
              data={DATA1}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              />
      </SafeAreaView>

);
}

const DATA = [
  {
    id: '1',
    title: '20 minute: Ritmul cardiac devine normal',
  },
  {
    id: '2',
    title: '12 ore: Nivelul de oxigen in corp creste',
  },
  {
    id: '4',
    title: '1 zi: Riscul de infarct scade',
  },
  {
    id: '5',
    title: '2 zile: Mirosul si gustul sunt imbunatatite ',
  },
  {
    id: '6',
    title: '1 luna: Capacitatea pulmonara creste',
  },
  {
    id: '7',
    title: '9 luni: Plamanii sunt mult mai puternici',
  },
  {
    id: '8',
      title: 'Benefit 3',
    },
    {
      id: '9',
      title: 'Benefit 3',
    },
    {
      id: '10',
      title: 'Benefit 3',
    },
    {
      id: '11',
      title: 'Benefit 3',
    },
  ];
  
  const Item = ({ title }) => (
    <View style={healthStyles.item}>
      <Image source={require("./assets/health.png")} style={{ height: 60, width: 60 }} />
      <Text style={healthStyles.title}>{title}</Text>
  </View>
);

function Health() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
    );
    
    return (
      <SafeAreaView style={healthStyles.container}>
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              />
      </SafeAreaView>

);
}


const TabBar = ({state, navigation}) => {
  const [selected, setSelected] = useState('Home')
  const { routes } = state;
  const renderColor = (currentTab) => (currentTab === selected ? 'gray' : 'black'); 
  
  const handlePress = (activeTab, index) => {
    if(state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
    
  }
  return (
    <View style={tabBarStyles.wrapper}>
            <View style={tabBarStyles.container}>
                {
                  routes.map((route, index) =>
                  <Tab
                  tab = {route}
                  key={route.key}
                  icon={route.params.icon}
                  onPress={() =>  handlePress(route.name, index)}
                  color={renderColor(route.name)} 
                  />)
                }
            </View>
        </View>
    );
  };
  
  const tabBarStyles = StyleSheet.create({
    wrapper: {
      position: 'absolute', 
      bottom: 20, 
      width, 
      height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300, 
        backgroundColor: '#fff',
        borderRadius: 100,
      },
    });
    
    const Tab = ({color, tab, onPress, icon}) => {
      return (
        <TouchableOpacity style={tabStyles.container} onPress={onPress}>
              {icon && <FontAwesome5 name={icon} size={20} color={color} />}
              <Text>{tab.name}</Text>
          </TouchableOpacity>
    
    );
  };
  
  
  function Diary() {
    
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
      <View style={diaryStyles.container}>
          <View style={diaryStyles.button}>
            <Button  onPress={showDatepicker} title="Alegeti Data" />
        </View>
        
        <TextInput
                style={diaryStyles.input} 
                placeholder="Cum te simti?"></TextInput>

        <Button style={diaryStyles.but}
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
    
    export default function App() {
      return (
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      );
    }
    
    const tabStyles = StyleSheet.create({
      container:  {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 5, 
        
        
      }
    });

    const diaryStyles = StyleSheet.create({
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

const healthStyles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'orange',
      justifyContent: 'center',
      width: '100%',
      paddingLeft: '5%', 
      paddingTop: '2%',  
  },
  item: {
      backgroundColor: 'black',
      color: 'white',
      padding: '3%',
      marginLeft: 0, 
      marginVertical: 4,
      flexDirection: "row",
      width: '95%', 
      borderRadius: 10, 
  },

  title: {
      fontSize: 14,
      color: '#ffffff',
      padding: 20
  },
});


const trophyStyles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'orange',
      justifyContent: 'center',
      width: '100%',
      paddingLeft: '5%', 
      paddingTop: '2%',  
  },
  item: {
      backgroundColor: 'black',
      color: 'white',
      padding: '3%',
      marginLeft: 0, 
      marginVertical: 4,
      flexDirection: "row",
      width: '95%', 
      borderRadius: 10, 
  },

  title: {
      fontSize: 14,
      color: '#ffffff',
      padding: 20
  },
});

const updateStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcc80',
    alignItems: 'center',
    paddingTop: '10%', 
  },
  text: {
    backgroundColor: '#ffcc80',
    color: '#000', 
    alignItems: 'center',
    fontSize: 18, 
  },
  touch: {
    height: '8%',
      backgroundColor: 'orange',
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center', 
      marginTop: '3%',
      borderRadius: 10,
      color: 'red',
  }

});

const homeStyles = StyleSheet.create({
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
        borderRadius: 10, 
    },
    second: {
        height: height_second,
        backgroundColor: '#ff9900',
        width: width_proportion,
        marginTop: '3%',  
        fontSize: 15, 
        borderRadius: 10, 
    },
    third: {
        height: height_third,
        backgroundColor: '#ff9900',
        width: width_proportion,
        marginTop: '3%',  
        borderRadius: 10, 
         
    },
    text: {
        alignItems: 'center',
        color: '#000', 
        marginTop: '10%', 
        marginLeft: '22%', 
        fontSize: 18,
    },
    text2: {
        color: '#fff', 
        alignItems: 'center', 
        fontSize: 18, 
        marginTop: '3%',  
    }, 
    update: {
      height: '8%',
      backgroundColor: '#000',
      width: width_proportion,
      alignItems: 'center',
      marginTop: '3%',
      borderRadius: 10, 
    },
});


const Stack = createStackNavigator();
const HomeNavigator = () => {
    return (     
        <Stack.Navigator> 
            <Stack.Screen name='Renunta!' component={Home}></Stack.Screen>
            <Stack.Screen name='Update Stats' component={UpdatePage}></Stack.Screen>
        </Stack.Navigator>    
    );
  };

const TabNav = createBottomTabNavigator();
 
const TabNavigator = () => {
    return (    
        <TabNav.Navigator tabBar={(props) => <TabBar {...props} /> }>
            <TabNav.Screen name='Acasa' component={HomeNavigator}  initialParams={{icon: 'home'}} options={{headerShown:false}}></TabNav.Screen>
            <TabNav.Screen name='Trofee' component={Trophies} initialParams={{icon: 'trophy'}}></TabNav.Screen>
            <TabNav.Screen name='Sanatate' component={Health} initialParams={{icon: 'briefcase-medical'}}></TabNav.Screen>
            <TabNav.Screen name='Jurnal' component={Diary} initialParams={{icon: 'book'}}></TabNav.Screen>
        </TabNav.Navigator>    
    );
};
