import React from 'react';
import { StyleSheet, Text, View, InputText} from 'react-native';

export default function UpdatePage() {
  return (
    <View style={styles.container}>
      <Text>Data in care te-ai lasat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});