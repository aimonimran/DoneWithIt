import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

const ActivityIndicator = ({ visible = false }) => {
	if (!visible) return null;

	return (
		<View style={styles.container}>
			<LottieView
				style={styles.animation}
				autoPlay
				loop
				source={require('../assets/animations/loader.json')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	animation: {
		width: 150
	}
});

export default ActivityIndicator;
