var koa = require("koa");

var app = new koa();

app.use(async (ctx) => {
	ctx.body = "hello koa";
})

console.info("启动应用...");

app.listen(3000);





