const express = require('express');

exports.createUser = (req, res) => {
    const connection = req.connection;
    const { id, name, email, password } = req.body;

    const value = [ id, name, email, password];
    const query = 'INSERT INTO users (id, name, email, password) VALUES (?, ? , ?, ?)';

    connection.query(query, value, (err, result) => {
        if ( err ) {
            console.error('Error inserting data:', err);
            res.status(500).json({ error: 'Error inserting data into database' });
            return;
        }
        console.log('Data inserted successfully');
        res.status(200).json({ message: 'Data inserted successfully' });
    });
}