import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import DevicesList from "../../../components/Menu/DevicesList";
import { Colors } from "../../../constants/Styles";
function FavoritesScreen() {
  const favoriteDeviceIds = useSelector(
    (state) => state.favories.favoriteDevices
  );
  console.log(favoriteDeviceIds);

  if (favoriteDeviceIds.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite devices yet.</Text>
      </View>
    );
  }

  return <DevicesList deleteFavorite item={favoriteDeviceIds} />;
}

export default FavoritesScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary900,
  },
});
