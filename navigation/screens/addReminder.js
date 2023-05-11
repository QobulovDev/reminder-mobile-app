import { View, Text, TextInput, Button } from "react-native";
import { homeStyle, styles } from "../assetStyle/styles";
import { useState } from "react";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DateTimePickerExample } from "./DateTimePickerExample";

export default function AddReminder({ setAddwin }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={[styles.absolute, homeStyle.addWin, { zIndex: 20 }]}>
      <Text style={{ textAlign: "center", fontSize: 20 }}>Add</Text>
      <TextInput
        placeholderTextColor="#666"
        placeholder="Enter title"
        style={styles.input}
      />
      <TextInput
        placeholderTextColor="#666"
        placeholder="Enter text"
        multiline={true}
        numberOfLines={3}
        style={styles.textarea}
      />
      <View style={[styles.row, styles.between]}>
        <DateTimePickerExample />
      </View>
      <View style={[styles.row, styles.around]}>
        <Button title="Add" />
        <Button onPress={() => setAddwin(false)} title="cancel" />
      </View>
    </View>
  );
}
