import { useContext, useEffect, useLayoutEffect, useState } from "react";

import DevicesList from "../../../components/Menu/DevicesList";
import ErrorOverLay from "../../../components/Ui/Handle/ErrorOverLay";
import LoadingOverlay from "../../../components/Ui/Handle/LoadingOverLay";
import IconsButton from "../../../components/Ui/Button/IconsButton";
import { DeviceContext } from "../../../store/context/Devices-Context";
import { fetchDevices } from "../../../util/Devices";

function DeviceOverviewScreen({ route, navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconsButton
          icon="add-circle-outline"
          size={36}
          color="black"
          onPress={() => {
            navigation.navigate("AddListScreen");
          }}
        />
      ),
    });
  }, []);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const deviceCtx = useContext(DeviceContext);
  useEffect(() => {
    async function getDevices() {
      setIsFetching(true);
      try {
        const devices = await fetchDevices(route.params.idCategories);
        deviceCtx.setDevice(devices);
      } catch (error) {
        setError("Could not fetch device!");
      }
      setIsFetching(false);
    }
    getDevices();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverLay message={error} />;
  }
  if (isFetching) {
    return <LoadingOverlay />;
  }

  return <DevicesList item={deviceCtx.devices} />;
}
export default DeviceOverviewScreen;
