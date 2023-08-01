import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CategoryGirdItem from "../../components/Menu/CategoryGirdItem";
import Search from "../../components/Ui/Display/Seacrch";
import ErrorOverLay from "../../components/Ui/Handle/ErrorOverLay";
import LoadingOverlay from "../../components/Ui/Handle/LoadingOverLay";
import { fetchCategories } from "../../store/redux/Categories/categoriesAction";

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categories);
  useEffect(() => {
    function getCategories() {
      dispatch(fetchCategories());
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
    height: 556,
  },
});
