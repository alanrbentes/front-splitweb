import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';

import BackGround from '../../Components/Background';
import { signInRequest } from '../../store/modules/auth/actions';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const dispath = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  function handleSubmit() {
    console.tron.log('CHECK DO MÉTODO')
    dispath(signInRequest(email, password));
  }

  return (
    <BackGround>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            placeholder="Email Address"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Password"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit}>Log in</SubmitButton>
          <SignLink onPress={() => navigation.navigate('SignUp')}>
            <SignLinkText>Criar conta</SignLinkText>
          </SignLink>
        </Form>
      </Container>
    </BackGround>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
