import { View, Text, TouchableOpacity } from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { styles, homeStyle } from "../assetStyle/styles";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import AddReminder from "./addReminder";

export default function HomeScreen({ navigation }) {
  const [remin, setRemin] = useState([
    {
      title: "Team meeting",
      txt: "Planning sprint log for next product design update.",
      date: new Date(),
    },
  ]);
  const [addWin, setAddwin] = useState(false);
  return (
    <View style={styles.container}>
      {addWin && (
        <View
          style={{
            width: "110%",
            height: "110%",
            position: "absolute",
            margin: 0,
            zIndex: 18,
            backgroundColor: "#00000022",
          }}
        >
          <AddReminder setAddwin={setAddwin} setRemin={setRemin} />
        </View>
      )}
      <Text style={[styles.headerText, { marginBottom: 10 }]}>Reminders</Text>
      <ScrollView>
        {remin.map((item, index) => (
          <View key={index} style={[homeStyle.card, styles.conlumn]}>
            <Text style={homeStyle.cardTitle}>{item.title}</Text>
            <Text style={homeStyle.cardBody}>{item.txt}</Text>
            <View style={[styles.row, styles.between]}>
              <Text style={homeStyle.cardDate}>
                {item.date.toLocaleDateString()}
              </Text>
              <View style={styles.row}>
                <TouchableOpacity style={homeStyle.cardAction}>
                  <Feather name="edit-2" size={20} color={"#00f"} />
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.cardAction}>
                  <AntDesign name="delete" size={20} color={"#f00"} />
                </TouchableOpacity>
                <TouchableOpacity style={homeStyle.cardAction}>
                  <AntDesign name="check" size={20} color={"#0f0"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={homeStyle.addBtn}
        onPress={() => setAddwin(!addWin)}
      >
        <Ionicons name="add" size={30} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
}
