function mostrarEdad() {
    document.getElementById("modalEdad").style.display = "flex";
}

function menorEdad() {
    alert("Debes ser mayor de 18 años para entrar en Solaris RP.");
    window.location.href = "index.html";
}

function mayorEdad() {
    window.location.href = "whitelist.html";
}

function alertaWhitelist() {
    setTimeout(() => {
        alert("Para aprobar la whitelist no puedes tener más de 2 fallos. En caso de usar IA, hacer trampas o que consideremos que no tienes el nivel necesario de rol, la whitelist podrá rechazarse permanentemente.");
    }, 3000);
}

document.getElementById("whitelistForm")?.addEventListener("submit", async function(e){
    e.preventDefault();

    const formData = new FormData(this);

    try {
        const response = await fetch("https://solaris-backend-7rry.onrender.com/enviar-whitelist", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if(data.success){
            alert("Whitelist enviada correctamente.");
            window.location.href = "index.html";
        } else {
            alert("Error al enviar la whitelist.");
        }

    } catch (error) {
        alert("Error de conexión con el servidor.");
    }
});