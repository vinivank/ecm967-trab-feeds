import {
    DeleteCommand
} from '@aws-sdk/lib-dynamodb';

export default async (docClient, tableName, id) =>{
    const command = new DeleteCommand({
        TableName: tableName,
        Key: {
            ID: id
        }
    });
    const response = await docClient.send(command);
    return `User id: ${id} deleted and the response is: ${response}`;
};