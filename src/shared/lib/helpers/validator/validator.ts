interface ValidationRule {
  test: (input: string) => boolean;
  message: string;
}

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export class Validator {
  private rules: ValidationRule[];

  constructor() {
    this.rules = [];
  }

  addRule(test: (input: string) => boolean, message: string): void {
    this.rules.push({ test, message });
  }

  validate(input: string): ValidationResult {
    const failingRule = this.rules.find((rule) => !rule.test(input));
    return failingRule ? { isValid: false, error: failingRule.message } : { isValid: true };
  }
}

/*
Пример использования.

const passwordValidator = new Validator();

passwordValidator.addRule(
  (password) => password.length >= 8,
  'Пароль должен быть длиной не менее 8 символов',
);
passwordValidator.addRule(
  (password) => /[a-zA-Z]/.test(password),
  'Пароль должен содержать как минимум одну латинскую букву',
);
passwordValidator.addRule(
  (password) => /[0-9]/.test(password),
  'Пароль должен содержать как минимум одну цифру',
);
passwordValidator.addRule(
  (password) => /[a-z]/.test(password) && /[A-Z]/.test(password),
  'Пароль должен содержать символы в верхнем и нижнем регистре',
);
passwordValidator.addRule(
  (password) => !/([a-zA-Z0-9])\1\1\1/.test(password),
  'Пароль не должен содержать четыре идентичных символа подряд',
);

const result: ValidationResult = passwordValidator.validate('MyPassword123');
*/
