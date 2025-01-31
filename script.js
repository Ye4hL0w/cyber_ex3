document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;
    
    const temp = document.createElement('template');
    temp.innerHTML = `
        <div class="comment">
            <strong>${name}</strong>
            <p>${commentText}</p>
        </div>
    `.trim();
    
    document.getElementById('comments-list')
        .appendChild(temp.content.firstElementChild);
    
    this.reset();
}); 