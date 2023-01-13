import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

import routes from '../navigation/routes';
import useAuth from '../auth/useAuth';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/lists/ListItemSeparator';

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary
		}
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary
		},
		targetScreen: routes.MESSAGES
	}
];

function AccountScreen({ navigation }) {
	const { user, logOut } = useAuth();

	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem title={user.name} subTitle={user.email} image={require('../assets/guy.jpeg')} />
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
							}
							onPress={() => navigation.navigate(item.targetScreen)}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<View>
				<ListItem
					title='Logout'
					IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
					onPress={() => logOut()}
				/>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light
	},
	container: {
		marginVertical: 20
	}
});

export default AccountScreen;
