import React from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, View, Platform } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';
import ContactSellerForm from '../components/forms/ContactSellerForm';

function ListingDetailsScreen({ route }) {
	const listing = route.params;

	return (
		<KeyboardAvoidingView
			behavior='position'
			keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
		>
			<Image style={styles.image} source={listing.image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.text}>{listing.title}</AppText>
				<AppText style={styles.price}>${listing.price}</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require('../assets/guy.jpeg')}
						title='Steve John'
						subTitle='5 Listings'
					/>
				</View>
				<ContactSellerForm listing={listing} />
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300
	},
	detailsContainer: {
		padding: 20
	},
	text: {
		marginBottom: 7
	},
	price: {
		color: colors.secondary,
		fontWeight: 'bold'
	},
	userContainer: {
		marginVertical: 40
	}
});

export default ListingDetailsScreen;
