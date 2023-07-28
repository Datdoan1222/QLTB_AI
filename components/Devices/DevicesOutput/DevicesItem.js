import { Pressable, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import DevicesDetails from "./DevicesDetails";

import { Colors } from "../../../constants/Styles";
function DevicesItem({
  id,
  parentId,
  description,
  name,
  image,
  color,
  deleteFavorite,
}) {
  const navigation = useNavigation();
  function devicesPressHandler() {
    navigation.navigate("AddList", {
      deviceId: id,
    });
  }
  const favoriteDevicesIds = useSelector((state) => state.favoriteDevices.ids);
  const deviceIsFavorite = favoriteDevicesIds.includes(id);
  const dispatch = useDispatch();
  function deleteDeviceFavorite() {
    if (deviceIsFavorite) {
      dispatch(removeFavorite({ id: id }));
    } else {
      dispatch(addFavorite({ id: id }));
    }
  }
  function selectDeviceItemHandelr() {
    navigation.navigate("DevicesDetails", {
      deviceId: id,
    });
  }
  const showConfirmationAlert = () => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc chắn bạn muốn xóa yêu thích thiết bị nàynày?",
      [
        {
          text: "Hủy",
          style: "cancel",
        },
        {
          text: "Xác nhận",
          onPress: deleteDeviceFavorite,
        },
      ]
    );
  };
  return (
    <View style={styles.devicesItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }} //android
        // ios
        style={({ pressed }) => [pressed ? styles.buttonPreseed : null]}
        onPress={selectDeviceItemHandelr}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <DevicesDetails
            style={styles.details}
            title={name}
            description={description}
            colorStatus={color}
            deleteFavorite={deleteFavorite}
          />
          {deleteFavorite && (
            <View style={styles.iconTrash}>
              <IconsButton
                icon="trash-outline"
                size={24}
                color="red"
                onPress={showConfirmationAlert}
              />
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
}
export default DevicesItem;
const styles = StyleSheet.create({
  devicesItem: {
    marginVertical: 16,
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 10, // android
    shadowColor: "black", // ios
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible", //ios
    shadowOpacity: 0.4,
  },
  details: {
    marginVertical: 10,
    marginLeft: 14,
  },
  innerContainer: {
    flexDirection: "row",
    // ios
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPreseed: {
    opacity: 0.8,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  iconTrash: {
    right: 55,
    marginTop: 10,
  },
});
