import dotenv from "dotenv";
dotenv.config();
import { Options } from "graphql-yoga";
import app from './app';
import { createConnection } from "typeorm";
import connectionOptions from "./ormConfig";



const PLAYGROUND_ENDPOINT: string = "/playground";
const PORT : number | string = process.env.PORT || 4000;
const GRAPHQL_ENDPOINT: string = "/graphql";

const appOptions : Options = {
  port : PORT,
  playground: PLAYGROUND_ENDPOINT,
  endpoint: GRAPHQL_ENDPOINT
}

const handleAppStat = () => console.log(`Listening port ${PORT}`);

createConnection(connectionOptions).then(() => {
  
  app.start(appOptions, handleAppStat);
}).catch(err => console.log(err));

