describe('blego.log', () => {
  const stripAnsi = require('strip-ansi');
  const Blego = require('Blego.js');
  let blego;
  let consoleLog;

  beforeEach(() => {
    console.log = consoleLog = jest.fn();
    blego = new Blego();
  });

  it('Writes to console', () => {
    blego.log('message');

    expect(stripAnsi(consoleLog.mock.calls.pop().pop())).toEqual('message');
  });
});
