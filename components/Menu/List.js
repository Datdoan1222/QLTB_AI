import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem}>
      <Text style={styles.itemText} key={dataPoint}>
        {dataPoint}
      </Text>
    </View>
  ));
}
export default List;
const styles = StyleSheet.create({
  listItem: {
    marginVertical: 5,
  },
  itemText: {
    color: "gray",
  },
});
