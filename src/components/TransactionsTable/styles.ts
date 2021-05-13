import styled from 'styled-components';

export const Container = styled.div`
  width: 1120px;
  margin: 0 auto;

    table{
      width: 100%;
      text-align: left;
      border-spacing: 0 0.5rem;
      color: var(--color-text-title);      

      th{
        color: var(--color-text-body);
        padding: 1rem 2rem;
        font-weight: 400;
        line-height: 1.5rem;
      }      

      td{
        background: var(--color-white);
        padding: 1rem 2rem;
        border: 0;
        border-radius: 0.25rem;  
        color: var(--color-text-body);   
        
        :first-child{
          color: var(--color-text-title);
        }

        &.withdraw{
          color: var(--color-red);
        }

        &.deposit{
          color: var(--color-green);
        }
      }      
    }
`;
