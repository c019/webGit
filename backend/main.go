package main

import (
	"context"
	"strings"

	"github.com/google/go-github/github"

	"fmt"

	"os/exec"

	"gopkg.in/kataras/iris.v6"
	"gopkg.in/kataras/iris.v6/adaptors/httprouter"
	"gopkg.in/kataras/iris.v6/adaptors/view"
)

const (
	address = "192.168.111.44:3000"
)

type accounts struct {
	Username string
	Password string
}

func main() {
	app := iris.New()

	adapt(app)

	routes(app)

	listen(app)
}

func adapt(app *iris.Framework) {
	app.Adapt(iris.DevLogger())
	app.Adapt(httprouter.New())
	app.Adapt(view.HTML("/home/c019/Develop/GOPATH/src/webGit/frontend/templates", ".html"))
}

func routes(app *iris.Framework) {

	routeErro(app)

	app.Get("/", func(ctx *iris.Context) {
		ctx.Render("login.html", nil)
		// ctx.Redirect("/login", 200)
	})

	app.Post("/login", func(ctx *iris.Context) {
		account := accounts{}
		err := ctx.ReadForm(&account)
		if err != nil {
			ctx.Log(iris.DevMode, "Error when reading form: "+err.Error())
			return
		}
		if account.Username != "" && account.Password != "" {
			auth(ctx, account.Username, account.Password)
			return
		}

		ctx.Render("login.html", struct{ Error string }{Error: "Campos Invalidos"})
	})

}

func routeErro(app *iris.Framework) {
	app.OnError(iris.StatusNotFound, func(ctx *iris.Context) {
		ctx.HTML(iris.StatusNotFound, "<h1>Custom not found handler!</h1>")
	})
}

func listen(app *iris.Framework) {
	_, err := exec.Command("google-chrome", address).Output()
	if err != nil {
		app.Log(iris.DevMode, "Error "+err.Error())
		return
	}
	app.Log(iris.DevMode, "")
	app.Listen(address)
}

func auth(ctx *iris.Context, username, password string) {
	tp := github.BasicAuthTransport{
		Username: strings.TrimSpace(username),
		Password: strings.TrimSpace(password),
	}

	client := github.NewClient(tp.Client())
	user, _, err := client.Users.Get(context.Background(), "")

	if err != nil {
		ctx.Render("login.html", struct{ Error string }{Error: "Login Incorreto"})
		return
	}
	ctx.Writef("Git: %v\n", fmt.Sprintf("%v", github.Stringify(user)))
}
