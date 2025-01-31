FROM nginx:alpine

# Copier les fichiers du site web
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/

# Configuration pour permettre l'interception par Burp
EXPOSE 80 