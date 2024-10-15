// script.js
const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    dotsOptions: {
        color: "#000",
        gradient: {
            type: "linear",
            rotation: 0,
            colorStops: [
                { offset: 0, color: "#ff0000" },
                { offset: 0.5, color: "#00ff00" },
                { offset: 1, color: "#0000ff" }
            ]
        },
        type: "rounded"
    },
    backgroundOptions: {
        color: "#ffffff"
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
