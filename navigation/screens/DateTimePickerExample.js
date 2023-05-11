import { useState } from "react";
import { Button, View, Text } from "react-native";
import { styles } from "../assetStyle/styles";
import { TextInput } from "react-native-gesture-handler";

export const DateTimePickerExample = () => {
  // const [date, setDate] = useState(new Date(1598051730000));

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   DateTimePickerAndroid.open({
  //     value: date,
  //     onChange,
  //     mode: currentMode,
  //     is24Hour: true,
  //   });
  // };

  // const showDatepicker = () => {
  //   showMode("date");
  // };

  // const showTimepicker = () => {
  //   showMode("time");
  // };

  return (
    <View style={[styles.row, { margin: 10 }]}>
      <TextInput
        keyboardType="numeric"
        maxLength={2}
        style={{
          width: 40,
          borderWidth: 1,
          borderColor: "#000",
          padding: 5,
          fontSize: 20,
        }}
      />
      <Text style={{ fontSize: 20, marginEnd: 5, marginStart: 5 }}>:</Text>
      <TextInput
        keyboardType="numeric"
        maxLength={2}
        style={{
          width: 40,
          borderWidth: 1,
          borderColor: "#000",
          padding: 5,
          fontSize: 20,
        }}
      />
    </View>
  );
};
