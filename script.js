function toggleChat() {
    const chat = document.getElementById('chatWindow');
    if (chat) {
        chat.style.display = (chat.style.display === 'block') ? 'none' : 'block';
    }
}

function enviarPregunta() {
    const input = document.getElementById('inputUsuario');
    const mensaje = input.value.trim();
    const chatBody = document.getElementById('chatBody');

    if (!mensaje) return;

    chatBody.innerHTML += `<div class="user-msg">${mensaje}</div>`;
    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    const loadingId = `loading-${Date.now()}`;
    chatBody.innerHTML += `<div class="bot-msg" id="${loadingId}">...</div>`;

    setTimeout(() => {
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) {
            loadingElement.innerHTML = "Gracias por contactarnos. Un representante te atenderá a la brevedad.";
        }
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

document.getElementById('inputUsuario').addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        enviarPregunta();
    }
});