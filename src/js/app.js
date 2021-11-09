export class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const legalSymbols = /^[\w-]*$/;
    const fourDigitSequence = /\d{4}/;
    const withoutStartEndSymbols = /^[^_\d-].*[^_\d-]$/;
    return (
      legalSymbols.test(this.userName)
      && !fourDigitSequence.test(this.userName)
      && withoutStartEndSymbols.test(this.userName)
    );
  }
}
