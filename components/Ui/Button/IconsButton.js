import { Pressable, StyleSheet, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Slogan } from "../Display/Title";

function IconsButton({ user, isImage, icon, color, size, onPress, source }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        user && styles.buttonUser,
      ]}
      onPress={onPress}
    >
      {isImage && (
        <View style={[user ? styles.imageUser : styles.images]}>
          <Image style={styles.image} source={source} />
        </View>
      )}
      {user && (
        <View style={styles.slogan}>
          <Slogan titleLabel="Smart Things" contentLabel="Thành viên" />
        </View>
      )}
      {!isImage && <Ionicons name={icon} color={color} size={size} />}
    </Pressable>
  );
}

export default IconsButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
  },
  buttonUser: {
    flexDirection: "row",
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
  images: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  imageUser: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
    borderRadius: 50,
  },
});
