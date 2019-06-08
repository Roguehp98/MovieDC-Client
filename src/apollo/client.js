import {ApolloClient} from "apollo-client";
import {HttpLink} from 'apollo-link-http';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition } from "apollo-utilities";
import {split} from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

const SERVER = "http://localhost:6969";
const WS_SERVER = "ws://localhost:6969";

const cache = new InMemoryCache(); 

const httpLink = new HttpLink({
    uri:"http://localhost:6969",
    credentials: "include", 
});

export const wsLink = new WebSocketLink({
    uri: "ws://localhost:6969",
    options: {
        reconnect: true,
        connectionParams: async() => {
            return {};
        }                                
    }
});

wsLink.subscriptionClient.maxConnectTimeGenerator.duration = () =>
  wsLink.subscriptionClient.maxConnectTimeGenerator.max;

const defaultOptions = {
    query: {
        fetchPolicy: 'network-only'
    }
};

const link = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
      },
      wsLink,
      httpLink,
)
// uri: "http://localhost:6969",
const client  = new ApolloClient({
    link,
    cache,
    defaultOptions
    
});

export default client;