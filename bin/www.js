"use strict";
//서버 실행시키는게 이 파일에 있으니 이걸 실행시켜야 한다
// node ./bin/www.js   package.json 이 있는 루트에서 실행시켜줘야 한다

const app = require("../app");
const port = 3000;

app.listen(port, ()=>{
    console.log("server starting");
});