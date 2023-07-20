


var web = []
var sitName = document.getElementById("SiteName")
var SiteURL = document.getElementById("SiteURL")



var pattern = /[A-Za-z0-9]/
var reg2 = /(www.[a-z0-9]|[a-z0-9].com)/


function validatoin(name, ahmed) {
    if (ahmed.test(name)) {
        return true
    } else {
        return false
    }

}
cheakLocail()
function addSite() {
    var sit = {
        name: sitName.value,
        site: SiteURL.value
    }
    if (validatoin(sit.name, pattern )&& validatoin(sit.site, reg2 ))
     { web.push(sit) } 
     else { window.alert(" the Name must be at lest 3 latter and the site must be url")}


    clear()
    display()
}


function clear() {
    sitName.value = ""
    SiteURL.value = ""
}

function display() {
    var cartona = ""

    for (var i = 0; i < web.length; i++) {

        cartona +=
            `
    <tr>
    <td>${i}</td>
    <td>${web[i].name}</td>
    <td><button type="button" class="btn btn-warning text-white"><i class="fa-solid fa-eye"></i> Visit</button></td>
    <td><button type="button" onclick='delet(${i})' class="btn btn-danger text-white"><i class="fa-solid fa-trash"></i> Delet</button></td>
    </tr>
    `

    }


    document.getElementById("tbody").innerHTML = cartona
}

function upDate() {
    localStorage.setItem("Web", JSON.stringify(web))
    display()

}


function cheakLocail() {

    if (localStorage.getItem("Web") != null) {
        web = JSON.parse(localStorage.getItem("Web"))

    }
    display()
}




function delet(index) {
    web.splice(index, 1)
    upDate()
}

// function link(String) {
// window.open(`https://${String}`)
// }