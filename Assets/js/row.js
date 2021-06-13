const openTab = (tabName, i, x=document.getElementsByClassName("containerTab")) => {
    for (let i = 0; i < x.length; i++) x[i].style.display = "none"
    document.getElementById(tabName).style.display = "block"
}
