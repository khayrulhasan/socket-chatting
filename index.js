const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;



server.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});

// Explorting modules to external file
var exports = module.exports = {};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const developer = io.of('/developer');

developer.on('connection', (socket)=>{
    
    
    socket.on('message', (msg)=>{
        developer.emit('message', msg);
    });


    socket.on('disconnect', ()=>{
        developer.emit('message', 'user disconnected');
    })
});



