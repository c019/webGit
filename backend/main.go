package main

import (
	"os/exec"
	"strings"

	"github.com/google/go-github/github"
	"gopkg.in/kataras/iris.v6"
	"gopkg.in/kataras/iris.v6/adaptors/httprouter"
	"gopkg.in/kataras/iris.v6/adaptors/view"
)

type accounts struct {
	UserGet    *github.User
	Username   string
	Password   string
	RememberMe string
}

type logins struct {
	CheckGit         bool
	LoginIncorreto   bool
	MessageInfoGit   string
	MessageErroLogin string
}

const (
	address = "localhost:9001"
)

var (
	checkAuth bool
	app       *iris.Framework
	client    *github.Client
	login     = logins{}
	account   = accounts{}
)

func init() {
	app = iris.New()
	app.Adapt(iris.DevLogger())
	app.Adapt(httprouter.New())
	app.Adapt(view.HTML("/home/c019/Develop/GoPath/src/webGit/frontend/templates", ".html").Reload(true))
}

func main() {
	routes()
	listenServer()
}
func routes() {

	routeStatic()
	routeErro()

	app.Get("/", func(ctx *iris.Context) {
		ctx.Redirect("/checkLogin")
	})

	app.Get("/checkLogin", func(ctx *iris.Context) {
		if checkAuth {
			ctx.Redirect("/admin")
		} else {
			ctx.Redirect("/login")
		}
	})

	app.Get("/login", func(ctx *iris.Context) {
		if checkAuth {
			ctx.Redirect("/admin")
		} else {
			_, err := exec.Command("git", "--version").Output()
			if err != nil {
				login.CheckGit = true
				login.LoginIncorreto = false
				login.MessageInfoGit = "Git não instalado"
				ctx.Render("login.html", login, iris.Map{"gzip": true})
			} else {
				ctx.Render("login.html", nil, iris.Map{"gzip": true})
			}
		}
	})

	app.Post("/login", func(ctx *iris.Context) {
		err := ctx.ReadForm(&account)
		if err != nil {
			ctx.Log(iris.DevMode, "Error when reading form: "+err.Error())
			return
		}
		if account.Username != "" && account.Password != "" {
			basicAuth(ctx, account.Username, account.Password)
			return
		}

		login.LoginIncorreto = true
		login.MessageErroLogin = "Campos Invalidos"

		ctx.Render("login.html", login, iris.Map{"gzip": true})
	})

	app.Get("/logout", func(ctx *iris.Context) {
		checkAuth = false
		ctx.Redirect("/login")
	})

	app.Get("/admin", func(ctx *iris.Context) {
		if checkAuth {
			ctx.Render("principal.html", struct{ User string }{User: *account.UserGet.Login}, iris.Map{"gzip": true})
		} else {
			ctx.Redirect("/login")
		}
	})

}

func routeStatic() {
	app.StaticWeb("/styles", "/home/c019/Develop/GoPath/src/webGit/frontend/styles")
	app.StaticWeb("/scripts", "/home/c019/Develop/GoPath/src/webGit/frontend/scripts")
	app.StaticWeb("/image", "/home/c019/Develop/GoPath/src/webGit/frontend/image")
}

func routeErro() {
	app.OnError(iris.StatusNotFound, func(ctx *iris.Context) {
		ctx.HTML(iris.StatusNotFound, "<h1>Custom not found handler!</h1>")
	})
}

func listenServer() {
	_, err := exec.Command("google-chrome", "http://"+address).Output()
	if err != nil {
		app.Log(iris.DevMode, "Error "+err.Error())
		return
	}
	app.Log(iris.DevMode, "")
	app.Listen(address)
}

func basicAuth(ctx *iris.Context, username, password string) {
	tp := github.BasicAuthTransport{
		Username: strings.TrimSpace(username),
		Password: strings.TrimSpace(password),
	}

	client = github.NewClient(tp.Client())

	response, _, err := client.Users.Get(ctx, "")

	if err != nil {

		login.LoginIncorreto = true
		login.MessageErroLogin = "E-mail ou Senha informada estão incorretos."

		ctx.Render("login.html", login, iris.Map{"gzip": true})
		return
	}
	checkAuth = true
	account.UserGet = response
	ctx.Redirect("/admin")
}
