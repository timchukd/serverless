'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (event, callback) => {
    const data = JSON.parse(event.body);

    data.id = uuid.v1();
    data.updatedAt = new Date().getTime();

    const params = {
        TableName: 'cards',
        Item: data
    };

    return dynamoDb.put(params, (error, data) => {
        if (error) {
            callback(error);
        }

        callback(error, params.Item);
    });
};