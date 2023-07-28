import { useEffect, useState, useContext } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import ErrorOverLay from "../../components/Ui/Handle/ErrorOverLay";
import LoadingOverlay from "../../components/Ui/Handle/LoadingOverLay";
import { Slogan, Title } from "../../components/Ui/Display/Title";
import { DeviceContext } from "../../store/context/Devices-Context";
import { fetchDevices } from "../../util/Devices";
function NotificationScreen() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const deviceCtx = useContext(DeviceContext);
  useEffect(() => {
    async function getDevices() {
      setIsFetching(true);
      try {
        const devices = await fetchDevices();
        deviceCtx.setDevice(devices);
      } catch (error) {
        setError(eerror);
      }
      setIsFetching(false);
    }
    getDevices();
  }, []);
  function eerror() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require("../../constants/img/Notifi.png")}
          />
        </View>
        <View style={styles.content}>
          <Slogan
            titleLabel="No Notifications"
            contentLabel="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor"
          />
        </View>
      </View>
    );
  }
  if (error && !isFetching) {
    return <ErrorOverLay message={error} />;
  }
  if (isFetching) {
    return <LoadingOverlay />;
  }
  return (
    <View>
      <Text>hahaha</Text>
    </View>
  );
}
export default NotificationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  content: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
});
