import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../constants/Styles";

function SubTitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default SubTitle;
const styles = StyleSheet.create({
  subtitle: {
    color: Colors.primary900,
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitleContainer: {
    marginVertical: 10,
  },
});
