import { $, ElementFinder } from 'protractor';

export class AddedModal {
  private proceed: ElementFinder;

  constructor () {
    this.proceed = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceed.click();
  }
}
