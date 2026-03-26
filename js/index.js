document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('npt_mensaje').addEventListener('keyup', function () {
        let input = document.getElementById('npt_mensaje');
        let longitud = input.value.length;
        let max = input.getAttribute('maxlength');
        input.className = longitud > max ? 'red-text' : '';
        document.getElementById('aux_mensaje').innerText = `${longitud}/${max}`;
    });
    setTimeout(() => {
        document.getElementById('btn_').disabled = false;
    }, 3000);
    document.getElementById('contactForm').addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const response = await fetch('post.php', {
            method: 'POST',
            body: formData,
        });

        this.elements.btn_.innerText = 'Enviando...';

        const result = await response.json();
        if (result.success) {
            this.elements.btn_.parentNode.innerHTML = `<span class="alert">${result.message}</span>`;
        } else {
            alert('Error: ' + result.message);
        }
    });
});
