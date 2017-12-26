import { getTranslate, getActiveLanguage, addTranslation } from 'react-localize-redux';

class NineSqValidator {
  constructor(dispatch) {
    // dispatch(addTranslation(messages));
  }

  static required(value){
    return (value ? undefined : '필수항목');
  }

  static maxLength(max) {
    return value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
  }

  static maxLengthEmail = NineSqValidator.maxLength(15);

  static minLength(min) {
    return value =>
      value && value.length < min ? `Must be ${min} characters or more` : undefined;
  }

  static minLength2 = NineSqValidator.minLength(2);

  static number(value) {
    return value && isNaN(Number(value)) ? 'Must be a number' : undefined;
  }

  static minValue(min) {
    return value => value && value < min ? `Must be at least ${min}` : undefined;
  }

  static minValue18 = NineSqValidator.minValue(18);

  static email(value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address'
      : undefined;
  }

  static alphaNumeric(value) {
    return value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
  }

  static phoneNumber(value) {
    return value && !/^(0|[1-9][0-9]{9})$/i.test(value)
      ? 'Invalid phone number, must be 10 digits'
      : undefined;
  }
}

export default NineSqValidator;
