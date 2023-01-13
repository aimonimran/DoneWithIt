import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import authApi from '../api/auth';
import usersApi from '../api/users';
import useAuth from './../auth/useAuth';
import { useApi } from './../hooks/useApi';
import Screen from './../components/Screen';
import ActivityIndicator from './../components/ActivityIndicator';
import { ErrorMessage, AppForm, AppFormField, SubmitButton } from '../components/forms';

const initialValues = { name: '', email: '', password: '' };

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label('Name'),
	email: Yup.string().required().label('Email').email(),
	password: Yup.string().min(5).required().label('Password')
});

const RegisterScreen = () => {
	const registerApi = useApi(usersApi.register);
	const loginApi = useApi(authApi.login);
	const { logIn } = useAuth();
	const [error, setError] = useState();

	const onSubmit = async (userInfo) => {
		const result = await registerApi.request(userInfo);

		if (!result.ok) {
			if (result.data) setError(result.data.error);
			else {
				setError('An unexpected error occurred.');
				console.log(result);
			}
			return;
		}

		const { data: authToken } = await loginApi.request(userInfo.email, userInfo.password);
		logIn(authToken);
	};

	return (
		<>
			<Screen style={styles.container}>
				<AppForm
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					<ErrorMessage error={error} visible={error} />
					<AppFormField
						autoCapitalize='none'
						autoCorrect={false}
						icon='email'
						keyboardType='default'
						name='name'
						placeholder='Name'
						textContentType='name'
					/>
					<AppFormField
						autoCapitalize='none'
						autoCorrect={false}
						icon='email'
						keyboardType='email-address'
						name='email'
						placeholder='Email'
						textContentType='emailAddress'
					/>
					<AppFormField
						autoCapitalize='none'
						autoCorrect={false}
						icon='lock'
						name='password'
						placeholder='Password'
						secureTextEntry
						textContentType='password'
					/>
					<SubmitButton title='Register' />
				</AppForm>
			</Screen>
			<ActivityIndicator visible={registerApi.loading || loginApi.loading} />
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10
	}
});

export default RegisterScreen;
