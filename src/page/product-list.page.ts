import { $, ElementFinder } from 'protractor';

export class ProductPage {
  private addToCartButton: ElementFinder;

  constructor () {
    this.addToCartButton = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async openAddModal(): Promise<void> {
    await this.addToCartButton.click();
  }
}