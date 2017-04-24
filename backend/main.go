package main

import (
	"strings"

	"github.com/google/go-github/github"

	"os/exec"

	"gopkg.in/kataras/iris.v6"
	"gopkg.in/kataras/iris.v6/adaptors/httprouter"
	"gopkg.in/kataras/iris.v6/adaptors/view"
)

type accounts struct {
	Username   string
	Password   string
	RememberMe string
}

const (
	address = "c019.com.br:4000"
)

var (
	app    *iris.Framework
	client *github.Client
)

func init() {
	app = iris.New()
	app.Adapt(iris.DevLogger())
	app.Adapt(httprouter.New())
	app.Adapt(view.HTML("/home/c019/Develop/GOPATH/src/webGit/frontend/templates", ".html").Reload(true))
}

func main() {
	routes()
	listenServer()
}
func routes() {

	routeStatic()
	routeErro()

	app.Get("/", func(ctx *iris.Context) {
		ctx.Redirect("/login")
	})

	app.Get("/login", func(ctx *iris.Context) {
		ctx.Render("login.html", nil)
	})

	app.Post("/login", func(ctx *iris.Context) {
		account := accounts{}
		err := ctx.ReadForm(&account)
		if err != nil {
			ctx.Log(iris.DevMode, "Error when reading form: "+err.Error())
			return
		}
		if account.Username != "" && account.Password != "" {
			basicAuth(ctx, account.Username, account.Password)
			return
		}

		ctx.Render("login.html", struct {
			LoginIncorreto bool
			MessageErro    string
		}{LoginIncorreto: true, MessageErro: "Campos Invalidos"})
	})

}

func routeStatic() {
	app.StaticWeb("/styles", "/home/c019/Develop/GOPATH/src/webGit/frontend/styles")
	app.StaticWeb("/scripts", "/home/c019/Develop/GOPATH/src/webGit/frontend/scripts")
	app.StaticWeb("/image", "/home/c019/Develop/GOPATH/src/webGit/frontend/image")
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

	_, _, err := client.Users.Get(ctx, "")

	if err != nil {
		ctx.Render("login.html", struct {
			LoginIncorreto bool
			MessageErro    string
		}{LoginIncorreto: true, MessageErro: "E-mail ou Senha informada estão incorretos."})
		return
	}
	ctx.Redirect("/admin/")
}
