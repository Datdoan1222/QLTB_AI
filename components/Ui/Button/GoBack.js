import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

function GoBack({ onPress }) {
  return (
    <View>
      <Pressable style={styles.goBack} onPress={onPress}>
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </Pressable>
    </View>
  );
}
export default GoBack;
const styles = StyleSheet.create({
  goBack: {
    marginBottom: 20,
  },
});
