import { MyAngular2ProjectPage } from './app.po';

describe('my-angular2-project App', function() {
  let page: MyAngular2ProjectPage;

  beforeEach(() => {
    page = new MyAngular2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
