/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTransactions = /* GraphQL */ `
  subscription OnCreateTransactions(
    $filter: ModelSubscriptionTransactionsFilterInput
  ) {
    onCreateTransactions(filter: $filter) {
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
export const onUpdateTransactions = /* GraphQL */ `
  subscription OnUpdateTransactions(
    $filter: ModelSubscriptionTransactionsFilterInput
  ) {
    onUpdateTransactions(filter: $filter) {
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
export const onDeleteTransactions = /* GraphQL */ `
  subscription OnDeleteTransactions(
    $filter: ModelSubscriptionTransactionsFilterInput
  ) {
    onDeleteTransactions(filter: $filter) {
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
