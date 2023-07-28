import { Image, Pressable, Text, View, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/redux/Favorites";
import DevicesDetails from "./DevicesDetails";
import IconsButton from "../Ui/Button/IconsButton";

function DevicesItem({ data, deleteFavorite, route }) {
  const favoriteDevicesIds = useSelector((state) => state.favories.ids);
  const deviceIsFavorite = favoriteDevicesIds.includes(data.id);
  const dispatch = useDispatch();
  function deleteDeviceFavorite() {
    if (deviceIsFavorite) {
      dispatch(removeFavorite({ id: data.id }));
    } else {
      dispatch(addFavorite({ id: data.id }));
    }
  }
  const navigation = useNavigation();

  function selectDeviceItemHandelr(dataitem) {
    navigation.navigate("DevicesDetailsScreen", {
      dataitem: dataitem,
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
  iconTrash: {
    right: 55,
    marginTop: 10,
  },
});
