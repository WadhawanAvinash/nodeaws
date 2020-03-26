const express = require('express');

const app = express();

app.use((req,res,next) => {
    res.status(200).json({
        message : "First Node AWS"
    });
});

module.exports = app;