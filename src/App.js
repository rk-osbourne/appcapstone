import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { generateClient } from 'aws-amplify/api';
import { createTransactions, updateTransactions, deleteTransactions, listTransactionss, getTransactions } from './graphql/mutations'; // Import transaction operations
import { Auth } from 'aws-amplify'; // Import Auth module

const client = generateClient();

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const allTransactionsData = await client.graphql({ query: listTransactionss });
      setTransactions(allTransactionsData.data.listTransactionss.items);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const createTransaction = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const description = formData.get("description");
    const category = formData.get("category");
    const amount = formData.get("amount");
    const transactionDate = formData.get("transactionDate");
    const type = formData.get("type");

    try {
      await client.graphql({
        query: createTransactions,
        variables: {
          input: { name, description, category, amount, transactionDate, type }
        }
      });
      fetchTransactions(); // Refresh transactions after creating a new one
      form.reset();
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await client.graphql({
        query: deleteTransactions,
        variables: { input: { id } }
      });
      fetchTransactions(); // Refresh transactions after deleting one
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <View className="App">
      <Heading level={1}>Personal Finance App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createTransaction}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Transaction Name"
            label="Transaction Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Transaction Description"
            label="Transaction Description"
            labelHidden
            variation="quiet"
            required
          />
          {/* Add more fields for category, amount, transactionDate, type */}
          <Button type="submit" variation="primary">
            Create Transaction
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Transactions</Heading>
      <View margin="3rem 0">
        {transactions.map((transaction) => (
          <Flex
            key={transaction.id}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {transaction.name}
            </Text>
            <Text as="span">{transaction.description}</Text>
            {/* Display other transaction details */}
            <Button variation="link" onClick={() => deleteTransaction(transaction.id)}>
              Delete Transaction
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
