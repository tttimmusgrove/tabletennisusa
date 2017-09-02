import { TabletennisusaPage } from './app.po';

describe('tabletennisusa App', () => {
  let page: TabletennisusaPage;

  beforeEach(() => {
    page = new TabletennisusaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
