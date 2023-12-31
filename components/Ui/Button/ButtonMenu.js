import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../../constants/Styles";

function ButtonMenu({ children, onPress, icon, size, out }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, styles.content, out]}>{children}</Text>
      <Ionicons
        style={[styles.iconButton, styles.content, out]}
        name={icon}
        size={size}
      />
    </Pressable>
  );
}

export default ButtonMenu;
const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 390,
    margin: 3,
    borderRadius: 10,
    paddingHorizontal: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  content: {
    lineHeight: 50,
    color: Colors.primary900,
  },
  buttonText: {
    fontSize: 18,
  },
  iconButton: {
    position: "absolute",
    left: 10,
  },
});
