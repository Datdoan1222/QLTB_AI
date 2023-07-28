// import { useContext, useEffect, useState } from "react";
// import { StyleSheet, View } from "react-native";

// import DevicesOutput from "../components/Devices/DevicesOutput/DevicesOutput";
// import { DeviceContext } from "../store/context/Devices-context";
// import { fetchDevices } from "../util/Categori";
// import ErrorOverLay from "../components/Ui/Handle/ErrorOverLay";
// import LoadingOverlay from "../components/Ui/Handle/LoadingOverLay";
// function MyListScreen({ navigation }) {
//   const [isFetching, setIsFetching] = useState(true);
//   const [error, setError] = useState();
//   const deviceCtx = useContext(DeviceContext);
//   useEffect(() => {
//     async function getDevices() {
//       setIsFetching(true);
//       try {
//         const devices = await fetchDevices();
//         deviceCtx.setDevice(devices);
//       } catch (error) {
//         setError("Could not fetch device!");
//       }
//       setIsFetching(false);
//     }
//     getDevices();
//   }, []);

//   if (error && !isFetching) {
//     return <ErrorOverLay message={error} />;
//   }
//   if (isFetching) {
//     return <LoadingOverlay />;
//   }

//   return (
//     <View style={styles.container}>
//       <DevicesOutput
//         devices={deviceCtx.devices}
//         devicesPeriod="Total number"
//         fallbackText="Hi! Try adding some todos!"
//       />
//     </View>
//   );
// }

// export default MyListScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
