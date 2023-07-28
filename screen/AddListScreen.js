import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import IconsButton from "../components/Ui/Button/IconsButton";
import { Colors } from "../constants/Styles";
import DevicesForm from "../components/Devices/DevicesForm";
import {
  deleteCategory,
  storeCategory,
  updateCategory,
} from "../util/Categories";
import LoadingOverLay from "../components/Ui/Handle/LoadingOverLay";
import ErrorOverLay from "../components/Ui/Handle/ErrorOverLay";
import { DeviceContext } from "../store/context/Devices-Context";
import { storeDevice } from "../util/Devices";
import { ScrollView } from "react-native";
function AddListScreen({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const devicesCtx = useContext(DeviceContext);
  const editedDevicesId = route.params?.deviceId;
  const isEditing = !!editedDevicesId;
  console.log(isEditing, "isEditing");
  const selectedDevice = devicesCtx.devices.find(
    (device) => device.id === editedDevicesId
  );
  console.log(selectedDevice, "editedDevicesId");
  async function deleteCategoriesHandler() {
    setIsSubmitting(true);
    try {
      await deleteCategory(editedDevicesId);
      devicesCtx.deleteCategory(editedDevicesId);
      navigation.goBack();
    } catch {
      setError("Could not delete device - please try again later!");
      setIsSubmitting(false);
    }
  }
  function cancelHandler() {
    navigation.goBack();
  }
  async function confirmHandler(deviceData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        devicesCtx.updateDevice(editedDevicesId, deviceData);
        await updateDevice(editedDevicesId, deviceData);
      } else {
        const id = await storeDevice(deviceData);
        devicesCtx.addDevice({ ...deviceData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      console.log("error", error);
      setError("Could not save data - Please try again later!");
      setIsSubmitting(false);
    }
  }

  if (error && !isSubmitting) {
    return <ErrorOverLay message={error} />;
  }
  if (isSubmitting) {
    return <LoadingOverLay />;
  }
  return (
    <ScrollView style={styles.container}>
      <DevicesForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        title={isEditing ? "Chỉnh sửa thiết bị" : "Thêm thiết bị"}
        onCancel={cancelHandler}
        onSubmits={confirmHandler}
        defaultValues={selectedDevice}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconsButton
            icon="trash"
            size={36}
            color={Colors.error500}
            onPress={deleteCategoriesHandler}
          />
        </View>
      )}
    </ScrollView>
  );
}
export default AddListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.primary900,
    alignItems: "center",
  },
});
