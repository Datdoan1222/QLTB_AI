import { View, StyleSheet, Text } from "react-native";
import DevicesSummary from "./DevicesSummary";
import DevicesList from "./DevicesList";
import { Colors } from "../../../constants/Styles";

function DevicesOutput({ devices, devicesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;
  if (devices.length > 0) {
    content = <DevicesList devices={devices} />;
  }

  return <View style={styles.container}>{content}</View>;
}
export default DevicesOutput;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoText: {
    color: Colors.primary900,
    paddingTop: 160,
    fontSize: 50,
    textAlign: "center",
    marginTop: 32,
  },
});
