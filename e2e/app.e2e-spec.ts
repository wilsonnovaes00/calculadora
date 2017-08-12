import { OlaMundoPage } from './app.po';

describe('ola-mundo App', () => {
  let page: OlaMundoPage;

  beforeEach(() => {
    page = new OlaMundoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
