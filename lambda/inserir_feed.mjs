import {
    PutCommand,
} from '@aws-sdk/lib-dynamodb';

export default async (docClient, tableName, payload, id) => {
    const command = new PutCommand({
        TableName: tableName,
        Item: {ID: id,produto: payload.produto,comentario: payload.comentario,classificacao: payload.classificacao}
    });
    const response = await docClient.send(command);
    return {ID: id,produto: payload.produto,comentario: payload.comentario,classificacao: payload.classificacao};
};