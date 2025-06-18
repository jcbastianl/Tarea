document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const iconShow = document.getElementById('icon-eye-show');
    const iconHide = document.getElementById('icon-eye-hide');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            // Cambia el tipo de input
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Cambia el icono visible
            iconShow.classList.toggle('hidden');
            iconHide.classList.toggle('hidden');
        });
    }
});
