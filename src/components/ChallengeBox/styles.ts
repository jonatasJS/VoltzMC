import styled, { css } from 'styled-components';

interface ChallengeButtonProps {
  result: 'failed' | 'succeeded';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 2rem;
  height: 100%;
  margin-left: -1rem;
  margin-right: -1rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: -100%;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }

  img {
    margin-top: -1.5rem;
    margin-bottom: 1rem;
  }

  button {
    width: max-content;
    margin: 2rem 0 1rem 0;
    padding: 15px 35px;
    color: ${({ theme }) => theme.colors.gold};
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 1.3px;
    text-transform: capitalize;
    background: ${({ theme }) => theme.colors.backgroundLight};
    border: 1px solid ${({ theme }) => theme.colors.gold};
    border-radius: 25px;
    display: block;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.colors.gold};
      color: ${({ theme }) => theme.colors.backgroundLight};
      text-shadow: 0 0 1px ${({ theme }) => theme.colors.backgroundLight};
      border: 1px solid ${({ theme }) => theme.colors.backgroundHover};
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.gold};
    }
  }

  button.description {
    margin-top: 0rem;
  }
`;

export const ChallengeActive = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    padding: 0 2rem 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gold};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLine};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
  }

  strong {
    padding: 1.5rem 0 1rem;
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    line-height: 1.5;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const ChallengeButton = styled.button<ChallengeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  ${(props) =>
    props.result === 'succeeded' &&
    css`
      background: ${({ theme }) => theme.colors.green};
    `}

  ${(props) =>
    props.result === 'failed' &&
    css`
      background: ${({ theme }) => theme.colors.red};
    `}
`;
