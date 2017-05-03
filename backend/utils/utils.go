package utils

import (
	"github.com/google/go-github/github"
)

const (
	cookieName = "mycustomsessionid"
	hashKey    = []byte("the-big-and-secret-fash-key-here")
	blockKey   = []byte("lot-secret-of-characters-big-too")
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
