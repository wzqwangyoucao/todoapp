const Koa = require('koa');
const app = new Koa();
const mydata = require('./todos.json')

// logger

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
      console.log(ctx.request.url==='/');
      console.log('2');
});

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log('1');
});

// response

app.use(async ctx => {
    ctx.body = 'Hello World';
    ctx.body = mydata;
    console.log('0');
});

app.on('error', err => {
    log.error('server error', err)
});

app.listen(3000);