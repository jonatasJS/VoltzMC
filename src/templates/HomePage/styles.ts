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

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
    margin-top: 2rem;
    overflow: auto;
    margin-bottom: 5rem;

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
`;
