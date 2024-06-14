import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-500 text-5xl">Video platform</Text>
      <Text className="text-yellow-500">This is the first page of your app.</Text>
    </View>
  );
}
