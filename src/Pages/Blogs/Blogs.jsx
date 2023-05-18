import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='font-bold italic	text-2xl text-center'>What is an access token and refresh token? How do they work and where should we store them on the client-side?
</h1>
<br></br>
<p>Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them.Refresh tokens allow you to balance your users' access needs with your organization's security practices. <br>
</br>
One can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code.
<li>Store it in local browser storage. </li>
<li>Store it in a cookie in client side, it can be safer than local browser storage.</li>
<li>Don't store the token but store username and password in the browser or client-side cookie, and then retrieve a new token by sending credentials silently.</li></p>
            <h1 className='font-bold italic	text-2xl text-center'>Compare SQL and NoSQL databases?
</h1><br></br>
<p>SQL databases are primarily called Relational Databases (RDBMS); whereas NoSQL databases are primarily called non-relational or distributed database.At a high level, NoSQL and SQL databases have many similarities. In addition to supporting data storage and queries, they both also allow one to retrieve, update, and delete stored data. However, under the surface lie some significant differences that affect NoSQL versus SQL performance, scalability, and flexibility.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>

            <h1 className='font-bold italic	text-2xl text-center'>What is express js? What is Nest JS ?
</h1><br></br>
<p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.</p><br></br>
<p>NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express.Nest. js is a server-side Node. js framework that's great for building highly testable and maintainable backend applications. </p>

            <h1 className='font-bold italic	text-2xl text-center'>What is MongoDB aggregate and how does it work?</h1><br></br>
            <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. Mongoose's aggregate() function returns an instance of Mongoose's Aggregate class. Aggregate instances are thenable, so one can use them with await and promise chaining. The Aggregate class also supports a chaining interface for building aggregation pipelines.As an example, think about the phone numbers on your cell phone. You can refer to them individually (your mother's number, your best friend's number, etc).</p>

        </div>
    );
};

export default Blogs;