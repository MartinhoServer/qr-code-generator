body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f4f8;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background: #ffffff;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 90%;
    max-width: 400px;
    margin: auto;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
}

input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
}

button {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    transition: background-color 0.3s ease;
}

button:hover {
    background: #0056b3;
}

.qrcode-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.qrcode-container::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ff0000);
    background-size: 600% 600%;
    animation: rgb-glow 10s linear infinite;
    padding: 15px;
    border-radius: 12px;
    z-index: -1;
}

@keyframes rgb-glow {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
