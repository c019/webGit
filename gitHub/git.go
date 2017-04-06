package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"os/exec"
)

var (
	dirEmpty bool
	dirLocal string
	scan     = bufio.NewScanner(os.Stdin)
)

func main() {
	fmt.Printf("\033[2J")           // clear screen
	fmt.Printf("\033[%d;%dH", 0, 0) // move cursor to x-0, y=0
	for {
		isEmptyDir()
		op := menuPrincipal()
		switchOP(op)
		if op == "0" {
			break
		}
	}
}

func menuPrincipal() string {
	fmt.Println("[1] Git Status\n[2] Git Add\n[3] Git Commit\n[4] Git Pull\n[5] Git Push\n[6] Mudar Diretório\n[0] Exit")
	fmt.Print("Opção: ")
	scan.Scan()
	fmt.Printf("\033[2J")           // clear screen
	fmt.Printf("\033[%d;%dH", 0, 0) // move cursor to x=0, y=0
	return scan.Text()
}

func switchOP(op string) {
	switch op {
	case "0":
		fmt.Println("Saindo...")
	case "1":
		gitStatus()
	case "2":
		gitAdd()
	case "3":
		gitCommit()
	case "4":
		gitPull()
	case "5":
		gitPush()
	case "6":
		changeDirLocal()
	default:
		fmt.Println("Input Invalid!")
	}
}

func gitStatus() {
	cmdOutput, err := exec.Command("git", "-C", getDirLocal(), "status").Output()
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println(string(cmdOutput))
}

func gitAdd() {
	fmt.Print("Informe o arquivo que deseja adicionar\n(O \".\" adiciona todos os arquivos): ")
	scan.Scan()
	arquivo := scan.Text()

	cmdOutput, err := exec.Command("git", "-C", getDirLocal(), "add", arquivo).Output()
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println(string(cmdOutput))
}

func gitCommit() {
	fmt.Print("Informe a mensagem do commit: ")
	scan.Scan()
	msg := scan.Text()
	cmdOutput, err := exec.Command("git", "-C", getDirLocal(), "commit", "-m", msg).Output()
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println(string(cmdOutput))
}

func gitPull() {
	cmdOutput, err := exec.Command("git", "-C", getDirLocal(), "pull").Output()
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println(string(cmdOutput))
}

func gitPush() {
	cmdOutput, err := exec.Command("git", "-C", getDirLocal(), "push").Output()
	if err != nil {
		log.Fatalln(err)
	}
	fmt.Println(string(cmdOutput))
}

func isEmptyDir() {
	if !dirEmpty {
		fmt.Print("Informe o local do Git: ")
		scan.Scan()
		setDirLocal(scan.Text())
	}
}

func setDirLocal(text string) {
	dirLocal = text
	dirEmpty = true
}

func getDirLocal() string {
	return dirLocal
}

func changeDirLocal() {
	dirEmpty = false
}
