import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { Colors } from "../../constants/Styles";

export function InputDevice({
  label = "",
  invalid = false,
  textInputConfig,
  control,
  errors,
}) {
  const inputStyles = [];

  if (errors[label]) {
    inputStyles.push(styles.inputInvalid);
  }
  return (
    <View style={[styles.inputContainer, inputStyles]}>
      <Text style={[styles.label, errors[label] && styles.invalidLabel]}>
        {label}
      </Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputs}
            {...textInputConfig}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            invalid={!!errors[label]}
          />
        )}
        name={label}
        rules={{ required: true, maxLength: 80 }}
      />
    </View>
  );
}
export function PickerDevice({ labell, invalid, style, PickerConfig }) {
  const inputStyles = [styles.inputs];
  if (PickerConfig && PickerConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {labell}
      </Text>
      <Picker style={inputStyles} {...PickerConfig}>
        <Picker.Item label="Đã mượn" value="Đã mượn" />
        <Picker.Item label="Chưa mượn" value="Chưa mượn" />
        <Picker.Item label="Đã hỏng" value="Đã hỏng" />
      </Picker>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    elevation: 5,
  },
  invalidLabel: {
    color: Colors.error500,
  },
  label: {
    paddingTop: 10,
    marginBottom: 5,
    paddingLeft: 5,
    color: Colors.primary900,
  },
  inputs: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  inputInvalid: {
    borderWidth: 2,
    borderColor: Colors.error500,
  },
});
