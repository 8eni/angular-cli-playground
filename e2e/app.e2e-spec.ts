import { AngularBetaPage } from './app.po';

describe('angular-beta App', () => {
  let page: AngularBetaPage;

  beforeEach(() => {
    page = new AngularBetaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
