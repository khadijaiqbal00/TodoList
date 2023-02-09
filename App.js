import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./Components/Task";
export default function App() {
  const [input, setInput] = useState("");
  const [Items, setItems] = useState([]);
  const AddNewTask = () => {
    Keyboard.dismiss();
    setItems([...Items, input]);
    setInput(null);
  };
  return (
    <View style={styles.container}>
      {/*Todays Task Heading*/}
      <View style={styles.todayTasks}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Todays Tasks</Text>
      </View>
      {/*Tasks */}
      {
        Items.map((Item, index) => {
        return <Task key={index} text={Item}/>;
      })
      
      }
      

      {/* Here we will write our own tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.addTask}>
          <View style={styles.textPart}>
            <TextInput
              placeholder="Write a Task"
              value={input}
              onChangeText={(text) => setInput(text)}
            />
          </View>
          <TouchableOpacity onPress={() => AddNewTask()}>
            <View style={styles.plusPart}>
              <Text
                style={{
                  fontSize: 40,
                  left: 10,
                  top: -8,
                  color: "#C0C0C0",
                  fontWeight: "300",
                }}
              >
                +
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  todayTasks: {
    marginTop: 94,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  addTask: {
    display: "flex",
    flexDirection: "row",
    marginTop: "auto",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  textPart: {
    elevation: 10,
    backgroundColor: "white",
    width: 220,
    paddingHorizontal: 50,
    height: 40,
    borderRadius: 20,
    padding: 5,
  },
  plusPart: {
    elevation:10,
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 40,
  },
});
