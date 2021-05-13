import { Income, Outcome, Total } from '../../assets'
import { useTransactions } from '../../hooks/useTransactions'

import { Container, Card, CardTotal } from './styles'

function Summary(){
  const { transactionsSummary } = useTransactions()  

  return(
    <Container>        
      <Card>
        <header>
          <p>Entradas</p>
          <img src={Income} alt="Entradas" />
        </header>
        <h3>{
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(transactionsSummary.deposits)
        }</h3>
      </Card>
      <Card>
        <header>
          <p>Saídas</p>
          <img src={Outcome} alt="Saídas" />
        </header>
        <h3>{
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(transactionsSummary.withdraws)
        }</h3>
      </Card>
      <CardTotal>
        <header>
          <p>Total
          </p><img src={Total} alt="Total" />
        </header>
        <h3>{
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(transactionsSummary.total)  
        }</h3>
      </CardTotal>        
    </Container>
  )
}

export { Summary }