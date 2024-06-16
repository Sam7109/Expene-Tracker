// const fs = require('fs');
// const path = require('path');
// const querystring = require('querystring');

//  const requestHandler = (req, res) => {
//     const url = req.url;
//     const method = req.method;

//     if (url === '/') {
//         fs.readFile(path.join(__dirname, 'message.txt'), (err, data) => {
//             if (err) {
//                 console.error(err);
//                 res.statusCode = 500;
//                 res.end('Server error');
//                 return;
//             }

//             const messages = data.toString().split('\n').filter(Boolean).reverse();
//             const messageList = messages.map(msg => `<li>${msg}</li>`).join('');

//             res.write('<html>');
//             res.write('<head><title>Enter Message</title></head>');
//             res.write('<body>');
//             res.write('<ul>' + messageList + '</ul>');
//             res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');
//             res.write('</body>');
//             res.write('</html>');
//             res.end();
//         });
//         return;
//     }

//     if (url === '/message' && method === 'POST') {
//         const body = [];
//         req.on('data', (chunk) => {
//             body.push(chunk);
//         });
//         req.on('end', () => {
//             const parsedBody = Buffer.concat(body).toString();
//             const message = querystring.parse(parsedBody).message;
//             fs.appendFile(path.join(__dirname, 'message.txt'), message + '\n', err => {
//                 if (err) {
//                     console.error(err);
//                     res.statusCode = 500;
//                     res.end('Server error');
//                     return;
//                 }
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/');
//                 res.end();
//             });
//         });
//         return;
//     }

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>MY Page</title></head>');
//     res.write('<body><h1>Hello from NodeJS</h1></body>');
//     res.write('</html>');
//     res.end();
// };

// module.exports = requestHandler
