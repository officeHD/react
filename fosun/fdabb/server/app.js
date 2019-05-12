import Koa from 'koa'
import webpack from 'webpack'
import webpackConfig from '../webpack.config'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware'
import path from 'path'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

const router = new Router()
const app = new Koa()
const compile = webpack(webpackConfig)

app.use(bodyParser())

app.use(devMiddleware(compile, {
	noInfo: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: false
	},
	publicPath: webpackConfig.output.publicPath,
	stats: {
		colors: true
	}
}))

//webpack热更新
app.use(hotMiddleware(compile, {
	// log: console.log,
	// path: '/__webpack_hmr',
	// heartbeat: 10 * 1000
}))

//模拟登录接口
router.post('/login', async (ctx, next) => {
	await new Promise((resolve, reject) => {
		setTimeout(resolve, 3000)
	})
	console.log(ctx.request.body)
	ctx.body = {
		errorcode: 0,
		errormsg: '登录成功'
	}
})

router.get('/favicon.ico', (ctx, next) => {
	ctx.body = null
})
 
  
//渲染页面
router.get('*', async (ctx, next) => {
	ctx.type = 'html'
	ctx.body = `<!DOCTYPE html>
				<html lang="en"  data-scale="true">
				<head>
				<meta charset="UTF-8">
				<title>mobx-demo</title>
				<style>
					 
                </style>
              
				</head>
				<body>
				<div id="app"  ></div>
				<script src="/dist/bundle.js"></script>
				</body>
				</html>`
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(4000)
console.log('app started at port 4000...')