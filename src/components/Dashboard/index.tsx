import { Summary, TransactionsTable } from "../../components";

import { Container } from './styles'

function Dashboard(){
  return(
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}

export { Dashboard }