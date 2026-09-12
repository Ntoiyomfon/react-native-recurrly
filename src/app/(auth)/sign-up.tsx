import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import SignIn from './sign-in'

const SignUp = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Link href="/(auth)/sign-in">Sign In</Link>
    </View>
  )
}

export default SignUp