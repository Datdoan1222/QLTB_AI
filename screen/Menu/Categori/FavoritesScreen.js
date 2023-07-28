import { useContext, useEffect, useState } from "react";

import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import DevicesList from "../../../components/Menu/DevicesList";
import { Colors } from "../../../constants/Styles";
import { DeviceContext } from "../../../store/context/Devices-Context";

function FavoritesScreen() {
  const favoriteDeviceIds = useSelector((state) => state.favories.ids);
  const deviceCtx = useContext(DeviceContext);
  let favoriteDevices = [];

  try {
    const data = deviceCtx.devices;
    favoriteDevices = data.filter((device) =>
      favoriteDeviceIds.includes(device.id)
    );
  } catch (error) {
    setError("Could not fetch device!");
  }

  if (favoriteDevices.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite devices yet.</Text>
      </View>
    );
  }

  return <DevicesList deleteFavorite={false} item={favoriteDevices} />;
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
