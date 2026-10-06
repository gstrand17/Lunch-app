import {
	GrandHotel_400Regular,
	useFonts,
} from '@expo-google-fonts/grand-hotel';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [fontsLoaded] = useFonts({ GrandHotel_400Regular });

	if (!fontsLoaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Stack screenOptions={{ headerShown: false }} />
		</ThemeProvider>
	);
}
