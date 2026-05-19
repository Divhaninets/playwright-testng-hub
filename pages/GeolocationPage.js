class GeolocationPage {
  constructor(page) {
    this.page = page;
    this.whereAmIButton = page.locator('button:has-text("Where am I?")');
    this.latitudeElement = page.locator('#lat-value');
    this.longitudeElement = page.locator('#long-value');
  }

  async navigateTo() {
    await this.page.goto('/geolocation');
  }

  async clickWhereAmI() {
    await this.whereAmIButton.click();
  }

  async getLatitude() {
    return await this.latitudeElement.textContent();
  }

  async getLongitude() {
    return await this.longitudeElement.textContent();
  }
}

module.exports = GeolocationPage;