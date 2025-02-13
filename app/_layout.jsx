import '../global.css'
import { Stack } from 'expo-router'



export default function App() {


  return (
      <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }}  />
          <Stack.Screen name='(AuthScreens)' options={{ headerShown: false }} />
          <Stack.Screen name='(MainAppScreens)' options={{ headerShown: false }} />
      </Stack>
  );

}


