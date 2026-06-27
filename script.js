function entrar(){
let email = document.getElementById("email").value;

if(email.trim() === ""){
alert("Digite seu email");
return;
}

ir("dashboard");
}

// ================= NAV =================
function ir(tela){

let screens = document.querySelectorAll(".screen");

screens.forEach(s => s.classList.remove("active"));

document.getElementById(tela).classList.add("active");
}

// ================= TESTES =================
let perguntas = [
"Lidero bem pessoas",
"Tomo decisões rápidas",
"Assumo riscos",
"Sou disciplinado",
"Tenho criatividade",
"Sou persistente",
"Vejo oportunidades",
"Consigo vender ideias"
];

function montar(){
let html = "";

for(let i=0;i<perguntas.length;i++){
html += `
<p>${perguntas[i]}</p>
<input type="number" min="1" max="5" id="p${i}">
`;
}

document.getElementById("quiz").innerHTML = html;
}

montar();

function resultadoTeste(){

let total = 0;

for(let i=0;i<perguntas.length;i++){
total += Number(document.getElementById("p"+i).value || 0);
}

let nivel = "";

if(total <= 20) nivel = "Iniciante";
else if(total <= 30) nivel = "Intermediário";
else nivel = "Avançado";

document.getElementById("resTeste").innerHTML =
"Perfil: "+nivel+" | Score: "+total;
}

// ================= EMPRESA =================
function salvarEmpresa(){

let nome = document.getElementById("empresaNome").value;
let nicho = document.getElementById("nicho").value;
let capital = document.getElementById("capital").value;

let analise = `
Empresa: ${nome}<br>
Nicho: ${nicho}<br>
Capital: ${capital}<br><br>
<b>Estratégia:</b> Focar em validação de mercado e crescimento inicial.
`;

document.getElementById("resEmpresa").innerHTML = analise;

document.getElementById("analise").innerHTML = analise;
}

// ================= IA INTELIGENTE =================
function ia(){

let q = document.getElementById("iaInput").value.toLowerCase();

let respostas = [
"Analise o mercado antes de investir.",
"Foque em resolver um problema real.",
"Empresas crescem com execução.",
"Venda é mais importante que ideia.",
"Teste antes de escalar."
];

let r = "";

if(q.includes("empresa")){
r = "Toda empresa nasce de um problema real do mercado.";
}
else if(q.includes("dinheiro")){
r = "Dinheiro é consequência de valor entregue.";
}
else if(q.includes("crescer")){
r = "Crescimento vem de consistência.";
}
else{
r = respostas[Math.floor(Math.random()*respostas.length)];
}

document.getElementById("iaRes").innerText = r;
}

// ================= IA TOGGLE =================
function toggleIA(){
let box = document.getElementById("iaBox");

box.style.display = (box.style.display === "block") ? "none" : "block";
}
