import styled, { css } from 'styled-components';

export const Container = styled.div`
  img {
    margin-left: 1rem;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
    box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.colors.gold};
  }
`