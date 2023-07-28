import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { Image, Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import DevicesDetails from "../../../components/Menu/DevicesDetails";
import SubTitle from "../../../components/Menu/SubTitle";
import IconButton from "../../../components/Ui/Button/IconsButton";
import { Colors } from "../../../constants/Styles";
import Button from "../../../components/Ui/Button/Button";
import { addFavorite, removeFavorite } from "../../../store/redux/Favorites";
import { useRoute } from "@react-navigation/native";
import IconsButton from "../../../components/Ui/Button/IconsButton";
function DevicesDetailsScreen({ navigation }) {
  function deleteDevice() {
    // deleteDevice
    Alert.alert("hello", "Đã xóa thành công");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconsButton
          icon="trash-outline"
          color="red"
          size={30}
          onPress={deleteDevice}
        />
      ),
    });
  }, []);
  const route = useRoute();
  const { dataitem } = route.params;
  const favoriteDevicesIds = useSelector((state) => state.favories.ids);
  const deviceId = dataitem.id;
  const deviceIsFavorite = favoriteDevicesIds.includes(deviceId);
  const dispatch = useDispatch();
  function changeFavoriteStatusHandler() {
    if (deviceIsFavorite) {
      dispatch(removeFavorite({ id: deviceId }));
    } else {
      if (dataitem.status !== 1) {
        dispatch(addFavorite({ id: deviceId }));
      } else {
        Alert.alert(
          "Thiết bị này có chấm đỏ, dấu hiệu đang báo hỏng",
          "Xin vui lòng chọn các thiết bị khác"
        );
      }
    }
  }

  function addDeviceHander({}) {
    if (deviceIsFavorite) {
      Alert.alert("Báo!!!!", "Thêm thành công");
    } else {
      Alert.alert("Báo!!!!", "Thêm không thành công");
    }
  }
  function deleteDeviceHandler() {}
  function deleteDeviceHandler1() {}

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: dataitem.image }} />
      <View style={styles.infor}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{dataitem.name}</Text>
          <IconButton
            icon={deviceIsFavorite ? "heart" : "heart-outline"}
            color={deviceIsFavorite ? "#FFC0CB" : "#FF1493"}
            size={40}
            key={deviceId}
            onPress={changeFavoriteStatusHandler}
          />
        </View>
        <DevicesDetails
          style={styles.contei}
          status={dataitem.status}
          isColorStatus
          number={dataitem.number}
          categoryId={dataitem.categoryId}
          // recivedDate={dataitem.recivedDate}
          // returnDate={dataitem.returnDate}
        />
      </View>
      <View style={styles.count}>
        <Text style={styles.countItem}>- 1 +</Text>
      </View>
      <View style={styles.ListContainer}>
        <SubTitle>Thông tin thiết bị</SubTitle>
        <ScrollView style={styles.description}>
          <Text>{dataitem.description}</Text>
        </ScrollView>
        <View style={styles.button}>
          <Button onPress={addDeviceHander}>Thêm vào danh sách</Button>
        </View>
      </View>
    </ScrollView>
  );
}
export default DevicesDetailsScreen;
const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 42,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 10,
  },
  infor: {},
  titleRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    width: "89%",
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.primary900,
  },
  contei: {
    marginTop: -20,
  },
  detailsText: {
    color: Colors.primary900,
    fontWeight: "bold",
    marginVertical: 3,
  },
  count: {
    alignItems: "center",
  },
  countItem: {
    fontSize: 30,
  },
  ListContainer: {},
  description: {
    marginVertical: 10,
    height: 150,
  },
  button: {
    alignItems: "center",
  },
});
