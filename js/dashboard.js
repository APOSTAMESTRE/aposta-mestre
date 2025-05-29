
window.onload = function() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn !== 'true') {
        window.location.href = "login.html";
    }
}
function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = "login.html";
}
