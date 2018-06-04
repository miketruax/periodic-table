import { PeriodicTablePage } from './app.po';

describe('periodic-table App', () => {
  let page: PeriodicTablePage;

  beforeEach(() => {
    page = new PeriodicTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
