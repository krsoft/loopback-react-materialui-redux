

const NineSqValidatorFn = () => {
  this.required = function(value){
    return (value ? undefined : '필수항목');
  }

  function maxLength(max) {
    return value => value && value.length > max ? `Must be ${max} characters or less` : undefined;
  }

  let maxLengthEmail = maxLength(15);

  function minLength(min) {
    return value =>
      value && value.length < min ? `Must be ${min} characters or more` : undefined;
  }

  let minLength2 = minLength(2);

  function number(value) {
    return value && isNaN(Number(value)) ? 'Must be a number' : undefined;
  }

  function minValue(min) {
    return value => value && value < min ? `Must be at least ${min}` : undefined;
  }

  let minValue18 = minValue(18);

  function email(value) {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
      ? 'Invalid email address'
      : undefined;
  }

  function alphaNumeric(value) {
    return value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
  }

  function phoneNumber(value) {
    return value && !/^(0|[1-9][0-9]{9})$/i.test(value)
      ? 'Invalid phone number, must be 10 digits'
      : undefined;
  }
}

export default NineSqValidatorFn


