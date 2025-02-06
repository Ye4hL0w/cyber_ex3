document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;
    
    const commentWrapper = document.createElement('div');
    commentWrapper.className = 'comment';
    
    const nameNode = document.createElement('strong');
    const commentNode = document.createElement('p');
    
    nameNode.id = 'user_content';
    commentNode.id = 'comment_content';
    
    // Attention : La vulnérabilité ici est que les entrées de
    // l'utilisateur ne sont pas échappées, ce qui permet une attaque XSS.
    nameNode.dataset.content = name;
    commentNode.dataset.content = commentText;
    
    requestAnimationFrame(() => {
        nameNode.insertAdjacentHTML('afterbegin', nameNode.dataset.content);
        commentNode.insertAdjacentHTML('afterbegin', commentNode.dataset.content);
    });
    
    commentWrapper.appendChild(nameNode);
    commentWrapper.appendChild(commentNode);
    document.getElementById('comments-list').appendChild(commentWrapper);
    
    this.reset();
}); 