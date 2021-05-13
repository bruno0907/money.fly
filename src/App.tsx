import { useState } from 'react';
import { NewTransactionModal } from './components'
import { Header, Dashboard } from './components';
import { TransactionsContextProvider } from './contexts/TransactionsContext'

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)  

  const handleNewTransactionModal = () => setIsNewTransactionModalOpen(prevState => !prevState)
  
  return (
    <TransactionsContextProvider>
      <Header onOpenNewTransactionModal={handleNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleNewTransactionModal}/>
    </TransactionsContextProvider>

  );
}


