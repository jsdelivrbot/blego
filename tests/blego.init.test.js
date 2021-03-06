describe('blego.init', () => {
  const Blego = require('Blego.js');
  let blego;

  beforeEach(() => {
    console.log = jest.fn();
    blego = new Blego();
    blego.tasks.setCoreMacros = jest.fn();
    blego.tasks.loadGlobals = jest.fn();
    blego.tasks.loadPartials = jest.fn();
    blego.tasks.loadData = jest.fn();
    blego.tasks.cleanUp = jest.fn();
    blego.tasks.copyStatic = jest.fn();
  });

  it('Runs common tasks', () => {
    blego.init();

    expect(blego.tasks.setCoreMacros).toHaveBeenCalled();
    expect(blego.tasks.loadGlobals).toHaveBeenCalled();
    expect(blego.tasks.loadPartials).toHaveBeenCalled();
    expect(blego.tasks.loadData).toHaveBeenCalled();
    expect(blego.tasks.cleanUp).toHaveBeenCalled();
    expect(blego.tasks.copyStatic).toHaveBeenCalled();
  });
});
