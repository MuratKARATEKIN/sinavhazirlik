const fs = require('fs');
const ExcelJS = require('exceljs');

// Excel dosyasının yolunu belirtin
const excelFilePath = 'PTE.xlsx';

// Yeni bir çalışma kitabı oluşturun
const workbook = new ExcelJS.Workbook();

// Excel dosyasını okuyun
workbook.xlsx.readFile(excelFilePath)
  .then(() => {
    const worksheet = workbook.getWorksheet(1); // İlk sayfa
    const jsonData = [];

    // Verileri JSON formatına dönüştürün
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber !== 1) { // Başlık satırını atla
        const rowData = {};
        row.eachCell((cell, colNumber) => {
          rowData[worksheet.getCell(1, colNumber).value] = cell.value;
        });
        jsonData.push(rowData);
      }
    });

    // JSON verisini bir dosyaya kaydedin
    const jsonFilePath = 'PTE.json';
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
    console.log(`Veriler "${jsonFilePath}" dosyasına kaydedildi.`);
  })
  .catch((err) => {
    console.error('Hata:', err);
  });
