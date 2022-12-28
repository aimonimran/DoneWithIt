import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

const OfflineNotice = () => {
	const netInfo = useNetInfo();

	if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
		return (
			<View style={styles.container}>
				<AppText style={styles.text}>No Internet Connection</AppText>
			</View>
		);

	return null;
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.primary,
		zIndex: 1,
		justifyContent: 'center',
		position: 'absolute',
		width: '100%',
		padding: 10,
		top: Constants.statusBarHeight
	},
	text: {
		color: colors.white
	}
});

export default OfflineNotice;
