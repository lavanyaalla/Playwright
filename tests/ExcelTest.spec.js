import ExcelJS from 'exceljs';
import { test, expect } from '@playwright/test';

test('Read Excel file', async () => {

  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('../Utils/ExcelData.xlsx');

  const worksheet = workbook.getWorksheet(1);

  worksheet.eachRow((row, rowNumber) => {
    console.log(`Row ${rowNumber}:`, row.values);
  });

});