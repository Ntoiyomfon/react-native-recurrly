import { Text, View } from "react-native";
import { Link } from "expo-router";

 
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Native wind!
      </Text>
      <Link href="/onboarding" className="bg-primary text-white mt-4 rounded p-4">Get Started</Link>
      <Link href="/(auth)/sign-in" className="bg-primary text-white mt-4 rounded p-4">Sign In</Link>
      <Link href="/(auth)/sign-up" className="bg-primary text-white mt-4 rounded p-4">Create Account</Link>

      <Link href="/subscriptions/spotify" >Spotify Subscription</Link>
        <Link href={{
            pathname: "/subscriptions/[id]",
            params: { id: "claude"},
        }}>
            Claude Max Subscription
        </Link>
    </View>
  );
}
