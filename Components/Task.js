import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Task(props) {
  const [input, setInput] = useState("");
  return (
    <View>
      <TouchableOpacity style={styles.item}>
        <View style={styles.allItems}>
          <View style={styles.itemLeft}></View>
          <Text style={styles.itemText}>{props.text}</Text>
          <View style={styles.itemRight}></View>
        </View>
      </TouchableOpacity>
      <View>
        <View style={styles.blueBox}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    elevation: 10,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 5,
    backgroundColor: "white",
    marginBottom: 5,
  },
  itemLeft: {
    backgroundColor: "#55bcf6",
    opacity: 0.4,
    height: 24,
    width: 24,
    borderRadius: 5,
  },
  itemRight: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderRadius: 5,
    borderWidth: 2,
    marginTop: 8,
    marginLeft: "auto",
  },
  allItems: {
    display: "flex",
    flexDirection: "row",
  },
  itemText: {
    fontSize: 14,
    fontWeight: "400",
    marginHorizontal: 20,
  },
});
