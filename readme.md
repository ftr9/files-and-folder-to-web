# IDE files and folder to web

Ide's files and folder in web for better visualization of project's folder structure

![shortDemo](https://github.com/ftr9/files-and-folder-to-web/assets/60734475/b4cea5d4-5bba-4a80-974a-81c57d6c3f7b)

# Installation

---

install it as locally or globally

```sh
# npm i files-and-folders-to-web
or
# npm i files-and-folders-to-web -g
```

# Usuage

---

Head over to root directory of your project file and run

```sh
# npx files-and-folders-to-web

if you wish to exclude content of some folders then run

# npx files-and-folders-to-web --excludeContentOf node_modules utils src
```

| Arguments          | Optional | type     | Description                                 |
| ------------------ | -------- | -------- | ------------------------------------------- |
| --excludeContentOf | true     | string[] | Exclude the contents of your desired Files. |

**\*By default contents of node_modules and .git is excluded. For the rest you have to put the folder name as an argument**
