export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  set sqft(newValue) {
    if (typeof newValue === 'number') {
      this._sqft = newValue;
    } else {
      throw TypeError('SQRT must be a number');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
