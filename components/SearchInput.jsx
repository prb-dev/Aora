import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "../constants/icons";
import { router, usePathname } from "expo-router";

const SearchInput = ({ placeholder, initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="h-16 px-4 bg-black-100 border-2 border-black-200 rounded-xl focus:border-secondary items-center flex-row">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular w-full"
        style={{ outlineStyle: "none" }}
        value={query}
        inputMode="search"
        placeholder={placeholder}
        placeholderTextColor="#CDCDE0"
        onChangeText={(text) => {
          setQuery(text);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query.trim()) {
            return;
          }

          if (pathname.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`search/${query}`);
          }
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
