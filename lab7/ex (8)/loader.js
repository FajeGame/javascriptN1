document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const progressBar = document.querySelector('.loader-progress');
    const page = document.getElementById('page');
    
    let progress = 0;
    const interval = setInterval(function() {
        progress += 1;
        progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(function() {
                loader.style.display = 'none';
                page.classList.remove('invisible');
                document.querySelector('.progress-indicator').classList.remove('invisible');
            }, 200);
        }
    }, 20); // 20ms * 100 = 2000ms (2 секунды)
});