import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Task from "./components/Task";
import styles from "./App.components.style";
import Form from "./components/Form";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item,index) => {
              return <Task />
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />

      <StatusBar style="dark" />
    </View>
  );
};

export default App;
