
/* 
  CREER PAR DAMIEN LE BRAVE
*/

import "./QRcode.css";
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRgenerator() {

  const [InputURL, addInputURL] = useState('');
  const [qrCode, addqrCode] = useState('');

  // Generation du QR Code
  const generateQRCode = () => {
    addqrCode(InputURL);
  }

  // Téléchargement du QR Code
  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrURL')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let qrURL = document.createElement("a");
    qrURL.href = qrCodeURL;
    qrURL.download = "QR_Code.png";
    document.body.appendChild(qrURL);
    qrURL.click();
    document.body.removeChild(qrURL);
  }

  return (
    <div className="Container-qr">
      <h3>Créer mon QRCODE</h3>
      <div className="qr-input">
        <input
          id="input-URL"
          type="text"
          placeholder="Entrer L'url"
          value={InputURL}
          onChange={e => addInputURL(e.target.value)}
        />
        <input
          id="btn-generateQRCode"
          type="button"
          value="Generate"
          onClick={generateQRCode}
        />
      </div>
      <QRCode
        id="qrURL"
        size={150}
        value={qrCode}
      />
      <br />
      <input
        type="button"
        className="download-btn"
        value="Download"
        onClick={downloadQRCode}
      />
    </div>
  );
}

export default QRgenerator;
