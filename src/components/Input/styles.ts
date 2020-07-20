import styled, { css } from 'styled-components';
import { shade } from 'polished';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isErrored: boolean;
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: ${shade(0.6,'#FF9000')};

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${props => props.isErrored && css`
        border-color: #c53030;
    `}

    ${props => props.isFocused && css`
        color: #FF9000;
        border-color: #FF9000;
    `}

    ${props => props.isFilled && css`
        color: #FF9000;
    `}

    input {
        background: transparent;
        flex: 1;
        border: 0;
        color: #F4EDE8;

        &:placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;
    }
`;

export const ErrorMessage = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #FFF;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;