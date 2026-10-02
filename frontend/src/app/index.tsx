import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
	return (
		<ThemedView style={styles.container}>
			<ThemedText type="title">Welcome to Lunch</ThemedText>
			<ThemedText>Find your next meal.</ThemedText>
			<Link href="/tabs" style={styles.button}>
				Open app
			</Link>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
	},
	button: {
		marginTop: 16,
		padding: 12,
		borderRadius: 8,
		backgroundColor: '#208AEF',
		color: '#FFFFFF',
	},
});
