import { CodeBreakerPage } from './app.po';

describe('code-breaker App', () => {
  let page: CodeBreakerPage;

  beforeEach(() => {
    page = new CodeBreakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
