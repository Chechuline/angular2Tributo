import { RollingKubidePage } from './app.po';

describe('rolling-kubide App', () => {
  let page: RollingKubidePage;

  beforeEach(() => {
    page = new RollingKubidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
