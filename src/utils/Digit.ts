export class Digit {
  min: number;
  max: number;
  value: number;

  constructor(min: number, max: number, value: number) {
    this.min = min;
    this.max = max;
    this.value = value;
  }

  public set(value: number) {
    this.value = value;

    if (value > this.max) this.value = this.max;
    if (value < this.min) this.value = this.min;
  }

  public get() {
    return this.value;
  }

  public hex() {
    const v = this.value.toString(16);

    return v.length === 1 ? `0${v}` : v;
  }
}
