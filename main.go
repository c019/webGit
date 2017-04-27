package main

import (
	"os/exec"

	router "webGit/backend"

	iris "gopkg.in/kataras/iris.v6"
)

const (
	address = "localhost:9001"
)

var (
	app *iris.Framework
)

func init() {
	app = iris.New()
	app.Adapt(iris.DevLogger())
}

func main() {
	router.Rotas(app)
	listenServer()
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
