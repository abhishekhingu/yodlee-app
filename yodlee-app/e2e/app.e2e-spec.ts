import { YodleeAppPage } from './app.po';

describe('yodlee-app App', () => {
  let page: YodleeAppPage;

  beforeEach(() => {
    page = new YodleeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
