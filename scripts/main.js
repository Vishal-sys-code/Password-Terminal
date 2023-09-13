const app = document.querySelector("#app");
const delay = ms => new Promise(res=>setTimeout(res, ms));



app.addEventListener("keypress", async function(event){
    if(event.key=== "Enter"){
        await delay(150);
        getInputValue();

        removeInput();
        await delay(150);
        new_line();
    }
})

app.addEventListener("click",function(event){
    const input = document.querySelector("input");
    input.focus();
})


async function open_terminal(){
    createText("Welcome to Password Manager Terminal");
    await delay(300);
    createText("READ BEFORE YOU PROCEED");
    await delay(700);

    // createCode ("help","For Help");
    // createCode ("about","Details of XShell");
    createCode ("all","To see all the commands");
    // createCode ("clear","To clear the terminal");

    await delay(500);
    new_line();
}


function new_line(){

    const p = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    p.setAttribute("class","path")
    p.textContent = "root@";
    span1.textContent = "pmt-3301";
    span2.textContent = ":~$";
    p.appendChild(span1);
    p.appendChild(span2);
    app.appendChild(p);
    const div = document.createElement("div");
    div.setAttribute("class","type")
    const i = document.createElement("i");
    i.setAttribute("class","fas fa-dollar-sign icone")
    const input = document.createElement("input");
    div.appendChild(i);
    div.appendChild(input);
    app.appendChild(div);
    input.focus();

}

function removeInput(){
    const div = document.querySelector(".type");
    app.removeChild(div);
}

async function getInputValue(){
    const value = document.querySelector("input").value;
    if(value === "all"){
        trueValue(value);
        createCode("help","For Help")
        createCode("about","Details of XShell")
        createCode("clear","To clear the terminal")
        createCode("server-info","Details of all the servers")
        createCode("server-ps","Showing all the passwords of the servers")
        createCode("pc-info","Showing the PC information ")
        createCode("pc-ps","Showing the passwords of the PC users in IT")
        createCode("email-ps","Showing the passwords of the email used in IT")
        createCode("camera-ip","Showing the NVR of Sakharnagar and Weigh Bridge")
        createCode("pan-details","Showing the PAN details of the Madam and CCEL")
    }
    else if(value === "about"){
        trueValue(value);
        createText("password manager terminal")
        createText("description: Web Based Password Manager")
        createText("version: 1.0")
        createText("width: x64 bits")
        createText("configuration: boot=normal chassis=laptop/PC family=103C_5336AN")
        createText("Package: 3.0")
        createText("Creator: Vishal Pandey")
        createText("Common License: GNU Gerneral Public License")
        createText("General Repo License: MIT")
    }
    else if(value === "help"){
        trueValue(value);
        createText("GNU xdart 1.0, a non interative network retriever")
        createText("Usage: These Shell commands are defined internally.")
        // createText("Type 'help-bash' to find the general commands for pmt")
        // createText("Here are the list of the commands below: ")
        // createText("Unfortunately this terminal is in repair.........We are sorry for that")
        createText("type `server` to get all the server passwords")
    }
    else if(value === "clear"){
        document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
        document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    }
    else if(value === "server-info"){
        trueValue(value);
        createText("192.168.0.123 : Manual Server Backup")
        createText("192.168.0.252 : Busy Server")
        createText("192.168.0.254 : Old Data SQL Server")
        createText("192.168.0.248 : DB Server")
        createText("192.168.0.249 : Farvision Server")
        createText("192.168.0.246 : Weigh-Bridge Server")
        createText("192.168.0.247 : Ware-House Server")
        createText("192.168.0.199 : Domain Control Server")
        createText("192.168.0.198 : Nas0")
        createText("192.168.0.250 : Tally Server")
        createText("192.168.0.204 : RDWeb Server")
        createText("192.168.0.201 : AV Server")
    }
    else if(value === "server-ps"){
        trueValue(value);
        createText("192.168.0.123 : Bkpsrv$%ccel%")
        createText("192.168.0.252 : Busy$%fb2r%")
        createText("192.168.0.254 : ts0\administrator | Fvdb$%ccel%")
        createText("192.168.0.248 : FVDB/administrator | Admin@1234")
        createText("192.168.0.249 : FVAPP/administrator | Admin@1234")
        createText("192.168.0.246 : WBGSRV/administrator | wbgsrv$%ccel%")
        createText("192.168.0.247 : FVWH/administrator | ccel$%Fvwh%")
        createText("192.168.0.199 : cube/administrator | ccel$%dcapp%")
        createText("192.168.0.198 : cube/administrator | ccel$%dcapp%")
        createText("192.168.0.250 : ts0/administrator | tallysrv$%fb2r%")
        createText("192.168.0.204 : cube/administrator | ccel$%dcapp%")
        createText("192.168.0.201 : ts0/administrator | qhav$%fb2r%")
        createText("192.168.0.221 : czih/admin | goF$%ccel%")
    }
    else if(value === "pc-info"){
        trueValue(value);
        createText("IT Department : Tahir, Karan")
        createText("Admin : Jayesh")
    }
    else if(value === "pc-ps"){
        trueValue(value);
        createText("IT Department : it$%de2p%")
        createText("Admin : 12345")
    }
    else if(value === "email-ps"){
        trueValue(value);
        createText("IT Department : it$%de2p%")
        createText("info : 01012001")
    }
    else if(value === "camera-ip"){
        trueValue(value);
        createText("-----------------------------")
        createText("SAHKARNAGAR IP CAMERA")
        createText("NVR: 192.168.1.150")
        createText("Username: admin")
        createText("Password: ADMIN@123")
        createText("-----------------------------")
        createText("WEIGH BRIDGE IP CAMERA")
        createText("NVR: 192.168.1.65")
        createText("NVR: 192.168.1.66")
        createText("NVR: 192.168.1.67")
        createText("-----------------------------")
    }
    else if(value === "pan-details"){
        trueValue(value);
        createText("CCEL Pan Number: AACCC8103D")
        createText("Madam Pan Number : AGAPS7389E")
    }
    else{
        falseValue(value);
        createText(`command not found: ${value}`)
    }
}

    
    function trueValue(value){
        const div = document.createElement("section");
        div.setAttribute("class","type2")
        const i = document.createElement("i");
        i.setAttribute("class","fas fa-angle-right icone")
        const mensagem = document.createElement("h2");
        mensagem.setAttribute("class","success")
        mensagem.textContent = `${value}`;
        div.appendChild(i);
        div.appendChild(mensagem);
        app.appendChild(div);
    }

    function falseValue(value){
        const div = document.createElement("section");
        div.setAttribute("class","type2")
        const i = document.createElement("i");
        i.setAttribute("class","fas fa-angle-righticone error")
        const mensagem = document.createElement("h2");
        mensagem.setAttribute("class","error")
        mensagem.textContent = `${value}`;
        div.appendChild(i);
        div.appendChild(mensagem);
        app.appendChild(div);
    }

    function createText(text, classroom){
        const p = document.createElement("p");
        p.innerHTML = text;
        app.appendChild(p);
    }

    function createCode(code,text){
        const p = document.createElement("p");
        p.setAttribute("class","code");
        p.innerHTML = `${code}<br/><span class="text">${text}</span>`;
        app.appendChild(p);
    }

open_terminal();