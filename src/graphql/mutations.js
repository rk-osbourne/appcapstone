/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTransactions = /* GraphQL */ `
  mutation CreateTransactions(
    $input: CreateTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    createTransactions(input: $input, condition: $condition) {
      id
      name
      category
      amount
      transactionDate
      type
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const updateTransactions = /* GraphQL */ `
  mutation UpdateTransactions(
    $input: UpdateTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    updateTransactions(input: $input, condition: $condition) {
      id
      name
      category
      amount
      transactionDate
      type
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const deleteTransactions = /* GraphQL */ `
  mutation DeleteTransactions(
    $input: DeleteTransactionsInput!
    $condition: ModelTransactionsConditionInput
  ) {
    deleteTransactions(input: $input, condition: $condition) {
      id
      name
      category
      amount
      transactionDate
      type
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const listTransactionss = /* GraphQL */ `
  query ListTransactionss(
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        amount
        transactionDate
        type
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
    }
  }
`;
