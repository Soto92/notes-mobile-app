const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

const proxyOptions = {
  target: "https://api.dontpad.com",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
  onProxyRes: (proxyRes, req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  },
};

const apiProxy = createProxyMiddleware("/api", proxyOptions);

app.use("/api", apiProxy);

const port = 8001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
