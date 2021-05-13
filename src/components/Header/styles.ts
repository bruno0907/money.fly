import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;   
  background-color: var(--color-blue);  
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;
  display:flex;
  align-items: center;
  justify-content: space-between;

  button{
    font-size: 1rem;
    color: var(--color-white);
    background: var(--color-blue-light);
    border: 0;
    border-radius: 0.25rem;
    padding: 0.75rem 2rem;    
    transition: filter 150ms;

    :hover{
      filter: brightness(0.9);
    }
  }

`