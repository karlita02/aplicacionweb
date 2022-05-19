requiere('dotenv').config()
const server = requiere('./server');
const Server= new server();
server.listen();