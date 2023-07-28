import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useForm } from "react-hook-form";
import Button from "../Ui/Button/Button";
import { InputDevice, PickerDevice } from "../Devices/InputDevice";
import { getFormattedDate } from "../../util/Date";
import { Colors } from "../../constants/Styles";

function DevicesForm({
  submitButtonLabel,
  onCancel,
  onSubmits,
  defaultValues,
  title,
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });
  const onSubmit = (data) => {
    console.log(data);
    onSubmits(data);
  };
  console.log(errors);
  function textError() {
    return (
      <Text style={styles.errorText}>
        Invalid input values - please check your entered data!
      </Text>
    );
  }
  return (
    <View style={styles.from}>
      <Text style={styles.title}>{title}</Text>
      <InputDevice
        label="Tên thiết bị"
        control={control}
        errors={errors}
        placeholder="Tên thiết bị"
      />
      <View style={styles.inputsRow}>
        <View style={styles.rowInput}>
          <InputDevice
            label="Mã thiết bị"
            control={control}
            errors={errors}
            placeholder="Mã thiết bị"
          />
        </View>
        <View style={styles.rowInput}>
          <InputDevice
            label="Số lượng"
            control={control}
            errors={errors}
            placeholder="Số lượng"
            textInputConfig={{
              keyboardType: "numeric",
            }}
          />
        </View>
      </View>
      <InputDevice
        label="Mô tả"
        control={control}
        errors={errors}
        placeholder="Mô tả"
        textInputConfig={{
          multiline: true,
        }}
      />
      <InputDevice
        label="M thiết bị"
        control={control}
        errors={errors}
        placeholder="M thiết bị"
      />
      <InputDevice
        label="Mã hiết bị"
        control={control}
        errors={errors}
        placeholder="Mã thiết bị"
      />
      <InputDevice
        label="Mã tiết bị"
        control={control}
        errors={errors}
        placeholder="Mã thiết bị"
      />
      <InputDevice
        label="Mã thết bị"
        control={control}
        errors={errors}
        placeholder="Mã thiết bị"
      />
      {(errors["Tên thiết bị"] && textError()) ||
        (errors["Mã thiết bị"] && textError()) ||
        (errors["Số lượng"] && textError()) ||
        (errors["Mô tả"] && textError())}

      <View style={styles.buttons}>
        <Button style={styles.button} onPress={handleSubmit(onSubmit)}>
          {submitButtonLabel}
        </Button>
        <Button noStyle style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
      </View>
    </View>
  );
}
export default DevicesForm;
const styles = StyleSheet.create({
  from: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary900,
    marginVertical: 24,
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowInput: {
    width: 200,
    padding: 10,
  },
  errorText: {
    textAlign: "center",
    color: Colors.error500,
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    paddingHorizontal: 8,
  },
});
