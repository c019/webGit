package controller

import (
	"webGit/backend/utils"

	"gopkg.in/kataras/iris.v6"
)

var (
	account *utils.Accounts
)

func AdminGet(ctx *iris.Context) {
	// if session, _ := ctx.Session().GetBoolean("user.login"); session {
	ctx.Render("principal.html", map[string]string{"User": "user"}, iris.Map{"gzip": true})
	// } else {
	// ctx.Redirect("/login")
	// }
}
