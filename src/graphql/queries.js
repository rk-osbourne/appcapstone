/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTransactions = /* GraphQL */ `
  query GetTransactions($id: ID!) {
    getTransactions(id: $id) {
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      __typename
    }
  }
`;
