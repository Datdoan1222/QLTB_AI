import { Text, View, StyleSheet } from "react-native";
import IconStatus from "../Ui/Display/IconStatus";

function DevicesDetails({
  name,
  categoryId,
  number,
  style,
  textStyle,
  status,
  isColorStatus,
  deleteFavorite,
}) {
  function iconsShow() {
    if (!deleteFavorite) {
      return (
        <IconStatus
          name="alert-circle-sharp"
          size={10}
          color={status}
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
        {!isColorStatus && iconsShow()}
      </View>
      <View style={styles.content}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.detailsItem, textStyle]}
        >
          Mã thiết bị: TB{categoryId}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.detailsItem, textStyle]}
        >
          Số lượng: {number}
        </Text>
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
