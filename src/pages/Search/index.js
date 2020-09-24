import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Container, Title, LogoutButton } from './styles';
import { signOut } from '~/store/modules/auth/actions';

function Searsh() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <>
      <LogoutButton onPress={ handleLogout }>Sair</LogoutButton>
      <Title>
        Lista de clientes
      </Title>
      </>
    </Container>

  );
}

  


export default Searsh;
