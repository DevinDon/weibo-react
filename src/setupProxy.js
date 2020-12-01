const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'http://mock.don.red/weibo',
      pathRewrite: { '/proxy': '/' }, // 将对应地址映射到 /proxy 路径下
      changeOrigin: true,
    })
  );
};
