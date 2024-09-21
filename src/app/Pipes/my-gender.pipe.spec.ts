import { MyGenderPipe } from './my-gender.pipe';

describe('MyGenderPipe', () => {
  it('create an instance', () => {
    const pipe = new MyGenderPipe();
    expect(pipe).toBeTruthy();
  });
});
