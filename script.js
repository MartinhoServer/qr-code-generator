// script.js
const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    dotsOptions: {
        color: "#000000", // Preto para melhor contraste
        type: "square" // Formato simples dos pontos
    },
    backgroundOptions: {
        color: "#ffffff" // Fundo branco
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 10
    }
});

document.getElementById('generate-btn').addEventListener('click', () => {
    let url = document.getElementById('url-input').value.trim();

    // Adiciona "https://" se o link não começar com "http" ou "https"
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    if (url) {
        qrCode.update({
            data: url
        });
        document.getElementById('qrcode').innerHTML = ""; // Limpa o QR code anterior
        qrCode.append(document.getElementById('qrcode'));
    } else {
        alert("Por favor, insira um URL válido.");
    }
});

document.getElementById('download-btn').addEventListener('click', () => {
    qrCode.download({ name: "qr-code", extension: "png" });
});
