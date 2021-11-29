const express = require('express');
const dotenv = require('dotenv');


dotenv.config()
const host = process.env.HOST;
const port = process.env.PORT;

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.post('/auth',(request,response)=> {
    const login_name = request.body.login_name
    const password = request.body.password

    let message = "ログインできませんでした。"
    if(login_name == process.env.LOGIN_NAME 
        && password == process.env.PASSWORD ){
            message = 'ログインしました。'
        }
    response.send(message)

})

app.get('/',(request,response) => {
    console.log(request.query)

    response.send('Hello YSE !!!!')
})
app.get('/profile', (request, response) => {
    response.send('This is Profile page!!!')
})

app.listen(port, host, () => {
        console.log('http://'+ host + ':' + port)
})