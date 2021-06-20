import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  height: 100vh;
  /* max-width: 992px; */

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
    display: grid;
    flex: 1;

    margin-top: 2rem;
    margin-right: -5rem;
    margin-left: -5rem;
    margin-bottom: 5rem;

    padding-right: 5rem;
    padding-left: 5rem;
    
    gap: 5rem;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    overflow: auto;

    /* @media (max-width: 960px) {
      padding-top: 15rem;
      gap: 2rem;
      overflow: auto;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      overflow: auto;
    } */
  }
`;
