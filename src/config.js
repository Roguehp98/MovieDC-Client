export default {
    httpLink: !process.env.ENVIROMENT ==='local' ? 'http://localhost:6969': "https://dc-server.herokuapp.com",
    websocketLink: !process.env.ENVIROMENT ==='local'? 'ws://localhost:6969': "wss://dc-server.herokuapp.com"
}