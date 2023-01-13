import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

import expoPushTokensApi from '../api/expoPushToken';

export default useNotifications = (notificationListener) => {
	useEffect(() => {
		registerForPushNotifications();

		if (notificationListener) Notifications.addNotificationReceivedListener(notificationListener);
	}, []);

	const registerForPushNotifications = async () => {
		try {
			const permission = await Notifications.requestPermissionsAsync();
			if (!permission.granted) return;

			const pushToken = (await Notifications.getExpoPushTokenAsync()).data;
			expoPushTokensApi.register(pushToken);
		} catch (error) {
			console.log('Error getting a push token...', error);
		}
	};
};
