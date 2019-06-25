console.log("works");
import { Options } from "graphql-yoga";
import app from './app';

const PLAYGROUND_ENDPOINT: string = "/playground";
const PORT : number | string = process.env.PORT || 4000;
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions : Options = {
  port : PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
}

const handleAppStat = () => console.log(`Listening port ${PORT}`);


app.start(appOptions, handleAppStat);

