package utils

import (
	"github.com/google/go-github/github"
)

const (
	CookieName = "mycustomsessionid"
	HashKey    = "the-big-and-secret-fash-key-here"
	BlockKey   = "lot-secret-of-characters-big-too"
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
