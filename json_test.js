var http = require("http");

 
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Teresa Alvarado Perez progress report 2. JSON \n');
}).listen(8081);



const user = {
    firstName: "Teresa",
    lastName: "Alvarado",
    getFullname: function() {
        return '${this.firstName} ${this.lastName}'
    }
}

const userCopy = JSON.parse(JSON.stringify(user));
console.log(userCopy);

console.log('Server running at http://127.0.0.1:8081/');
