const Express = require('express');
const WebServer = Express();
const PORT = process.env.API_PORT || 8080;

const { Client } = require('pg')
const pgClient = new Client({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
pgClient.connect()

const redis = require("redis");
const redisClient = redis.createClient({ host: process.env.REDIS_HOST });

WebServer.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`I'm a good sever, i listen on port ${PORT}!`);
});


WebServer.get('/', function (req, res) {
    res.json({ message: "Hello World" });
});

WebServer.get('/status', async (req, res) => {
    const result = await pgClient.query('SELECT pg_postmaster_start_time() as uptime')
    const uptime = result.rows[0].uptime

    res.json({
        status: 'OK',
        postgresUptime: uptime,
        redisConnectedClients: Number(redisClient.server_info.connected_clients)
    })
})