const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const appModel = require('../db/app-model');
const productModel = require('../db/product-model');
const dotenv = require('dotenv');

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;
dotenv.config();



var shopify_mw = function (server){
    server.use(session({ secure: true, sameSite: 'none' }, server));

    console.log(SHOPIFY_API_SECRET_KEY);
    server.keys = [process.env.SHOPIFY_API_SECRET_KEY];

    server.use(
    createShopifyAuth({
        apiKey: process.env.SHOPIFY_API_KEY,
        secret: process.env.SHOPIFY_API_SECRET_KEY,
        scopes: ['read_products','write_products'],
        afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        console.log(shop);
        console.log('accessToken-->');
        console.log(accessToken);

        new appModel({
            shop:shop,
            accessToken:accessToken
        }).save().then(function(result){
            console.log(result);
        })

        ctx.redirect('/');
        },
    }),
    );

    server.use(
    verifyRequest(
        /*
        {
        // path to redirect to if verification fails
        // defaults to '/auth'
        authRoute: '/auth',
        // path to redirect to if verification fails and there is no shop on the query
        // defaults to '/auth'
        fallbackRoute: '/install',
        }
        */
    ),
    );


    // _.get('/', getMessage);

    // server.use(_.routes());

}

module.exports = shopify_mw;

