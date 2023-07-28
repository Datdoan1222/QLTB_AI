import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconStatus({ children, color }) {
  let ColorStatus;
  if (color === 1) {
    ColorStatus = "red";
  } else if (color === 2) {
    ColorStatus = "blue";
  } else if (color === 3) {
    ColorStatus = "green";
  } else {
    ColorStatus = color;
  }
  return (
    <View style={styles.row}>
      <Ionicons
        style={styles.icons}
        name="alert-circle-sharp"
        size={10}
        color={ColorStatus}
      />
      <Text>{children}</Text>
    </View>
  );
}
export default IconStatus;
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  icons: {
    lineHeight: 20,
    marginRight: 7,
    marginLeft: 10,
  },
});
