import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // this is the react Fragment Element container
    <>
    <SafeAreaView style={{flex:1}}>
    <View style={{padding: 16, backgroundColor:"green"}} >
      <Text> Search </Text>
      </View>
      <View style={{flex:1,padding:16,backgroundColor:"blue"}}>
      <Text> list </Text>
      </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
