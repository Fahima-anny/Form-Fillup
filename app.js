let body = document.body
body.style.display = "flex"
body.style.justifyContent = "start"
body.style.alignItems = "center"
body.style.flexDirection = "column"
body.style.height = "100vh"

document.querySelector("body>h1").style.fontSize = "50px"



document.getElementById("submit").addEventListener("click", function(){

    let ul= document.getElementById("addComment")

    let inp1 = document.getElementById("nameInp")
    let inp2 = document.getElementById("ageInp")
    let inp3 = document.getElementById("phNoInp")
    let inp4 = document.getElementById("emailInp")

    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let li4 = document.createElement("li")
    let li5 = document.createElement("li")

    li1.innerText = `Name      : ${inp1.value} `
    li2.innerText = `Age       : ${inp2.value} `
    li3.innerText = `Phone No. : ${inp3.value} `
    li4.innerText = `Email     : ${inp4.value} `
    li5.innerText = `Form Filled Successfully`

ul.append(li1)
ul.append(li2)
ul.append(li3)
ul.append(li4)
ul.append(li5)

inp1.value = ""
inp2.value = ""
inp3.value = ""
inp4.value = ""

let li = document.getElementsByTagName("li")
    for(x of li){
        x.style.fontSize = "25px"
        x.style.color = "rgb(84, 2, 32)"
        x.style.paddingTop = "10px"
    }
}

)



















