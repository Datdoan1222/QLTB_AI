import { Text, View, StyleSheet } from "react-native";
import IconStatus from "../../Ui/Display/IconStatus";

function DevicesDetails({
  id,
  parentId,
  description,
  name,
  image,
  color,
  deleteFavorite,
  isColorStatus,
  style,
  textStyle,
}) {
  function iconsShow() {
    if (!isColorStatus && !deleteFavorite) {
      return (
        <IconStatus
          name="alert-circle-sharp"
          size={10}
          color={color}
        ></IconStatus>
      );
    }
  }
  return (
    <View style={[style]}>
      <View style={styles.titleContainer}>
        <Text
          numberOfLines={2} //  Đặt số lượng dòng của Text là 1.
          ellipsizeMode="tail" //Thiết lập chế độ cắt ngắn tiêu đề khi vượt quá kích thước quy định và thêm dấu "..." vào cuối.
          style={[styles.titleText, textStyle]}
        >
          {name}
        </Text>
        {iconsShow()}
      </View>
      <View style={styles.content}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.detailsItem, textStyle]}
        >
          Mã thiết bị: {parentId}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.detailsItem, textStyle]}
        >
          Số lượng: 1
        </Text>
        {/* <Text 
        numberOfLines={1} 
          ellipsizeMode="tail" 
          style={[styles.detailsItem, textStyle]}>
          {affordability.toUpperCase()}
        </Text> */}
      </View>
    </View>
  );
}
export default DevicesDetails;
const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    height: 50,
  },
  titleText: {
    width: "70%",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    marginTop: 0,
  },
  detailsItem: {
    fontSize: 14,
  },
});
