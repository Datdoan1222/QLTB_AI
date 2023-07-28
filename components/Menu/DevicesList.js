import { View, FlatList, Text, StyleSheet } from "react-native";

import DevicesItem from "./DevicesItem";
import Search from "../Ui/Display/Seacrch";
import IconStatus from "../Ui/Display/IconStatus";
function DevicesList({ item, deleteFavorite }) {
  function renderDevicesItem(itemData) {
    const item = itemData.item;
    const deleteFavorites = {
      deleteFavorite: deleteFavorite,
    };
    return <DevicesItem data={item} {...deleteFavorites} />;
  }

  return (
    <View style={styles.container}>
      <Search />
      <View style={styles.container}>
        <View style={styles.infor}>
          <View style={styles.inforRow}>
            <IconStatus color="green">Chưa mượn</IconStatus>
            <IconStatus color="blue">Đã được mượn</IconStatus>
            <IconStatus color="red">Hỏng</IconStatus>
          </View>
        </View>

        <View style={styles.flatList}>
          <Text style={styles.title}>Danh sách</Text>
          <FlatList
            data={item}
            keyExtractor={() => item.id}
            renderItem={renderDevicesItem}
          />
        </View>
      </View>
    </View>
  );
}
export default DevicesList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 14,
  },
  inforRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  flatList: {
    flex: 1,
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
