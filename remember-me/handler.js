'use strict';

const createCards = require('./cards-create');
const getCards = require('./cards-get-all');
const getCard = require('./cards-get-by-id');
const updateCard = require('./cards-update');
const deleteCard = require('./cards-delete');

module.exports.create = (event, context, callback) =>
    createCards(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(result),
        };

        context.succeed(response);
    });

module.exports.getAll = (event, context, callback) =>
    getCards(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(result),
        };

        context.succeed(response);
    });

module.exports.getById = (event, context, callback) =>
    getCard(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(result),
        };

        context.succeed(response);
    });

module.exports.update = (event, context, callback) =>
    updateCard(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(result),
        };

        context.succeed(response);
    });

module.exports.delete = (event, context, callback) =>
    deleteCard(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(result),
        };

        context.succeed(response);
    });
