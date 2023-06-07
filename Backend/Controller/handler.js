const express = require('express');


exports.getAllBlogs = (req, res) => {
    const connection = req.connection;

    const query = 'SELECT * FROM blogs';


    connection.query(query, (err, results) => {
        if ( err ) {
            console.error('Error retrieving blogs:', err);
            res.status(500).send('Error retrieving blogs');
            return;
        }


        res.json(results);
    })
}
exports.getBlog = (req, res) => {

    const query = `select * from blogs where(id=${Number(req.params.id)})`;

    const connection = req.connection;

    connection.query(query, (err, result) => {
        if ( err ) {
            console.error(err);
            res.send(err)
        }
        res.status(200).json(result)
    })
}

exports.updateBlog = (req, res) => {
    const connection = req.connection;
    const ID = Number(req.params.id)

    const { id, author, title, description, explaination, blogtype } = req.body;
    const value = [author, title, description, explaination, blogtype, id];

    const updateQuery = `
    UPDATE blogs
    SET author = ?, title = ?, description = ?, explaination = ?, blogtype = ?
    WHERE id = ${ID}
  `;

    connection.query(updateQuery, value, (error, results) => {
        if (error) {
            console.error('Error updating record: ', error);
            res.sendStatus(500);
            return;
        }
        console.log('Record updated successfully!');
        res.sendStatus(200);
    });
}

exports.deleteBlog = (req, res) => {

    const deleteQuery = `DELETE FROM blogs WHERE id=${Number(req.params.id)}`;

    const connection = req.connection;

    connection.query(deleteQuery, (err, result) => {
        if ( err ) {
            console.error(err);
            res.send(err)
        }
        res.status(204).send('blog is successfully deleted')
    })
}
exports.createBlog = (req, res) => {
    const connection = req.connection;

    const { id, author, title, description, explaination, blogtype } = req.body;
    const value = [ id, author, title, description, explaination, blogtype ];

    const query = 'INSERT INTO blogs (id, author , title ,description,explaination,blogtype) VALUES (?, ? , ?, ?, ?,?)';

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