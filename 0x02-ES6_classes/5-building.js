export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    try {
      this.evacuationWarningMessage();
    } catch (error) {
        throw error;
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

  evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
