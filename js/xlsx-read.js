// ExcelJS kütüphanesini yükleyin
const ExcelJS = require('exceljs');

// Excel dosyasını açın
const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('PTE.xlsx')
    .then(() => {
        // Sayfa adını belirtin (örneğin "Sheet1")
        const sheetName = 'Sheet1';

        // Sayfa nesnesini alın
        const sheet = workbook.getWorksheet(sheetName);

        // Sütun sayısını alın
        const numColumns = sheet.columnCount;

        // Her sütunu döngü ile gezin
        for (let i = 1; i <= numColumns; i++) {
            const column = sheet.getColumn(i);
            const columnHeader = column.header;
            console.log(`Sütun ${i}: ${columnHeader}`);
        }
    })
    .catch(err => {
        console.error('Hata oluştu:', err.message);
    });