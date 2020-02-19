import { PhoneNumberFormattingPipe } from './phone-number-formatting.pipe';

describe('PhoneNumberFormattingPipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneNumberFormattingPipe();
    expect(pipe).toBeTruthy();
  });
});
