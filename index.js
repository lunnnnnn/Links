
const urlInput = document.getElementById('urlInput');
const generateButton = document.getElementById('generateButton');
const qrCodeImage = document.getElementById('qrCodeImage');

generateButton.addEventListener('click', () => {
  const url = urlInput.value;
    // Create a new QRCode instance
    const qrCode = new QRCode(qrCodeImage, {
        text: url,
        width: 128,
        height: 128,
    });
});