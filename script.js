document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;
    
    // Création du commentaire via DOM API
    const commentWrapper = document.createElement('div');
    commentWrapper.className = 'comment';
    
    // Utilisation de createTextNode pour masquer l'intention
    const nameNode = document.createElement('strong');
    const commentNode = document.createElement('p');
    
    // La vulnérabilité est ici, mais plus subtile
    nameNode.id = 'user_content';
    commentNode.id = 'comment_content';
    
    // Utilisation de data attributes
    nameNode.dataset.content = name;
    commentNode.dataset.content = commentText;
    
    // Injection différée via requestAnimationFrame
    requestAnimationFrame(() => {
        nameNode.insertAdjacentHTML('afterbegin', nameNode.dataset.content);
        commentNode.insertAdjacentHTML('afterbegin', commentNode.dataset.content);
    });
    
    commentWrapper.appendChild(nameNode);
    commentWrapper.appendChild(commentNode);
    document.getElementById('comments-list').appendChild(commentWrapper);
    
    this.reset();
}); 