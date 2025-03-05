import React from 'react'
import BarcodeReader from 'react-barcode-reader'

function BarcodeScanner({ onScan }) {
  const handleScan = data => {
    if (data) onScan(data)
  }

  const handleError = err => {
    console.error(err)
  }

  return (
    <div>
      <h3>Scan Barcode</h3>
      <BarcodeReader onError={handleError} onScan={handleScan} />
    </div>
  )
}

export default BarcodeScanner