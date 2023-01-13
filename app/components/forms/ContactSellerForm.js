import React from 'react';
import { Alert, Keyboard } from 'react-native';
import * as Yup from 'yup';
import * as Notifications from 'expo-notifications';

import messagesApi from '../../api/messages';
import { AppForm, AppFormField, SubmitButton } from '../forms';

const validationSchema = Yup.object().shape({
	message: Yup.string().required().min(1).max(255).label('Message')
});

function ContactSellerForm({ listing }) {
	const handleSubmit = async ({ message }, { resetForm }) => {
		Keyboard.dismiss();

		const { ok } = await messagesApi.send(message, listing.id);

		if (!ok) {
			console.log('Error...', error);
			return Alert.alert('Error', 'Could not send message to seller.');
		}

		resetForm();

		Notifications.scheduleNotificationAsync({
			content: {
				title: 'Sent!',
				body: 'Your message was successfully sent to the seller.'
			},
			trigger: null
		});
	};

	return (
		<AppForm
			initialValues={{ message: '' }}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<AppFormField
				multiline
				maxLength={255}
				name='message'
				numberOfLines={3}
				placeholder='Message'
			/>
			<SubmitButton title='Send' />
		</AppForm>
	);
}

export default ContactSellerForm;
