import { Logo } from '../../assets'

import { Container, Content } from './styles'

interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}

function Header({ onOpenNewTransactionModal }: HeaderProps){ 
  return(
    <Container>
      <Content>
        <img src={Logo} alt="money.fly logo" />        
        <button onClick={onOpenNewTransactionModal}>Nova transação</button>      
      </Content>      
      
    </Container>
  )
}

export { Header }