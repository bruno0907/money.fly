import styled from 'styled-components';

export const Container = styled.section`
  flex: 1;
  margin-top: -6rem;  
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const Card = styled.article`   
  background: var(--color-white);
  border-radius: 0.25rem;
  padding: 1rem 2rem;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  h3{
    font-size: 2rem;    

    span{
      font-weight: 400;
    }
  }  
  
`

export const CardTotal = styled.article`
  background: var(--color-green);
  border-radius: 0.25rem;
  padding: 1rem 2rem;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: var(--color-white);
  }

  h3{
    font-size: 2rem;    
    color: var(--color-white);

    span{
      font-weight: 400;
    }
  }
`