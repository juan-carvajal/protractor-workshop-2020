import { $, ElementFinder } from 'protractor';

export class SummaryStep {
  private toCheckout: ElementFinder;

  constructor () {
    this.toCheckout = $('.cart_navigation span');
  }

  public async toSignin(): Promise<void> {
    await this.toCheckout.click();
  }
}
