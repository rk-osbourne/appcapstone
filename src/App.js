// Put your code below this line.

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
//import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import { generateClient } from "aws-amplify/api";
import { updateTransactions } from './graphql/mutations';
import { listTransactionss, getTransactions } from "./graphql/queries";

const client = generateClient()

const client = generateClient()
const newTransactions = await client.graphql({
  query: createTransactions,
  variables: {
      input: {
  "name": "Lorem ipsum dolor sit amet",
  "category": "Lorem ipsum dolor sit amet",
  "amount": "Lorem ipsum dolor sit amet",
  "transactionDate": "Lorem ipsum dolor sit amet",
  "type": "Lorem ipsum dolor sit amet",
  "description": "Lorem ipsum dolor sit amet"
}
  }
});

const updatedTransactions = await client.graphql({
  query: updateTransactions,
  variables: {
      input: {
  "name": "Lorem ipsum dolor sit amet",
  "category": "Lorem ipsum dolor sit amet",
  "amount": "Lorem ipsum dolor sit amet",
  "transactionDate": "Lorem ipsum dolor sit amet",
  "type": "Lorem ipsum dolor sit amet",
  "description": "Lorem ipsum dolor sit amet"
}
  }
});
const deletedTransactions = await client.graphql({
  query: deleteTransactions,
  variables: {
      input: {
          id: "YOUR_RECORD_ID"
      }
  }
});

// List all items
const allTransactionss = await client.graphql({
  query: listTransactionss
});
console.log(allTransactions);

// Get a specific item
const oneTransactions = await client.graphql({
  query: getTransactions,
  variables: { id: 'YOUR_RECORD_ID' }
});
return (
  <View className="App">
    <Heading level={1}>My Notes App</Heading>
    <View as="form" margin="3rem 0" onSubmit={createNote}>
      <Flex direction="row" justifyContent="center">
        <TextField
          name="name"
          placeholder="Note Name"
          label="Note Name"
          labelHidden
          variation="quiet"
          required
        />
        <TextField
          name="description"
          placeholder="Note Description"
          label="Note Description"
          labelHidden
          variation="quiet"
          required
        />
        <Button type="submit" variation="primary">
          Create Note
        </Button>
      </Flex>
      <View
        name="image"
        as="input"
        type="file"
        style={{ alignSelf: "end" }}
      />
    </View>
    <Heading level={2}>Current Notes</Heading>
    <View margin="3rem 0">
      {notes.map((note) => (
        <Flex
          key={note.id || note.name}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Text as="strong" fontWeight={700}>
            {note.name}
          </Text>
          <Text as="span">{note.description}</Text>
          {note.image && (
            <Image
              src={note.image}
              alt={`visual aid for ${notes.name}`}
              style={{ width: 400 }}
            />
          )}
          <Button variation="link" onClick={() => deleteNote(note)}>
            Delete note
          </Button>
        </Flex>
      ))}
    </View>
    <Button onClick={signOut}>Sign Out</Button>
  </View>
);
export default withAuthenticator(App);
