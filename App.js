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

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          <Task />
          <Task />
        </ScrollView>
      </View>
      <View style={styles.input}></View>

      <StatusBar style="dark" />
    </View>
  );
}


