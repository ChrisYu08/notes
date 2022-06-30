let express = require("express");
let app = express();
let fs = require("fs");
//缓存一定要做成单例的，不管谁写进去了，别人都可以拿到
let cache: Record<string, any> = {};
app.get("/app/users/:id", function (req, res) {
  let id = req.params.id;
  if (cache[id]) {
    res.json(cache[id]);
  } else {
    fs.readFile(`/users/${id}.json`, "utf8", (err, data) => {
      let user = JSON.parse(data);
      cache[id] = user;
      res.json(user);
    });
  }
});

app.listen(8080);
