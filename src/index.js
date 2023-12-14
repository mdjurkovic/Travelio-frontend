import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./Styles/index.css";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const link = createUploadLink({ uri: "http://localhost:4000/graphql" });

const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql/",
  cache: new InMemoryCache(),
  link,
});

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
