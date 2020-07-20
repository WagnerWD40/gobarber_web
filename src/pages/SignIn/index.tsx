import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import {
    Container,
    Content,
    Background,
} from './styles';

import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback( async(data: object) => {
        formRef.current?.setErrors({});

        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                            .required('Email obrigatório')
                            .email('Digite um email válido'),
                password: Yup.string()
                            .required('Senha obrigatória'),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

        } catch (err) {

            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);

        }
    }, []);
    return  (
        <Container>
            <Content>
                <img src={logo} alt="GoBarber"/>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>
                    <Input name="email" type="text" placeholder="Email" icon={FiMail} />
                    <Input name="password" type="password" placeholder="Senha" icon={FiLock} />

                    <Button type="submit">Entrar</Button>

                    <a href="#">Esqueci minha senha</a>

                </Form>
                <a href="#">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Background />
        </Container>
    );
}

export default SignIn;