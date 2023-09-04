import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { useFonts } from '@expo-google-fonts/kanit';
import { FRONT } from './src/shared/constants/front';
import 'react-native-gesture-handler'

export default function App() {
  let [fontsLoaded] = useFonts(FRONT);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

