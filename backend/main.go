package main

import (
	"context"
	"strings"

	"github.com/google/go-github/github"

	"fmt"

	"gopkg.in/kataras/iris.v6"
	"gopkg.in/kataras/iris.v6/adaptors/httprouter"
)

const (
	address = "0.0.0.0:8080"
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
}

func routes(app *iris.Framework) {

	routeErro(app)

	app.Post("/git", func(ctx *iris.Context) {
		account := accounts{}
		err := ctx.ReadForm(&account)
		if err != nil {
			ctx.Log(iris.DevMode, "Error when reading form: "+err.Error())
			return
		}
		auth(ctx, account.Username, account.Password)
	})

}

func routeErro(app *iris.Framework) {
	app.OnError(iris.StatusNotFound, func(ctx *iris.Context) {
		ctx.HTML(iris.StatusNotFound, "<h1>Custom not found handler!</h1>")
	})
}

func listen(app *iris.Framework) {
	app.Log(iris.DevMode, "")
	app.Listen(address)
}

func auth(c *iris.Context, username, password string) {
	tp := github.BasicAuthTransport{
		Username: strings.TrimSpace(username),
		Password: strings.TrimSpace(password),
	}

	client := github.NewClient(tp.Client())
	ctx := context.Background()
	user, _, err := client.Users.Get(ctx, "")

	if err != nil {
		c.Text(200, fmt.Sprintf("\nerror: %v\n", err))
		return
	}
	c.Writef("Git: %v\n", fmt.Sprintf("%v", github.Stringify(user)))
}
