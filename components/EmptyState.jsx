import { View, Text, Image } from "react-native";
import React from "react";
import images from "../constants/images";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subTitle }) => {
  return (
    <View className="flex justify-start items-center px-4">
      <Image
        className="w-[270px] h-[215px]"
        source={images.empty}
        resizeMode="contain"
      />
      <Text className="font-psemibold text-2xl text-white">{subTitle}</Text>
      <Text className="font-pmedium text-sm text-gray-100">{title}</Text>

      <CustomButton
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
