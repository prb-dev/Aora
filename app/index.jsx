import { Image, ScrollView, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images.js";
import CustomButton from "../components/CustomButton.jsx";
import { useGlobalContext } from "../context/GlobalProvider.js";

export default function Index() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) {
    return <Redirect href={"/home"}></Redirect>;
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with
            </Text>
            <View className="flex w-fit items-center">
              <Text className="text-5xl font-bold text-center text-secondary-200">
                Aora
              </Text>
              <Image
                source={images.path}
                className="w-[136px] h-[15px]"
                resizeMode="contain"
              />
            </View>

            <Text className="text-sm font-pregular text-gray-100 mt-7 mb-5 text-center">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </Text>

            <CustomButton
              title={"Continue with Email"}
              handlePress={() => router.push("/sign-in")}
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
