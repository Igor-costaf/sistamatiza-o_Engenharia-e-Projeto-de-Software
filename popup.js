// Função para salvar a anotação no armazenamento local do navegador
document.getElementById('saveButton').addEventListener('click', function() {
    const note = document.getElementById('noteField').value;
    
    // Armazenar a nota localmente
    chrome.storage.local.set({ 'note': note }, function() {
        // Exibir mensagem de sucesso
        const message = document.getElementById('message');
        message.textContent = 'Nota salva!';
        message.style.display = 'block';

        // Ocultar a mensagem após 2 segundos
        setTimeout(function() {
            message.style.display = 'none';
        }, 2000);
    });
});

// Recuperar a nota salva ao carregar a extensão
window.onload = function() {
    chrome.storage.local.get('note', function(result) {
        if (result.note) {
            document.getElementById('noteField').value = result.note;
        }
    });
};

