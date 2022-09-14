import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Task from "./components/Task/index";
import styles from "./App.components.style";
import Form from "./components/Form";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          <Task />
          <Task />
        </ScrollView>
      </View>
      <Form />

      <StatusBar style="dark" />
    </View>
  );
}
export default App;


