import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images.js";
import FormField from "../../components/FormField.jsx";
import CustomButton from "../../components/CustomButton.jsx";
import { Link, router } from "expo-router";
import { getCurrentUser, signIn } from "../../lib/appwrite.js";
import { useGlobalContext } from "../../context/GlobalProvider.js";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { setUser, setIsLogged } = useGlobalContext();

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
      return;
    }
    setLoading(true);
    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Success", "User signed in successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center px-4 py-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-white text-2xl font-psemibold mt-10">
            Sign in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm((prev) => ({ ...prev, email: e }))}
            otherStyles="mt-7"
            keyboardType="email"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) =>
              setForm((prev) => ({ ...prev, password: e }))
            }
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            containerStyles="mt-10"
            handlePress={submit}
            isLoading={loading}
          />

          <View className="justify-center flex-row gap-2 pt-5">
            <Text className="text-lg text-gray-100 font-pregular">
              Dont't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg text-secondary font-psemibold"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
