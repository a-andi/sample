#Test 
var http = require('http')

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response){
  response.writeHead(200);
  response.write('Hello Noders');
  response.end();
}


# CMD
cd (folder of file)
node helloNoder


#open browser
localhost:8888
