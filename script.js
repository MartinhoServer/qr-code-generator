// script.js
const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    dotsOptions: {
        color: "#000", // Cor mais escura para melhor contraste
        type: "rounded"
    },
    backgroundOptions: {
        color: "#ffffff" // Fundo branco para garantir contraste
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    }
});

document.getElementById('generate-btn').addEventListener('click', () => {
    let url = document.getElementById('url-input').value.trim();

    // Add "https://" if the link doesn't include it
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    if (url) {
        qrCode.update({
            data: url
        });
        document.getElementById('qrcode').innerHTML = ""; // Clear previous QR code
        qrCode.append(document.getElementById('qrcode'));
    } else {
        alert("Por favor, insira um URL válido.");
    }
});

document.getElementById('download-btn').addEventListener('click', () => {
    qrCode.download({ name: "qr-code", extension: "png" });
});
