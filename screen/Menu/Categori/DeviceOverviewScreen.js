import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DevicesList from "../../../components/Menu/DevicesList";
import ErrorOverLay from "../../../components/Ui/Handle/ErrorOverLay";
import LoadingOverlay from "../../../components/Ui/Handle/LoadingOverLay";
import IconsButton from "../../../components/Ui/Button/IconsButton";
import { fetchDevices } from "../../../store/redux/Devices/devicesAction";

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
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.devices);
  useEffect(() => {
    function getDevices() {
      dispatch(fetchDevices());
    }
    getDevices();
  }, [dispatch]);

  if (error) {
    return <ErrorOverLay message={error} />;
  }

  if (loading) {
    return <LoadingOverlay />;
  }

  return <DevicesList item={data} />;
}
export default DeviceOverviewScreen;
