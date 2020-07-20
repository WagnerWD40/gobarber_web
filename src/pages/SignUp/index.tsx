import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import {
    Container,
    Content,
    Background,
} from './styles';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback( async(data: object) => {
        formRef.current?.setErrors({});

        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string()
                            .required('Email obrigatório')
                            .email('Digite um email válido'),
                password: Yup.string()
                            .min(6, 'No mínimo 6 dígitos'),
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
            <Background />
            <Content>
                <img src={logo} alt="GoBarber"/>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>
                    <Input name="name" type="text" placeholder="Nome" icon={FiUser} />
                    <Input name="email" type="email" placeholder="Email" icon={FiMail} />
                    <Input name="password" type="password" placeholder="Senha" icon={FiLock} />

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