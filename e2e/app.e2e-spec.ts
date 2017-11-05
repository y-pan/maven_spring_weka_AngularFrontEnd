import { WekaApiWebClientPage } from './app.po';

describe('weka-api-web-client App', function() {
  let page: WekaApiWebClientPage;

  beforeEach(() => {
    page = new WekaApiWebClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
