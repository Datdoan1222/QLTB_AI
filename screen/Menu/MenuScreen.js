import { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ButtonMenu from "../../components/Ui/Button/ButtonMenu";
import IconsButton from "../../components/Ui/Button/IconsButton";
import { AuthContext } from "../../store/context/Auth-Context";

function MenuScreen({ navigation, id }) {
  const auth = useContext(AuthContext);
  return (
    <ScrollView>
      <View style={styles.container}>
        <IconsButton
          isImage
          user
          source={require("../../constants/img/User.png")}
          onPress={() => {
            navigation.navigate("Account");
          }}
        />
        <ButtonMenu
          icon="person-circle-outline"
          size={30}
          onPress={() => {
            navigation.navigate("Information");
          }}
        >
          Thông tin cá nhân
        </ButtonMenu>
        <ButtonMenu
          icon="ios-notifications-outline"
          size={30}
          onPress={() => {
            navigation.navigate("Nofiti");
          }}
        >
          Thông báo
        </ButtonMenu>
        <ButtonMenu
          icon="heart-outline"
          size={30}
          onPress={() => {
            navigation.navigate("favourites");
          }}
        >
          Yêu thích
        </ButtonMenu>
        <ButtonMenu icon="alert-circle-outline" size={30}>
          Trợ giúp & Phản hồi
        </ButtonMenu>

        <ButtonMenu
          icon="log-out-outline"
          size={30}
          out={{ color: "red" }}
          onPress={auth.logout}
        >
          Đăng xuất
        </ButtonMenu>
      </View>
    </ScrollView>
  );
}
export default MenuScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginTop: 20,
  },
});
