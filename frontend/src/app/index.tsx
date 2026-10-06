import { ThemedText } from '@/components/themed-text';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeScreen() {
	const { width, height } = useWindowDimensions();
	const insets = useSafeAreaInsets();
	const logoSize = Math.min(200, height * 0.28);

	return (
			<ScrollView
				style={styles.pager}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				bounces={false}>
				{/* Screen 1 */}
				<View style={[styles.screen, { width, backgroundColor: '#4f46e5' }]}>
					{/* Title Section */}
					<View style={styles.hero}>
						<Image
							accessibilityLabel="Picnic table"
							contentFit="contain"
							source={require('@/assets/images/picnic-table.png')}
							style={{ width: logoSize, height: logoSize }}
						/>
						<ThemedText type="title" style={styles.brandTitle}>
							LettuceMeet
						</ThemedText>
						<ThemedText style={styles.subtitle}>
							Don't romaine lonely,{ '\n' }Find your lunch buddies!
						</ThemedText>
					</View>
					{/* Actions Section */}
					<View style={[styles.actions, { paddingBottom: insets.bottom + 40 }]}> 
						<ThemedText style={styles.swipePrompt}>
							Swipe to get started! &gt;&gt;&gt;
						</ThemedText>
						<Link href="/tabs" style={styles.button}>
							Log In
						</Link>
					</View>
				</View>
				{/* Screen 2 */}
				<View style={[styles.screen, { width, backgroundColor: '#0891b2' }]}>
					<Text style={styles.text}>This is Screen 2</Text>
				</View>
				{/* Screen 3 */}
				<View style={[styles.screen, { width, backgroundColor: '#0891b2' }]}>
					<Text style={styles.text}>This is Screen 3</Text>
				</View>
				{/* Screen 4 */}
				<View style={[styles.screen, { width, backgroundColor: '#0891b2' }]}>
					<Text style={styles.text}>This is Screen 4</Text>
				</View>
				{/* Screen 5 */}
				<View style={[styles.screen, { width, backgroundColor: '#16a34a' }]}>
					<Text style={styles.text}>Ready to Go! Screen 5</Text>
					<Link href="/tabs" style={styles.button}>
						Sign Up!
					</Link>
				</View>
			</ScrollView>
	);
}

const styles = StyleSheet.create({
	pager: {
		flex: 1,
	},
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	hero: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
	},
	actions: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		alignItems: 'center',
		gap: 30,
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#FFFFFF',
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
	swipePrompt: {
		fontSize: 20,
		fontWeight: '200',
		textAlign: 'center',
	},
	button: {
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 24,
		paddingRight: 24,
		borderRadius: 8,
		backgroundColor: '#4ac04a',
		color: '#000000',
	},
});
