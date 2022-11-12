import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='row '>
            <div className="col-xl-4 blog">
                <h2>Difference between Javascript and Node JS?</h2>
                <p>Javascript is a programming language. It only runs on the web browser. Js basically used on client side for front end development.</p>
                <p>On the other hand NodeJS is an interpreter or execution environment for js. NodeJS mostly used on Server side for back-end development. To parse and runs js NodeJS use the v8 engine.</p>
            </div>
            <div className="col-xl-4 blog">
                <h2>When should you use nodejs and when should you use mongodb?</h2>
                <p>MongoDB and NodeJS are two different types of technology. MongoDB is a database system which helps to store documents in a database. Also it can handle some operation like data updates, search documents, delete.</p>
                <p>NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.</p>
            </div>
            <div className="col-xl-4 blog">
                <h2>Differences between sql and no-sql databases?</h2>
                <p>SQL databases are primarily called as Relational Databases.It used structured query language and have a predefined schema. SQL databases are table-based & vertically scalable.
               </p>
               <p> NoSQL databases are non-relational. NoSQL databases have dynamic schemas for unstructured data. NoSQL databases are document, key-value, graph based and horizontally scalable.</p>
            </div>
        </div>
    );
};

export default Blog;