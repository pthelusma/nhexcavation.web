import { NhexcavationPage } from './app.po';

describe('nhexcavation App', function() {
  let page: NhexcavationPage;

  beforeEach(() => {
    page = new NhexcavationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
