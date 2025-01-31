document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;
    
    // La vulnérabilité est ici : le commentaire est inséré directement dans le DOM
    // sans échappement approprié des caractères spéciaux
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = `
        <strong>${name}</strong>
        <p>${commentText}</p>
    `;
    
    document.getElementById('comments-list').appendChild(commentDiv);
    
    // Reset form
    this.reset();
}); 