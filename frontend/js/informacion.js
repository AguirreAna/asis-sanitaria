// <!-- Script del chat de consulta -->
    
        const chatToggleBtn = document.getElementById('chatToggleBtn');
        const chatWindow = document.getElementById('chatWindow');
        const chatCloseBtn = document.getElementById('chatCloseBtn');
        const chatForm = document.getElementById('chatForm');
        const chatInput = document.getElementById('chatInput');
        const chatBody = document.getElementById('chatBody');

        const respuestas = [
            "Gracias por tu mensaje. Uno de nuestros asesores revisará tu consulta y te contactará a la brevedad.",
            "Con gusto te ayudamos con eso. Si prefieres una respuesta más rápida, escríbenos por WhatsApp usando el ícono del encabezado.",
            "Entendido, tomamos nota de tu consulta. Mientras tanto, puedes revisar nuestra sección de Información para más detalles."
        ];

        function openChat() {
            chatWindow.classList.remove('d-none');
            chatToggleBtn.classList.add('d-none');
            chatInput.focus();
        }

        function closeChat() {
            chatWindow.classList.add('d-none');
            chatToggleBtn.classList.remove('d-none');
        }

        function addMessage(text, sender) {
            const msg = document.createElement('div');
            msg.className = 'chat-msg ' + (sender === 'user' ? 'chat-msg-user' : 'chat-msg-bot');
            msg.textContent = text;
            chatBody.appendChild(msg);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        chatToggleBtn.addEventListener('click', openChat);
        chatCloseBtn.addEventListener('click', closeChat);

        chatForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const texto = chatInput.value.trim();
            if (!texto) return;

            addMessage(texto, 'user');
            chatInput.value = '';

            setTimeout(function () {
                const respuesta = respuestas[Math.floor(Math.random() * respuestas.length)];
                addMessage(respuesta, 'bot');
            }, 700);
        });