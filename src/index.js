import "./styles.css";

document.getElementById("app").innerHTML = `
<h1 id="titlu">Tabla înmulțirii</h1>
<p>
  Tabla înmulțirii cu <input size="3" id="nr" /><br />
  <button id="calcul">Afișează!</button>
</p>
<p id="tabla"></p>
`;

const calculTabla = () => {
  const n = document.querySelector("#nr").value;
  let rez = "";
  for (let i = 1; i <= 10; i++) {
    rez += `${n} x ${i} = ${n * i}<br>`;
  }
  document.querySelector("#tabla").innerHTML = rez;
  document.querySelector("#titlu").innerHTML = `Tabla înmulțirii cu ${n}`;
};

document.querySelector("#calcul").onclick = calculTabla;
