import React, { useLayoutEffect, useEffect } from "react";
import { Image, Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import DevicesDetails from "../../../components/Menu/DevicesDetails";
import SubTitle from "../../../components/Menu/SubTitle";
import IconButton from "../../../components/Ui/Button/IconsButton";
import { Colors } from "../../../constants/Styles";
import Button from "../../../components/Ui/Button/Button";
import {
  addFavoriteDevice,
  removeFavoriteDevice,
} from "../../../store/redux/Favorites/favoritesReducer";
import IconsButton from "../../../components/Ui/Button/IconsButton";
import {
  deleteDevice,
  fetchDevices,
} from "../../../store/redux/Devices/devicesAction";
import LoadingOverlay from "../../../components/Ui/Handle/LoadingOverLay";
function DevicesDetailsScreen({ navigation }) {
  const route = useRoute();
  const { dataitem } = route.params;
  const dispatch = useDispatch();

  const { data, loading, error, success } = useSelector(
    (state) => state.devices
  );
  const favoriteDevices = useSelector(
    (state) => state.favories.favoriteDevices
  );
  const handleDeleteDevice = (deviceId) => {
    dispatch(deleteDevice(deviceId));
  };
  const showConfirmationAlert = (deviceId) => {
    Alert.alert("Xác nhận", "Bạn có chắc chắn bạn muốn xóa thiết bị này?", [
      {
        text: "Hủy",
        style: "cancel",
      },
      {
        text: "Xác nhận",
        onPress: handleDeleteDevice(deviceId),
      },
    ]);
  };
  useEffect(() => {
    if (success) {
      Alert.alert("Thành công", "Đã xóa thiết bị thành công!");
    }
  }, [success]);
  useEffect(() => {
    function getDevices() {
      dispatch(fetchDevices());
    }
    getDevices();
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconsButton
          icon="trash-outline"
          color="red"
          size={30}
          onPress={() => showConfirmationAlert(dataitem.id)}
        />
      ),
    });
  }, [dataitem.id, navigation]);
  // remove Device
  if (loading) {
    return <LoadingOverlay />;
  }

  if (error) {
    return <ErrorOverLay message={error} />;
  }

  // remove Favorite Device
  const isDeviceFavorite = (deviceId) =>
    favoriteDevices.some((device) => device.id === deviceId);

  function changeFavoriteStatusHandler(deviceId) {
    if (isDeviceFavorite(deviceId)) {
      dispatch(removeFavoriteDevice(deviceId));
    } else {
      if (dataitem.status !== 1) {
        dispatch(addFavoriteDevice(dataitem));
      } else {
        Alert.alert(
          "Thiết bị này có chấm đỏ, dấu hiệu đang báo hỏng",
          "Xin vui lòng chọn các thiết bị khác"
        );
      }
    }
  }

  function addDeviceHander({}) {
    if (isDeviceFavorite(dataitem.id)) {
      Alert.alert("Báo!!!!", "Thêm thành công");
    } else {
      Alert.alert("Báo!!!!", "Thêm không thành công");
    }
  }
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: dataitem.image }} />
      <View style={styles.infor}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{dataitem.name}</Text>
          <IconButton
            icon={isDeviceFavorite(dataitem.id) ? "heart" : "heart-outline"}
            color={isDeviceFavorite(dataitem.id) ? "#FFC0CB" : "#FF1493"}
            size={40}
            onPress={() => changeFavoriteStatusHandler(dataitem.id)}
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
          <Button onPress={() => addDeviceHander}>Thêm vào danh sách</Button>
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
