const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');
const path = require('path');
const app = new Koa();
const router = new Router();

require('./normal');
require('./partA');
require('./partB');
require('./partC');

const list = require('./store');

for (const v of list) {
  if (typeof v === 'string') {
    router.post(v, (ctx, next) => {
      ctx.body = JSON.stringify({
        code: 0,
        msg: 'success',
        data: [],
      });
    });
    continue;
  }
  const { method = 'post', path, data, callback } = v;
  router[method](
    path,
    callback
      ? callback.bind(this)
      : (ctx, next) => {
          ctx.body = JSON.stringify(
            Object.assign(
              {
                code: 0,
                msg: 'success',
                data: [],
              },
              typeof data === 'function' ? data() : data
            )
          );
        }
  );
}

app.use(async (ctx, next) => {
  ctx.res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  //ctx.res.setHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
  ctx.res.setHeader('Access-Control-Allow-Credentials', 'false');
  ctx.res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  ctx.res.setHeader('Access-Control-Allow-Methods', '*');
  ctx.res.setHeader(
    'Access-Control-Allow-Headers',
    'x-requested-with,Content-Type,token,Authorization,id'
  );
  await next();
});

app.use(
  koaBody({
    multipart: true,
    formLimit: 15000,
    formidable: {
      uploadDir: __dirname + '/public',
      hash: 'md5',
    },
  })
);

app.use(router.routes()).use(router.allowedMethods());
app.use(koaStatic(path.join(__dirname, '/public')));
app.use(logger());

app.listen(4200, () => {
  console.log('mock server start!');
});
