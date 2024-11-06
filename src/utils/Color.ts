import { Digit } from './Digit';

export const RANGE_MIN_LIMIT = 0;
export const RANGE_MAX_LIMIT = 255;

export class Color {
  private r: Digit;
  private g: Digit;
  private b: Digit;
  private a: Digit;

  constructor(r = 0, g = 0, b = 0, a = 1) {
    this.r = new Digit(RANGE_MIN_LIMIT, RANGE_MAX_LIMIT, r);
    this.g = new Digit(RANGE_MIN_LIMIT, RANGE_MAX_LIMIT, g);
    this.b = new Digit(RANGE_MIN_LIMIT, RANGE_MAX_LIMIT, b);
    this.a = new Digit(0, 1, a);
  }

  public parse(color: string) {
    const [r, g, b, a] = color.replace(/[a-z\s\(\)]/g, '').split(',');

    return new Color(Number(r), Number(g), Number(b), Number(a));
  }

  public alpha(a: number) {
    this.a.set(a);

    return this;
  }

  public copy() {
    return new Color(this.r.get(), this.g.get(), this.b.get(), this.a.get());
  }

  public randomAlpha() {
    this.a.set(Math.ceil(Math.random() * 100) / 100);

    return this;
  }

  public random() {
    this.r.set(Math.ceil(RANGE_MAX_LIMIT * Math.random()));
    this.g.set(Math.ceil(RANGE_MAX_LIMIT * Math.random()));
    this.b.set(Math.ceil(RANGE_MAX_LIMIT * Math.random()));

    return this;
  }

  public toString() {
    return `rgba(${this.r.get()}, ${this.g.get()}, ${this.b.get()}, ${this.a.get()})`;
  }

  public hex() {
    return `#${this.r.hex()}${this.g.hex()}${this.b.hex()}`;
  }
}
