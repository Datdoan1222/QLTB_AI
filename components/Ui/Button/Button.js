import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../../constants/Styles";

function Button({ children, onPress, width, noStyle }) {
  return (
    <Pressable
      style={({ pressed }) => [
        !noStyle && styles.button,
        pressed && styles.pressed,
        width,
      ]}
      onPress={onPress}
    >
      <View>
        <Text style={[!noStyle ? styles.buttonText : styles.noStyle]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

export default Button;
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 220,
    margin: 10,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  noStyle: {
    color: "#000",
    textDecorationLine: "underline",
    fontSize: 14,
  },
  pressed: {
    opacity: 0.7,
  },

  buttonText: {
    color: Colors.primary50,
    fontSize: 18,
  },
});
