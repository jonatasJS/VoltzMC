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

  h1 {
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  div.arrow {
    padding-bottom: 0rem;

    cursor: pointer;
  }

  div.arrow svg:hover {
    color: ${({ theme }) => theme.colors.gold};
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
    padding-left: 1.5rem;

    height: calc(100% + 20%);
    width: calc(100% + 20%);
    
    align-items: center;
    justify-content: center;

    section {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 6rem;

      align-content: center;
      
      margin-top: 2rem;
      margin-bottom: 2rem;
        margin-left: -3rem;

      padding-top: 0rem;
      padding-right: 0rem;
      padding-left: 4.5rem;

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
