import { Validator } from './validator';

describe('Validator', () => {
  let validator: Validator;

  beforeEach(() => {
    validator = new Validator();

    validator.addRule(
      (password) => password.length >= 8,
      'Пароль должен быть длиной не менее 8 символов',
    );
    validator.addRule(
      (password) => /[a-zA-Z]/.test(password),
      'Пароль должен содержать как минимум одну латинскую букву',
    );
    validator.addRule(
      (password) => /[0-9]/.test(password),
      'Пароль должен содержать как минимум одну цифру',
    );
    validator.addRule(
      (password) => /[a-z]/.test(password) && /[A-Z]/.test(password),
      'Пароль должен содержать символы в верхнем и нижнем регистре',
    );
    validator.addRule(
      (password) => !/([a-zA-Z0-9])\1\1\1/.test(password),
      'Пароль не должен содержать четыре идентичных символа подряд',
    );
  });

  test('correct password', () => {
    const result = validator.validate('MyPassword123');
    expect(result.isValid).toBe(true);
  });

  test('password without digits', () => {
    const result = validator.validate('MyPassword');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Пароль должен содержать как минимум одну цифру');
  });

  test('password with 4 repeating characters', () => {
    const result = validator.validate('Passssword123');
    expect(result.isValid).toBe(false);
    expect(result.error).toBe('Пароль не должен содержать четыре идентичных символа подряд');
  });
});
