import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import authApi from '../api/auth';
import useAuth from './../auth/useAuth';
import Screen from './../components/Screen';
import { ErrorMessage, AppForm, AppFormField, SubmitButton } from '../components/forms';

const initialValues = { email: '', password: '' };

const validationSchema = Yup.object().shape({
	email: Yup.string().required().label('Email').email(),
	password: Yup.string().min(5).required().label('Password')
});

const LoginScreen = () => {
	const { logIn } = useAuth();
	const [loginFailed, setLoginFailed] = useState(false);

	const onSubmit = async ({ email, password }) => {
		const result = await authApi.login(email, password);
		if (!result.ok) return setLoginFailed(true);
		setLoginFailed(false);
		logIn(result.data);
		console.log(result.data);
	};

	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require('../assets/logo.png')} />
			<AppForm
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				<ErrorMessage error='Invalid email and/or password.' visible={loginFailed} />
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
				<SubmitButton title='Login' />
			</AppForm>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10
	},

	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20
	}
});

export default LoginScreen;
