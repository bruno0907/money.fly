import styled from 'styled-components';
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2{
    color: var(--color-text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  input{
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
    border: solid 1px #D7D7D7;
    background: #E7E9EE;
    margin-bottom: 1rem;
    transition: filter 150ms;

    ::placeholder{
      color: var(--color-text-body);
    }
  }

  button[type="submit"]{
    width: 100%;
    background: var(--color-green);
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 0.25rem;
    color: var(--color-white);
    font-weight: 500;
    transition: background-color 150ms;

    :hover{
      background-color: ${darken(0.1, '#33CC95')};      
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  
`
    
interface TransactionTypeButtonProps{
  isActive: boolean;
  activeColor: 'deposit' | 'withdraw';
}

const activeColors = {
  deposit: '#12A454',
  withdraw: '#E52E4D'
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  padding: 1rem 2rem;
  border: 1px solid #D7D7D7;  
  
  background-color: ${({ isActive, activeColor }) => isActive 
    ? transparentize(0.8, activeColors[activeColor])
    : 'transparet'
  };  
  
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  transition: border-color 150ms;


  img{
    height: 24px;
  }

  span{
    margin-left: 1rem;
    color: var(--color-text-title);
    font-size: 1rem;
    font-weight: 500;
  }

  :hover{
    border-color: ${darken(0.1, '#D7D7D7')}
  }


`