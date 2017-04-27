package backend

import (
	controller "webGit/backend/controller"

	"github.com/google/go-github/github"
	"gopkg.in/kataras/iris.v6"
	"gopkg.in/kataras/iris.v6/adaptors/httprouter"
	"gopkg.in/kataras/iris.v6/adaptors/view"
)

var (
	checkAuth bool
	client    *github.Client
)

func start(app *iris.Framework) {
	app.Adapt(httprouter.New())
	app.Adapt(view.HTML("/home/c019/Develop/GoPath/src/webGit/frontend/templates", ".html").Reload(true))
}

func Rotas(app *iris.Framework) {

	start(app)
	routeStatic(app)
	routeErro(app)

	app.Get("/", controller.Index)

	app.Get("/checkLogin", controller.CheckLogin)

	app.Get("/login", controller.LoginGet)

	app.Post("/login", controller.LoginPost)

	app.Get("/logout", controller.Logout)

	app.Get("/admin")

}

func routeStatic(app *iris.Framework) {
	app.StaticWeb("/styles", "/home/c019/Develop/GoPath/src/webGit/backend/resources/styles")
	app.StaticWeb("/scripts", "/home/c019/Develop/GoPath/src/webGit/backend/resources/scripts")
	app.StaticWeb("/image", "/home/c019/Develop/GoPath/src/webGit/backend/resources/image")
}

func routeErro(app *iris.Framework) {
	app.OnError(iris.StatusNotFound, func(ctx *iris.Context) {
		ctx.HTML(iris.StatusNotFound, "<h1>Custom not found handler!</h1>")
	})
}
