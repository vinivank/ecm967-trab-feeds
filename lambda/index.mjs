import inserir_feed from './inserir_feed.mjs';
import obter_feed from './obter_feed.mjs';
import obter_feed_esp from './obter_feed_esp.mjs';
import deletar_feed from './deletar_feed.mjs';
import put_feed from './put_feed.mjs';

 import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
 import {
 //GetCommand, não importamos mais
 //PutCommand, não importamos mais
 //ScanCommand, não importamos mais
 DynamoDBDocumentClient
 } from "@aws-sdk/lib-dynamodb";
 const client = new DynamoDBClient({});
 const docClient = DynamoDBDocumentClient.from(client);
 const tableName = "feedback";
 export const handler = async (event, context) => {
 const {method, payload, id} = event
 if (method === "POST"){
 return inserir_feed(docClient, tableName, payload, context.awsRequestId)
 }
 else if (method === "GET" && id === "all"){
 return obter_feed(docClient, tableName);
 }
 else if (method === "GET" && id){
 return obter_feed_esp(docClient, tableName, id);
 }
 else{
 console.log(event);
 return event;
 }
 };
