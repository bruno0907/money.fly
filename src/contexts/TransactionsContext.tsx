import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api';

interface TransactionProps{
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

type NewTransactionProps = Omit<TransactionProps, 'id' | 'createdAt'>

type TransactionsSummaryProps = {
  deposits: number;
  withdraws: number;
  total: number
}

interface TransactionContextProps{
  transactions: TransactionProps[];
  createNewTransaction: (transaction: NewTransactionProps) => Promise<void>
  transactionsSummary: TransactionsSummaryProps
}

interface TransactionsContextProviderProps{
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextProps)

export const TransactionsContextProvider = ({ children }: TransactionsContextProviderProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(({ data }) => setTransactions(data.transactions))      
      .catch(error => console.log(error.message))
    
  }, []);

  const createNewTransaction = async (newTransaction: NewTransactionProps) => {
    const { data } = await api.post('/transactions', newTransaction)
    const { transaction } = data
    setTransactions([...transactions, transaction])
  }

  
  const transactionsSummary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws -= transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })


  return(
    <TransactionsContext.Provider value={{
       transactions,
       createNewTransaction,
       transactionsSummary
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}
