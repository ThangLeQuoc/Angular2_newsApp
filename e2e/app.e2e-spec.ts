import { Angular2NewsAppPage } from './app.po';

describe('angular2-news-app App', function() {
  let page: Angular2NewsAppPage;

  beforeEach(() => {
    page = new Angular2NewsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
