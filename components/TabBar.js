import React, {useState} from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Tab from './Tab';

const { width } = Dimensions.get('screen');

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
        <View style={styles.wrapper}>
            <View style={styles.container}>
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

const styles = StyleSheet.create({
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

export default TabBar;