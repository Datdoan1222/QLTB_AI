import { FlatList } from "react-native";
import CategoryGirdItem from "./CategoryGirdItem";

function renderDevicesItem(itemData) {
  function pressHandler({ navigation }) {
    navigation.navigate("DeviceOverview", {
      categoryId: itemData.item.id,
      categoryTitle: itemData.item.title,
    });
  }
  return <CategoryGirdItem {...itemData.item} onPress={pressHandler} />;
}
function DevicessList({ devices }) {
  const reversedData = [...devices].reverse();
  return (
    <FlatList
      data={reversedData}
      renderItem={renderDevicesItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}
export default DevicessList;
