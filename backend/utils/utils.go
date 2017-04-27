package utils

import (
	"github.com/google/go-github/github"
)

type Accounts struct {
	UserGet    *github.User
	Username   string
	Password   string
	RememberMe string
}

type Logins struct {
	CheckGit         bool
	LoginIncorreto   bool
	MessageInfoGit   string
	MessageErroLogin string
}
