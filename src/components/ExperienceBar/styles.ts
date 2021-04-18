import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div.bar {
    position: relative;
    flex: 1;
    margin: 0 1.5rem;
    height: 4px;
    background: ${({ theme }) => theme.colors.grayLine};
    border-radius: 4px;

    div {
      height: 4px;
      background: ${({ theme }) => theme.colors.gold};
      box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.colors.gold};
      border-radius: 5px;
    }
  }
`;

export const CurrentExperience = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;

export const Title = styled.div`
  margin-left: 50%;
  margin-bottom: 1rem;

  transform: translateX(-15%);

  font: 400 1.5rem 'Inter',sans-serif;
`
