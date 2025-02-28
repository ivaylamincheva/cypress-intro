document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    
    document.querySelector('[data-test-id="login-username-error"]').style.display = username ? 'none' : 'block';
    document.querySelector('[data-test-id="login-password-error"]').style.display = password ? 'none' : 'block';
});
