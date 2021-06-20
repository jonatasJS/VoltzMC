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

  div.contents::-webkit-scrollbar {
    width: 10px;
  }
  
  div.contents::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gold};
    box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.colors.gold};
    border-radius: 20px;
  }

  div.contents::-webkit-scrollbar-track {
    border-radius: 20px;
    box-shadow: none;
    background: transparent;
  }

  div.contents {
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    padding-right: 5rem;

    height: calc(100% + 20%);
    width: calc(100% + 20%);
    
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
      align-items: center;
      justify-content: center;
    }

    section {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 6.25rem;

      align-content: center;
      
      margin-top: 2rem;

      padding-top: 1rem;
      padding-right: 0rem;
  /* 
      padding-bottom: 0rem;
 */
      @media (max-width: 960px) {
        grid-template-columns: 1fr 1fr;
        padding-top: 15rem;
        gap: 2rem;
        overflow: auto;
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        overflow: auto;
      }
    }
  }

  
`;
