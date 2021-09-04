import React from 'react';
import { Image, SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';

const DATA = [
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

const Item = ({ title }) => (
    <View style={styles.item}>
        <Image source={require("../assets/trophy.png")} style={{ height: 60, width: 60 }} />
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Trophies() {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
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
    },

    title: {
        fontSize: 14,
        color: '#ffffff',
        padding: 20
    },
});
