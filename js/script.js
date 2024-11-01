let chave = "Nome 1";
let chave2 = "Email 1";
let i = 0;
 
function ArmazenaDados()
{
    localStorage.setItem(chave, document.getElementById("nome").value);
    localStorage.setItem(chave2, document.getElementById("email").value);
    LimparCampos();
}
 
function ConsultaDados()
{
    document.getElementById("resultado").innerHTML = localStorage.getItem(chave) + " - " +
    localStorage.getItem(chave2);
}
 
function AtualizarDados()
{
    localStorage.setItem(chave, document.getElementById("nome").value);
    localStorage.setItem(chave2, document.getElementById("email").value);
    LimparCampos();
}

 
function LimparCampos()
{
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

}

function InsertData()
{
i=i + 1;
localStorage.setItem("nome" + i,document.getElementById("nome").value);
localStorage.setItem("email" + i,document.getElementById("email").value);
LimparCampos();
}

function ViewDAta()
{
    let resultado = "";
     for(let indice = 1; indice <= i; indice ++)
     {
        if(localStorage.getItem("nome" + indice) == null || localStorage.getItem("nome" + indice) == "")
        {}else
        {
        resultado +=localStorage.getItem("nome" + indice) +"  - " + localStorage.getItem("email" + indice ) + "<br>";
        alert(localStorage.getItem("nome" + indice));
        }
     }
     document.getElementById("resultado").innerHTML = "Resultados: <br>"+resultado;
}

function DelateData()
{
localStorage.removeItem("nome" + document.getElementById("indice").value);
localStorage.removeItem("email" + document.getElementById("indice").value);
document,getElementById("indice").value = "";
}