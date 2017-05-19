import { EmotionsPage } from './app.po';

describe('emotions App', function() {
  let page: EmotionsPage;

  beforeEach(() => {
    page = new EmotionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
