export function valueOf() {
  return this._d.valueOf() - (this._offset || 0) * 60000;
}

export function unix() {
  return Math.floor(this.valueOf() / 1000);
}

export function toDate() {
  return new Date(this.valueOf());
}

export function toArray() {
  return [
    this.year(),
    this.month(),
    this.date(),
    this.hour(),
    this.minute(),
    this.second(),
    this.millisecond(),
  ];
}

export function toObject() {
  return {
    years: this.year(),
    months: this.month(),
    date: this.date(),
    hours: this.hours(),
    minutes: this.minutes(),
    seconds: this.seconds(),
    milliseconds: this.milliseconds(),
  };
}

export function toJSON() {
  // new Date(NaN).toJSON() === null
  return this.isValid() ? this.toISOString() : null;
}
