import { Image, Pressable, Text, View, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import DevicesDetails from "./DevicesDetails";
import IconsButton from "../Ui/Button/IconsButton";
import { removeFavoriteDevice } from "../../store/redux/Favorites/favoritesReducer";
import IconStatus from "../Ui/Display/IconStatus";

function DevicesItem({ data, deleteFavorite, route }) {
  function removeDeviceFavorite(deviceId) {
    removeFavoriteDevice(deviceId);
    navigation.goBack();
  }
  const navigation = useNavigation();

  function selectDeviceItemHandelr(data) {
    navigation.navigate("DevicesDetailsScreen", {
      dataitem: data,
    });
  }
  const showConfirmationAlert = (deviceId) => {
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
          onPress: removeDeviceFavorite(deviceId),
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
        onPress={() => {
          selectDeviceItemHandelr(data);
        }}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: data.image }} style={styles.image} />
          </View>
          <DevicesDetails
            style={styles.details}
            name={data.name}
            categoryId={data.categoryId}
            description={data.description}
            number={data.number}
            status={data.status}
            recivedDate={data.recivedDate}
            returnDate={data.returnDate}
            deleteFavorite
          />
          {deleteFavorite ? (
            <View style={styles.icon}>
              <IconsButton
                icon="trash-outline"
                size={24}
                color="red"
                onPress={() => showConfirmationAlert(data.id)}
              />
            </View>
          ) : (
            <View style={styles.icon}>
              <IconStatus
                name="alert-circle-sharp"
                size={10}
                color={data.status}
              ></IconStatus>
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
    flex: 1,
    marginVertical: 8,
    borderRadius: 15,
    backgroundColor: "white",
    elevation: 7, // android
    shadowColor: "black", // ios
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 15,
    overflow: Platform.OS === "android" ? "hidden" : "visible", //ios
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
  icon: {
    right: 55,
    marginTop: 10,
  },
});
