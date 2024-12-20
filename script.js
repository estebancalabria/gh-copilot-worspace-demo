let contador = 0;

document.getElementById("incrementar").addEventListener("click", () => {
    contador++;
    document.getElementById("contador").textContent = contador;
});

document.getElementById("decrementar").addEventListener("click", () => {
    contador--;
    document.getElementById("contador").textContent = contador;
});
