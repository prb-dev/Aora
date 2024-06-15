import { Text, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Page() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="font-pblack text-3xl">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="home" className="text-blue-500">
        Go to Home
      </Link>
    </View>
  );
}
