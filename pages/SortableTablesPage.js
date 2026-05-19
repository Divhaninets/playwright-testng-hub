class SortableTablesPage {
  constructor(page) {
    this.page = page;
    this.table1 = page.locator('#table1');
    this.table2 = page.locator('#table2');
  }

  async navigateTo() {
    await this.page.goto('/tables');
  }

  async getTable1Rows() {
    return await this.table1.locator('tbody tr').all();
  }

  async getTable1CellValue(rowIndex, colIndex) {
    const rows = await this.getTable1Rows();
    const cells = await rows[rowIndex].locator('td').all();
    return await cells[colIndex].textContent();
  }

  async getTable1ColumnValues(colIndex) {
    const rows = await this.getTable1Rows();
    const values = [];
    for (const row of rows) {
      const cells = await row.locator('td').all();
      values.push(await cells[colIndex].textContent());
    }
    return values;
  }

  async clickTable2Header(headerText) {
    await this.table2.locator(`th:has-text("${headerText}")`).click();
  }

  async getTable2FirstRowCellValue(colIndex) {
    const firstRow = this.table2.locator('tbody tr').first();
    const cells = await firstRow.locator('td').all();
    return await cells[colIndex].textContent();
  }
}

module.exports = SortableTablesPage;