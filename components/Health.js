import React from 'react';
import { Image, SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';

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
    <View style={styles.item}>
        <Image source={require("../assets/health.png")} style={{ height: 60, width: 60 }} />
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Health() {
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
