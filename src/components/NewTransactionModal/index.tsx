import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { Close, Income, Outcome } from '../../assets'
import { useTransactions } from '../../hooks/useTransactions'

import { 
  Container, 
  TransactionTypeContainer,
  TransactionTypeButton
} from './styles'

Modal.setAppElement('#root')

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
  const { createNewTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')
  
  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()

    const newTransaction = {      
      title,
      amount,
      type,
      category,      
    }
    await createNewTransaction(newTransaction)

    setTitle('')
    setAmount(0)
    setType('deposit')
    setCategory('')
    onRequestClose()
  }
  
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="global-modal-content"
      overlayClassName="global-modal-overlay"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Nova transação</h2>
        <button 
          type="button" 
          className="modal-close-button" 
          onClick={onRequestClose}
        >
          <img  src={Close} alt="Fechar" />
        </button>

        <input 
          placeholder="Titulo"
          name="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number"
          placeholder="Valor"
          name="amount"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <TransactionTypeButton
            type="button"
            name="type"
            isActive={type === 'deposit'}
            activeColor="deposit"
            onClick={() => setType('deposit')}
          >
            <img src={Income} alt="Entrada" />
            <span>Entrada</span>
          </TransactionTypeButton>
          <TransactionTypeButton
            type="button"
            name="type"
            isActive={type === 'withdraw'}
            activeColor="withdraw"
            onClick={() => setType('withdraw')}
          >
            <img src={Outcome} alt="Saída" />
            <span>Saída</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>

        <input           
          placeholder="Categoria"
          name="category"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>        
    </Modal>
  )
}

export { NewTransactionModal }