require('isomorphic-fetch');
require('./db/db-connect');
const dotenv = require('dotenv');
const Koa = require('koa');
const router = require('koa-router');
const next = require('next');
const axios = require('axios');
var mw_shopify = require('./middleware/shopify');
dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

const server = new Koa();
var rt = router();

app.prepare().then(() => {

  // mw_shopify(server);
  
    // routes
    rt.get('/sdf',getMessage);
    function *getMessage() {
      console.log('wirkjsdf');
      this.body = "Hello world!";
    };
  
    server.use(rt.routes());
    
  // server.use(async (ctx) => {
  //   await handle(ctx.req, ctx.res);
  //   // console.log(ctx.res)
  //   ctx.respond = false;
  //   ctx.res.statusCode = 200;
  //   return
  // });

  // shop = 'custom123-app-test-store.myshopify.com';
  // accessToken = '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';
  // const shopRequestUrl = 'https://' + shop + '/admin/api/2020-04/shop.json';
  // const shopRequestHeaders = {
  //   'X-Shopify-Access-Token': accessToken,
  // };

  // axios.get(shopRequestUrl, { headers: shopRequestHeaders })
  // .then((shopResponse) => {
  //   console.log(shopResponse);
  // })
  // .catch((error) => {
  //   console.log(error);
  //   // res.status(error.statusCode).send(error.error.error_description);
  // });

  
  server.listen(port, (req,res) => {
    console.log(`> Ready on http://localhost:${port}`);  
  });

});