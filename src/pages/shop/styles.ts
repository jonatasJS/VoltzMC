import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  height: 100vh;
  max-width: 992px;

  header {
    @media (max-width: 1160px) {
      display: none;
    }
  }

  @media (max-width: 1160px) {
    margin-top: 7rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  section.default {
    flex: 1;
    display: block;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-content: center;
    margin-top: 0.5rem;
    overflow: auto;
    margin-bottom: 0.5rem;

    @media (max-width: 960px) {
      padding-top: 15rem;
      gap: 2rem;
      overflow: auto;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      overflow: auto;
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 2rem;

      font: 400 1rem "Inter", sans-serif;
      font-weight: bold;
      position: relative;

      img {
        width: 2.5rem;
        height: 2.5rem;

        margin-right: 10px;

        border-radius: 3px;
        border-style: none;
      }

      h1 strong {
        color: white;
      }
    }

    .description {
      text-align: center;
      font-size: 17px;
    }
  }

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
    margin-top: -1rem;
    overflow: auto;
    margin-bottom: -1rem;

    @media (max-width: 960px) {
      padding-top: 15rem;
      gap: 2rem;
      overflow: auto;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      overflow: auto;
    }
  }

  h1.selection-title {
    align-items: center;
    justify-content: center;
    text-align: center;

    margin-top: 3rem;
    margin-bottom: -6rem;
  }

  div#selection {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;

    align-content: center;

    margin-top: -3rem;
    margin-bottom: -5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    @media (max-width: 960px) {
      padding-top: 15rem;
      gap: 2rem;
      overflow: auto;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      overflow: auto;
    }

    .true {
      background: ${({ theme }) => theme.colors.backgroundOverlay};
      color: ${({ theme }) => theme.colors.gold};
      box-shadow: 0 0 5px 0.1px ${({ theme }) => theme.colors.gold};
      transition: all 0.2s ease-in-out;

      &:hover {
        background: ${({ theme }) => theme.colors.backgroundOverlay};
        color: ${({ theme }) => theme.colors.grayLine};
        box-shadow: 0 0 5px 0.1px ${({ theme }) => theme.colors.grayLine};
      }
    }
    
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5rem 2rem;
      height: 100%;
      text-align: center;
      background: ${({ theme }) => theme.colors.backgroundLight};
      border-radius: 10px;
      box-shadow: ${({ theme }) => theme.boxShadow};
      cursor: pointer;
    }
    div:hover {
      color: ${({ theme }) => theme.colors.grayLine};
      background: ${({ theme }) => theme.colors.backgroundHover}
    }
  }
`;
