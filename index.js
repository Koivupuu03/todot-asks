const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'your_user',
    host: 'localhost',
    database: 'todo',
    password: 'your_password',
    port: 5432,
});
