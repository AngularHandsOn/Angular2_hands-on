import { HelloAngularPage } from './app.po';

describe('hello-angular App', () => {
  let page: HelloAngularPage;

  beforeEach(() => {
    page = new HelloAngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
