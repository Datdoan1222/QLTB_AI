import { useContext, useEffect, useState } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../../util/Categories";
import { setCategories } from "../../store/redux/Categories";

import CategoryGirdItem from "../../components/Menu/CategoryGirdItem";

import Search from "../../components/Ui/Display/Seacrch";
import ErrorOverLay from "../../components/Ui/Handle/ErrorOverLay";
import LoadingOverlay from "../../components/Ui/Handle/LoadingOverLay";

function HomeScreen({ navigation }) {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const categories = useSelector((state) => state.categoiries);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCategories() {
      setIsFetching(true);
      try {
        const categories = await fetchCategories();
        dispatch(setCategories(categories));
      } catch (error) {
        setError("Could not fetch category!");
      }
      setIsFetching(false);
    }
    getCategories();
  }, [dispatch]);

  if (error && !isFetching) {
    return <ErrorOverLay message={error} />;
  }
  if (isFetching) {
    return <LoadingOverlay />;
  }
  function renderCategoryItem(itemData) {
    function pressHandler(id) {
      navigation.navigate("DeviceOverview", {
        idCategories: id,
      });
    }
    return (
      <CategoryGirdItem
        id={itemData.item.id}
        title={itemData.item.name}
        imageUrl={itemData.item.image}
        color={itemData.item.color}
        onPress={() => {
          pressHandler(itemData.item.id);
        }}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <View style={styles.flatList}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  flatList: {
    height: 555,
  },
});
