1.  Explain the differences between `client-side routing` and `server-side routing`.

A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether.

A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. 

2.  What does HTTP stand for?

Hyper Text Transfer Protocol.

3.  What does CRUD stand for?

Create, Read, Update and Delete. 

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create = PUT with a new URI
         POST to a base URI returning a newly created URI
Read   = GET
Update = PUT with an existing URI
Delete = DELETE

5.  Mention three tools we can use to make AJAX requests:

Axios, Fetch, jQuery. 