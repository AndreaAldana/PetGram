import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.js'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: 'https://apppp.andreaaldana.vercel.app/graphql'
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('app'));
