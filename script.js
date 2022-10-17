let nb = 0;

let list

function creerCase() {
    choix = document.getElementById("select").value
    if (choix != 0) {
        let d = document.createElement("div")
        let textname = document.createElement("p")
        let texttype = document.createElement("p")

        d.className = "Case"
        d.id = "Case"+nb
        mob = new Mob(choix)
        nb++

        let btsuppr = creerBtSupprimer(d.id)
        let btedit = creerBtEditer(d.id, mob.name, choix)
        let img = setImage(mob.url)

        textname.textContent = "nom : "+mob.name
        textname.id = "tname"+d.id

        texttype.textContent = "type : "+mob.type
        texttype.id = "ttype"+d.id

        d.append(img)
        d.appendChild(textname)
        d.appendChild(texttype)
        d.appendChild(btedit)
        d.appendChild(btsuppr)
        document.getElementById("contenu").appendChild(d)
    }
}

function editerCase(id, nom, choix) {
    mob = new Mob(choix)
    mob.name = nom

    btannuler = creerBtAnnuler(id, nom, choix)
    btvalider = document.createElement("button")

    editMode(id, nom, mob.type)

    btvalider.textContent = "Valider"
    btvalider.id = "btvalider"+id
    btvalider.setAttribute("onclick", "validerEdit(\""+id+"\", \""+nom+"\", \""+choix+"\")")

    document.getElementById("btedit"+id).replaceWith(btannuler)
    document.getElementById("btsuppr"+id).replaceWith(btvalider)
}

function resetEdit(id, nom, choix) {
    mob = new Mob(choix)
    mob.name = nom

    /*
    let btsuppr = document.createElement("button")
    btsuppr.textContent = "doubletest"
    let btedit = document.createElement("button")
    let textname = document.createElement("p")
    let texttype = document.createElement("p")
    */

    let btsuppr = creerBtSupprimer(id)
    let btedit = creerBtEditer(id, nom, choix)
    textMode(id, nom, mob.type)

    /*
    textname.textContent = "nom : "+profil.name
    textname.id = "tname"+id

    texttype.textContent = "type : "+profil.type
    texttype.id = "ttype"+id
    */
    
    document.getElementById("btannuler"+id).replaceWith(btedit)
    document.getElementById("btvalider"+id).replaceWith(btsuppr)
}

function validerEdit(id, nom, choix) {
    mob = new Mob(choix)
    mob.name = nom

    value = document.getElementById("nameinput"+id).value

    if (value != "") {
        nom = value
        mob.name = value
    }

    btsuppr = creerBtSupprimer(id)
    btedit = creerBtEditer(id, nom, choix)

    document.getElementById("btvalider"+id).replaceWith(btsuppr)
    document.getElementById("btannuler"+id).replaceWith(btedit)

    textMode(id, nom, mob.type)
}

function creerBtEditer(id, nom, choix) {
    let bt = document.createElement("button")
    bt.type = "button"
    bt.textContent = "Editer"
    bt.id = "btedit"+id
    bt.setAttribute("onclick", "editerCase(\""+id+"\", \""+nom+"\", \""+choix+"\")")

    return bt
}

function creerBtSupprimer(id) {
    let bt = document.createElement("button")
    bt.type = "button"
    bt.textContent = "Supprimer"
    bt.id = "btsuppr"+id
    bt.setAttribute("onclick", "document.getElementById(\""+id+"\").remove()")

    return bt
}

function creerBtAnnuler(id, nom, choix) {
    let bt = document.createElement("button")
    bt.type = "button"
    bt.textContent = "Annuler"
    bt.id = "btannuler"+id
    bt.setAttribute("onclick", "resetEdit(\""+id+"\", \""+nom+"\", \""+choix+"\")")

    return bt
}

function textMode(id, name, type) {
    let textname = document.createElement("p")
    let texttype = document.createElement("p")
    textname.textContent = "nom : "+name
    textname.id = "tname"+id

    texttype.textContent = "type : "+type
    texttype.id = "ttype"+id

    document.getElementById("tname"+id).replaceWith(textname)
    document.getElementById("ttype"+id).replaceWith(texttype)
}

function editMode(id, name, type) {
    let textname = document.createElement("p")
    let nameinput = document.createElement("INPUT")
    nameinput.id = "nameinput"+id
    nameinput.className = "nameinput"
    textname.appendChild(nameinput)
    textname.id = "tname"+id

    let texttype = document.createElement("p")
    let typeinput = ""
    
    

    texttype.textContent = "type : "+type
    texttype.id = "ttype"+id

    document.getElementById("tname"+id).replaceWith(textname)
    document.getElementById("ttype"+id).replaceWith(texttype)
}


function setImage(url) {
    let img = document.createElement("img")
    img.setAttribute("src", url)
    img.setAttribute('alt', 'na')
    img.setAttribute("height", "35%")
    img.setAttribute("width", "auto")

    return img
}

function swapFullscreen() {
    el = document.getElementById("fullscreen")
    
    if (el.textContent == "Fullscreen : off") {
        openFullscreen()
        el.textContent = "Fullscreen : on";
    }
    
    else {
        closeFullscreen()
        el.textContent = "Fullscreen : off"
    }
}

class Mob {
    constructor(id) { /*penser à mettre une variable image*/
        this.id = id
        if (id == 1) {
            this.name = "Creeper"
            this.type = "Creeper"
            //this.url = "https://m.media-amazon.com/images/I/71gxSPpUmVL._AC_SX522_.jpg"
            this.url = "./img/mob/Creeper.png"
        }

        else if (id == 2) {
            this.name = "Squelette"
            this.type = "Squelette"
            this.url = "./img/mob/Squelette.png"
        }

        else if (id == 3) {
            this.name = "Zombi"
            this.type = "Zombi"
            this.url = "./img/mob/Zombi.png"
        }
    }    
}

/*Fullscreen*/
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
