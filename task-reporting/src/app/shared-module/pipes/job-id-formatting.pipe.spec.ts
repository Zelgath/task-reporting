import { JobIdFormattingPipe } from './job-id-formatting.pipe';

describe('JobIdFormattingPipe', () => {
  it('create an instance', () => {
    const pipe = new JobIdFormattingPipe();
    expect(pipe).toBeTruthy();
  });
});
