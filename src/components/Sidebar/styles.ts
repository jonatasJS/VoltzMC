import styled, { css } from 'styled-components';

interface LightSwitchProps {
  activeTheme: string;
}

export const LinkToHome = styled.a`
  cursor: pointer;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 7rem;
  background: ${({ theme }) => theme.gradient};

  @media (max-width: 1160px) {
    right: 0;
    width: 100%;
    height: 7rem;
    flex-direction: row;
    background: ${({ theme }) => theme.colors.background};
  }

  div a img {
    height: 84;
    width: 84;
    cursor: 'pointer';

    @media (max-width: 960px) {
      
    }

    @media (max-width: 768px) {
      
    }
  }

  > nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1160px) {
      flex-direction: row;
    }

    .home {
      color: ${({ theme }) => theme.colors.gold};

      &:hover {
        text-shadow: ${({ theme }) => theme.colors.gold};
      }
    }

    .shop {
      color: ${({ theme }) => theme.colors.gold};

      &:hover {
        text-shadow: ${({ theme }) => theme.colors.gold};
      }
    }

    .cart {
      color: ${({ theme }) => theme.colors.gold};

      &:hover {
        text-shadow: ${({ theme }) => theme.colors.gold};
      }
    }

    .team {
      color: ${({ theme }) => theme.colors.gold};

      &:hover {
        text-shadow: ${({ theme }) => theme.colors.gold};
      }
    }

    .help {
      color: ${({ theme }) => theme.colors.gold};

      &:hover {
        text-shadow: ${({ theme }) => theme.colors.gold};
      }
    }

    svg {
      ${({ theme }) => css`
        margin: 1rem 2rem;
        color: ${theme.colors.text};
        transition: color 0.2s;

        &:hover {
          color: ${theme.colors.gold};
        }
      `}
    }

    > svg {
      color: ${({ theme }) => theme.colors.text};

      &:hover {
        color: ${({ theme }) => theme.colors.gold};
      }
    }

    .discord {
      color: ${({ theme }) => theme.colors.text};

      &:hover {
      color: ${({ theme }) => theme.colors.discord}
    }
    }
  }
`;

export const LightSwitch = styled.div<LightSwitchProps>`
  padding-top: 100%;

  svg {
    cursor: pointer;
  }

  ${({ activeTheme }) =>
    activeTheme === 'dark' &&
    css`
      svg:hover {
        color: #ffff00 !important;
      }
    `}
`;
