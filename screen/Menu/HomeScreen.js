import { useContext, useEffect, useState } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CategoryGirdItem from "../../components/Menu/CategoryGirdItem";
import Search from "../../components/Ui/Display/Seacrch";
import ErrorOverLay from "../../components/Ui/Handle/ErrorOverLay";
import LoadingOverlay from "../../components/Ui/Handle/LoadingOverLay";
import { fetchPosts, fetchProducts } from "../../store/redux/categoriesAction";
import { API, CATEGORIES } from "../../util/Url_API";

function HomeScreen({ navigation }) {
  const [isFetching, setIsFetching] = useState(true);
  // const [error, setError] = useState();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categories);
  console.log(error, "categories");
  useEffect(() => {
    function getCategories() {
      setIsFetching(true);
      dispatch(fetchProducts());
      setIsFetching(false);
    }
    getCategories();
  }, [dispatch]);

  if (error) {
    return <ErrorOverLay message={error} />;
  }

  if (loading) {
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
          data={data}
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
