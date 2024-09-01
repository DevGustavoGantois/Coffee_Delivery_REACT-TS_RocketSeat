import styled from "styled-components";

export const ContainerCopyright = styled.div`

text-align: center;
margin-bottom: 2rem;
margin-top: 5rem;

> a {
    color: ${({ theme}) => theme.colors["brand-purple"]};
}

`;