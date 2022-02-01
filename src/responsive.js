import { css } from 'styled-components';

export const mobile = (props) => css`
        @media only screen and (max-width: 530px) {
        ${props};
        }
    `;

export const tablet = (props) => css`
    @media only screen and (max-width: 767px) {
        ${props};
        }
`;

export const desktop = (props) => css`
        @media only screen and (min-width: 768px) {
        ${props};
        }
    `;
