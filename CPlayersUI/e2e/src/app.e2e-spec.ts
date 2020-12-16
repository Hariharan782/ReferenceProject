import { AppPage } from './app.po';
import { browser, by, element,protractor} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    browser.driver.sleep(1000);
    expect(browser.getTitle()).toEqual('CPlayersUI');
});



});
