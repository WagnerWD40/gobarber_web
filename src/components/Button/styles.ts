import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background: #FF9000;
    height: 56px;
    border: 0;
    border-radius: 10px;
    padding: 0 16px;
    width: 100%;
    color: #312e38;
    font-weight: 500;
    margin-top: 16px;
    transition: background .2s;

    &:hover {
        background: ${shade(0.2, '#FF9000')};
    }

`;