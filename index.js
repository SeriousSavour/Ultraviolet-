// Ultraviolet Railway Deployment
const express = require("express");
const path = require("path");
const { uvPath } = require("@titaniumnetwork-dev/ultraviolet");
const UV = require("@titaniumnetwork-dev/ultraviolet");

const app = express();
const uv = new UV();

app.use(express.static(path.join(__dirname, "public")));
app.use(uv.middleware);

// You can add a simple landing page:
app.get("/", (req, res) => {
  res.send(`
    <html>
    <head><title>Ultraviolet Proxy</title></head>
    <body style="font-family:sans-serif;text-align:center;padding-top:40px">
      <h1>🚀 Ultraviolet Proxy</h1>
      <form action="/service/" method="get">
        <input name="url" placeholder="Enter a URL (https://...)" style="width:60%;padding:8px" />
        <button type="submit">Go</button>
      </form>
      <p>Powered by Ultraviolet on Railway</p>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Ultraviolet running on port ${PORT}`);
});
