const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === "/") {
        res.end("Welcome to Our Homepage")
    }

    if (req.url === "/about") {
        res.end("About us page")
    }

    res.end(`
        <h1>Oops!</h1>
        <p>We can't seems to find the page you're looking for</p>
        <a href="/">Go back home</a>
    `)
})

server.listen(5000)