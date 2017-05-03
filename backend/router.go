package backend

import (
	privado "webGit/backend/controller/privado"
	public "webGit/backend/controller/public"

	"github.com/google/go-github/github"
	"github.com/gorilla/securecookie"
	"gopkg.in/kataras/iris.v6"
	"gopkg.in/kataras/iris.v6/adaptors/httprouter"
	"gopkg.in/kataras/iris.v6/adaptors/sessions"
	"gopkg.in/kataras/iris.v6/adaptors/view"
)

var (
	checkAuth bool
	client    *github.Client
	key       = "my_sessionid"
)

func start(app *iris.Framework) {
	app.Adapt(httprouter.New())
	app.Adapt(view.HTML("/home/c019/Develop/GoPath/src/webGit/frontend/templates", ".html").Reload(true))

	secureCookie := securecookie.New(hashKey, blockKey)
	mySessions := sessions.New(sessions.Config{
		Cookie: cookieName,
		Encode: secureCookie.Encode,
		Decode: secureCookie.Decode,
	})

	app.Adapt(mySessions)
}

func Rotas(app *iris.Framework) {

	start(app)
	routeStatic(app)
	routeErro(app)

	app.Get("/", public.Index)

	app.Get("/checkLogin", public.CheckLogin)

	app.Get("/login", public.LoginGet)

	app.Post("/login", public.LoginPost)

	app.Get("/logout", public.Logout)

	app.Get("/admin", privado.AdminGet)

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
