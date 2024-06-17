import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="h-16 px-4 bg-black-100 border-2 border-black-200 rounded-xl focus:border-secondary items-center">
        <TextInput
          className="flex-1 w-full text-white font-psemibold text-base"
          style={{ outlineStyle: "none" }}
          value={value}
          inputMode={keyboardType}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title == "Password" && !showPassword}
        />
      </View>
    </View>
  );
};

export default FormField;
