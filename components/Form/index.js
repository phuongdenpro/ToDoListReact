import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./style";

const Form = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      KeyboardAvoidingView = {10}
      style={styles.addTask}
    >
      <TextInput style={styles.input} placeholder="Your task"></TextInput>
      <TouchableOpacity onPress={}>
        <View style={styles.icon}>
          <Text style={styles.textIcon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default Form;
