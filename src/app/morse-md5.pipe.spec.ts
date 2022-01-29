import { MorseMD5Pipe } from './morse-md5.pipe';

describe('MorseMD5Pipe', () => {
  it('create an instance', () => {
    const pipe = new MorseMD5Pipe();
    expect(pipe).toBeTruthy();
  });
});
