require('dotenv').config();
const mongoose = require('mongoose');

const dbState = [
    {
        value: 0,
        label: 'Disconnected',
    },
    {
        value: 1,
        label: 'Connected',
    },
    {
        value: 2,
        label: 'Connecting',
    },
    {
        value: 3,
        label: 'Disconnecting',
    },
];

const connection = async () => {
    const option = {
        user: process.env.DB_USERNAME,
        pass: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME
    };
    await mongoose.connect(process.env.DB_HOST, option);
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value === state).label, 'to database');
};

module.exports = connection;
