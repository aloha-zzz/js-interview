let koa = require('./application');

let app = new koa();

app.use((req, res) => {
    res.write('my Koa');
    res.end();
})

app.listen(3001, () => {
    console.log('myKoa run')
})