# Install OpenSSL
# choco install OpenSSL.Light

openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -sha256 -days 3650 -nodes -subj '/CN=localhost'
