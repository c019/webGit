package controller

import (
	"os/exec"
	"strings"

	"github.com/google/go-github/github"

	utils "webGit/backend/utils"

	iris "gopkg.in/kataras/iris.v6"
)

var (
	checkAuth bool
	client    *github.Client
	account   = utils.Accounts{}
	login     = utils.Logins{}
)

func Index(ctx *iris.Context) {
	ctx.Redirect("/checkLogin")
}

func LoginGet(ctx *iris.Context) {
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
}

func LoginPost(ctx *iris.Context) {
	err := ctx.ReadForm(&account)
	if err != nil {
		ctx.Log(iris.DevMode, "Error when reading form: "+err.Error())
	}
	if account.Username != "" && account.Password != "" {
		authGitHub(ctx, account.Username, account.Password)
	}

	login.LoginIncorreto = true
	login.MessageErroLogin = "Campos Invalidos"

	ctx.Render("login.html", login, iris.Map{"gzip": true})
}

func CheckLogin(ctx *iris.Context) {
	if checkAuth {
		ctx.Redirect("/admin")
	} else {
		ctx.Redirect("/login")
	}
}

func Logout(ctx *iris.Context) {
	checkAuth = false
	ctx.Redirect("/login")
}

func authGitHub(ctx *iris.Context, username, password string) {
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
