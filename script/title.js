// 标题悬停变色        
document.querySelectorAll('.char').forEach(char => {
    char.addEventListener('mouseover', function() {
        this.style.color = '#FF6347'; // Hover color
    });

    char.addEventListener('mouseout', function() {
        this.style.color = 'white'; // Revert to white with delay
        setTimeout(() => {
            this.style.transition = 'color 1s ease-out';
            this.style.color = 'white';
        }, 0);
    });
});