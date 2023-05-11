import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  conlumn: {
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  around: {
    justifyContent: "space-around",
  },
  between: {
    justifyContent: "space-between",
  },
  container: {
    padding: 10,
    height: "100%",
  },
  image: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    top: 0,
  },
  absolute: {
    position: "absolute",
  },
  input: {
    height: 40,
    margin: 10,
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    color: "#000",
    fontSize: 18,
  },
  textarea: {
    margin: 10,
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    color: "#000",
    fontSize: 18,
    textAlignVertical: "top",
  },
  btn: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#00f",
    margin: 10,
  },
});
export const homeStyle = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#00f",
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardBody: {
    fontSize: 15,
  },
  cardDate: {
    padding: 5,
    borderWidth: 1,
    alignSelf: "flex-start",
    borderColor: "#000",
    borderRadius: 10,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  cardAction: {
    // borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 2,
    marginStart: 5,
  },
  addBtn: {
    position: "absolute",
    bottom: -5,
    right: 0,
    margin: 10,
    borderRadius: 50,
    zIndex: 2,
    padding: 5,
    paddingEnd: 7,
    paddingStart: 7,
    backgroundColor: "#00f",
  },
  addWin: {
    zIndex: 20,
    position: "relative",
    top: "20%",
    backgroundColor: "#fff",
    width: "90%",
    padding: 10,
    margin: 10,
    borderRadius: 15,
    borderColor: "#000",
  },
});
export const calendarStyle = StyleSheet.create({});
