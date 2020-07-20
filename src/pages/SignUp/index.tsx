import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import {
    Container,
    Content,
    Background,
} from './styles';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
    return  (
        <Container>
            <Background />
            <Content>
                <img src={logo} alt="GoBarber"/>
                <form>
                    <h1>Faça seu cadastro</h1>
                    <Input name="email" type="text" placeholder="Email" icon={FiUser} />
                    <Input name="password" type="password" placeholder="Senha" icon={FiLock} />

                    <Button type="submit">Cadastrar</Button>

                </form>
                <a href="#">
                    <FiArrowLeft />
                    Voltar para logon
                </a>
            </Content>
        </Container>
    );
}

export default SignUp;