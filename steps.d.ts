/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type LoginPage = typeof import('./pages/LoginPage.js');
type clearPage = typeof import('clear');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, LoginPage: LoginPage, clearPage: clearPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
