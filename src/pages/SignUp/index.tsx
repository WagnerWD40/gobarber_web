import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import {
    Container,
    Content,
    Background,
} from './styles';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {

    function handleSubmit(data: object): void {
        console.log(data);
    }

    return  (
        <Container>
            <Background />
            <Content>
                <img src={logo} alt="GoBarber"/>
                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>
                    <Input name="name" type="text" placeholder="Nome" icon={FiUser} />
                    <Input name="email" placeholder="Email" icon={FiUser} />
                    <Input name="password" placeholder="Senha" icon={FiLock} />

                    <Button type="submit">Cadastrar</Button>

                </Form>
                <a href="#">
                    <FiArrowLeft />
                    Voltar para logon
                </a>
            </Content>
        </Container>
    );
}

export default SignUp;