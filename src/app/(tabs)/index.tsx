import { Text } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
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
    </SafeAreaView>
  );
}
