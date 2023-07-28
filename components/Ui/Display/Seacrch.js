import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

function Search() {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.search}
        name="search"
        placeholder="Tìm kiếm"
        onChangeText={(newUser) => setuser(newUser)}
      />
      <Ionicons style={styles.searchIcon} name="search-sharp" size={30} />
    </View>
  );
}
export default Search;
const styles = StyleSheet.create({
  searchContainer: {
    marginVertical: 20,
  },
  search: {
    backgroundColor: "#F2F2F2",
    height: 52,
    paddingLeft: 50,
    fontSize: 20,
    borderRadius: 15,
  },
  searchIcon: {
    position: "absolute",
    left: 10,
    color: "gray",
    lineHeight: 50,
  },
});
