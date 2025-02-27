<h1> <img src="https://github.com/MickTK/DownGit/raw/master/res/images/downgit.png" width="20" height=auto /> DownGit </h1>

#### Create GitHub Resource Download Link

With this tool you can directly download or create download link to any GitHub **public directory or file**.

### Website

[DownGit ↑](https://micktk.github.io/DownGit)

### How to Use?
<details>
<summary>Show</summary>
<img src="https://cloud.githubusercontent.com/assets/5456665/17822364/940bded8-6678-11e6-9603-b84d75bccec1.gif"/>
</details>
<br>

##### Advanced Usage
<details>
<summary>Show</summary>

A typical download URL will look like this- `https://micktk.github.io/DownGit/#/home?url=<link>&fileName=<name>&rootDirectory=<true or false or name>`

Now, if you want to download this directory- **`https://github.com/MickTK/DownGit/tree/master/res/images`** with this file name- **`DownGit-Images.zip`** and this root directory name- **`ImagesOfDownGit`**, then the URL will be- https://micktk.github.io/DownGit/#/home?url=https://github.com/MickTK/DownGit/tree/master/res/images&fileName=DownGit-Images&rootDirectory=ImagesOfDownGit

In default, value of `fileName` and `rootDirectory` is set to the name of the downloading file or directory. If you do not want to add the directory itself in the zip, then set `rootDirectory=false`. Like: this link- https://micktk.github.io/DownGit/#/home?url=https://github.com/MickTK/DownGit/tree/master/res/images&rootDirectory=false, will download a file named **`images.zip`**; however the root directory- `"images"`, will not be included in the zip.

If you want to download file- **`https://github.com/MickTK/DownGit/blob/master/res/images/downgit.png`** with name- **`DownGitIcon.zip`**, then the link will be- https://micktk.github.io/DownGit/#/home?url=https://github.com/MickTK/DownGit/blob/master/res/images/downgit.png&fileName=DownGitIcon

</details>
