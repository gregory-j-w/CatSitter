import { SitterPage } from './app.po';

describe('sitter App', () => {
  let page: SitterPage;

  beforeEach(() => {
    page = new SitterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
