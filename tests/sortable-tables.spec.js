const { test, expect } = require('@playwright/test');
const SortableTablesPage = require('../pages/SortableTablesPage');

test.describe('Sortable Tables Tests', () => {
  let tablesPage;

  test.beforeEach(async ({ page }) => {
    tablesPage = new SortableTablesPage(page);
    await tablesPage.navigateTo();
  });

  test('table has correct number of rows', async () => {
    const rows = await tablesPage.getTable1Rows();
    expect(rows.length).toBe(4);
  });

  test('can get specific cell value', async () => {
    const cellValue = await tablesPage.getTable1CellValue(0, 0);
    expect(cellValue).toBe('Smith');
  });

  test('can get column values', async () => {
    const emails = await tablesPage.getTable1ColumnValues(2);
    expect(emails.length).toBe(4);
    expect(emails).toContain('jsmith@gmail.com');
  });

  test('can sort table 2 by last name', async () => {
    await tablesPage.clickTable2Header('Last Name');
    const firstLastName = await tablesPage.getTable2FirstRowCellValue(0);
    expect(firstLastName).toBe('Bach');
  });
});