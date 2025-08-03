# installation


# setup

* check whether the git is installed or not

git --version

#  config addition   
* list of configs

git config --list

* add your username and your email id(gives an idea who have contributed the code)

git config --global user.name "Your Name"

git config --global user.name "yourname@example.com"

# terms

* Repository(Repo) *
A storage location of your project, including all  files and the entire history of their changes

* working directory --> tracked changes
* staging area  --> untracked changes

# git workflow

* working directory : files that are currently not being tracked(untracked changes)
* staging directory : files that are being tracked(untracked changes)

git init  -> whenever you enter git init an empty git repo is created(tracker without any history)
git add   -> added to staging area (snapshot of code is added)
.gitignore : this is the file where you can put the files and folder name which you don't want to be tracked(inside it the file
name you want to be ignored. Ex: secret.md)
git add . : to send all files current snapshot to staging area(all at once).
git status -> difference b/w staging and workng directory
git commit -m : A snapshot of changes made to the repository. Each commit has an unique ID & a message describing the changes.
Ex : git commit -m "commit message"
git log : List of commits
git checkout "commit hash" : you can view how code looked like i a particular commit(commit hash is an alphanumeric code) it can
be found using * git log command
Ex: git checkout 13e8cff7b6e02a29feb60bed33d63776b83927bb
To go back to latest commit --> HEAD
git branch --> check your branchname
git checkout branch-name --> 
# how git stores the changes 

git add filename

* git has 3 areas -> working directory  -> current changes
* intermediate layer  -> staging


# Commands to push your changes

* Setup remote repo *

* Create a repo on GitHub
* at the bottom of the newly created repo find the code for existing repo pushing

* git remote add origin https://github.com/username/repo-name.git or the repo-name

* git branch -M main : Rename current branch to main (if needed)

<!-- Usual Drill  -->

* git push -u origin main
