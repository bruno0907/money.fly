import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';
import { GlobalStyles } from './styles/global';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 0,
          title: 'Saldo',
          type: 'deposit',
          category: 'Saldo',
          amount: 21500,
          createdAt: new Date('2021-01-01 08:00:00')
        },
        {
          id: 1,
          title: 'Luz',
          type: 'withdraw',
          category: 'Contas',
          amount: 320,
          createdAt: new Date('2021-05-15 09:30:00')
        },
        {
          id: 2,
          title: 'Internet',
          type: 'withdraw',
          category: 'Contas',
          amount: 289,
          createdAt: new Date('2021-05-20 09:30:00')
        },
        {
          id: 3,
          title: 'Cartão de crédito',
          type: 'withdraw',
          category: 'Contas',
          amount: 269,
          createdAt: new Date('2021-05-25 09:30:00')
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {      
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      const newTransaction = {
        ...data,
        createdAt: new Date()
      }
      return  schema.create('transaction', newTransaction)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);