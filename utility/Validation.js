
export default function Validation(validationCase, value, value1) {
  const validFirstname = (firstname) => /^[A-Za-z]+[A-Za-z]$/.test(firstname);
  const validPhone = (phone) => /[0-9]{10}/.test(phone);
  const validPassword = (password) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[^\s]).{8,}$/.test(password);
  const validLastname = (lastname) => /^[A-Za-z ]+$/.test(lastname);
  const validEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  let result;

  switch (validationCase) {
    case 'first':
      result = !validFirstname(value);
      break;
    case 'last':
      result = value===''?false:!validLastname(value);
      break;
    case 'phone':
      result = !validPhone(value);
      break;
    case 'password':
      result = validPassword(value) ? '' : '* The password should contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character.';
      break;
    case 'email':
      result = validEmail(value) ? '' : '* Enter a valid email.';
      break;
    case 'age':
      result = value < 18 || !value1 ? '*Enter dob /User is below 18.' : '';
      break;
    case 'confirm':
      result = value === value1 ? '' : '* Password and Confirm Password should match';
      break;
    default:
      result = false;
      break;
  }

  return result;
}