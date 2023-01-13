import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';

import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootNavigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const [user, setUser] = useState();

	const restoreUser = async () => {
		const user = await authStorage.getUser();
		if (user) setUser(user);
	};

	useEffect(() => {
		async function prepare() {
			try {
				restoreUser();
				await new Promise((resolve) => setTimeout(resolve, 2000));
			} catch (e) {
				console.warn(e);
			} finally {
				setIsReady(true);
			}
		}
		prepare();
	}, []);

	if (isReady) {
		SplashScreen.hideAsync();

		return (
			<AuthContext.Provider value={{ user, setUser }}>
				<OfflineNotice />
				<NavigationContainer ref={navigationRef} theme={navigationTheme}>
					{user ? <AppNavigator /> : <AuthNavigator />}
				</NavigationContainer>
			</AuthContext.Provider>
		);
	}
}
