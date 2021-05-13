import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

const useTransactions = () => useContext(TransactionsContext)

export { useTransactions }