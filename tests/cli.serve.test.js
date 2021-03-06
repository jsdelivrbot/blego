describe('cli.serve', () => {
  const mockFs = require('mock-fs');
  const request = require('request-promise');
  const serve = require('cli/serve.js');

  beforeEach(() => {
    console.log = jest.fn();
    mockFs({
      'dist/test.txt': '1',
      'web/test.txt': '2',
    });
  });

  afterEach(() => {
    mockFs.restore();
  });

  it('Serves from default directory', () => {
    return serve(undefined, {port: undefined}).then((server) => {
      return request('http://localhost:3000/test.txt').then((body) => {
        server.close();
        expect(body).toBe('1');
      });
    });
  });

  it('Serves from given directory', () => {
    return serve('web', {port: undefined}).then((server) => {
      return request('http://localhost:3000/test.txt').then((body) => {
        server.close();
        expect(body).toBe('2');
      });
    });
  });

  it('Serves on a given port', () => {
    return serve('web', {port: 1234}).then((server) => {
      return request('http://localhost:1234/test.txt').then((body) => {
        server.close();
        expect(body).toBe('2');
      });
    });
  });
});
