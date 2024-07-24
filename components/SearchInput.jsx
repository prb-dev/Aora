import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";

const SearchInput = ({
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
    <View className="h-16 px-4 bg-black-100 border-2 border-black-200 rounded-xl focus:border-secondary items-center flex-row">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular w-full"
        style={{ outlineStyle: "none" }}
        value={value}
        inputMode={keyboardType}
        placeholder={placeholder}
        placeholderTextColor="#7B7B8B"
        onChangeText={handleChangeText}
        secureTextEntry={title == "Password" && !showPassword}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain"/>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
