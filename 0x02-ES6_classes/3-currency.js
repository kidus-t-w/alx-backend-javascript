export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    }
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    }
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    }
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
