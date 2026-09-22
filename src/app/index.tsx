import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
	return (
		<ThemedView style={styles.container}>
			<Image
				accessibilityLabel="Picnic table"
				contentFit="contain"
				source={require('@/assets/images/picnic-table.png')}
				style={styles.logo}
			/>
			<ThemedText type="title" style={styles.brandTitle}>
				LettuceMeet
			</ThemedText>
			<ThemedText style={styles.subtitle}>
				Don't romaine lonely,{ '\n' }Find your lunch buddies!
			</ThemedText>
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
	logo: {
		width: 200,
		height: 200,
        margin: 5,
	},
	brandTitle: {
		fontFamily: 'GrandHotel_400Regular',
		fontWeight: '400',
        fontSize: 60,
        paddingTop: 15,
	},
    subtitle: {
        fontSize: 20,
        fontWeight: '200',
        textAlign: 'center',
    },
	button: {
		marginTop: 16,
		padding: 12,
		borderRadius: 8,
		backgroundColor: '#208AEF',
		color: '#FFFFFF',
	},
});
