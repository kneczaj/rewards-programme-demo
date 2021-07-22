import { getPoints } from "./data-provider";

describe('getPoints', () => {
  it('properly computes points over 100', () => {
    expect(getPoints(120)).toEqual(90);
    expect(getPoints(130)).toEqual(110);
  });
  it('properly computes points between 50 and 100', () => {
    expect(getPoints(90)).toEqual(40);
    expect(getPoints(80)).toEqual(30);
  });
  it('returns 0 when amount lower equal 50', () => {
    expect(getPoints(50)).toEqual(0);
    expect(getPoints(30)).toEqual(0);
    expect(getPoints(0)).toEqual(0);
  });
});
