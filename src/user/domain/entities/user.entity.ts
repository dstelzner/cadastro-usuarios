export class User {
  readonly id: string;
  name: string;
  email: string;
  birthDate: Date;

  constructor(data: Partial<User> = {}) {
    this.id = data.id ?? null;
    this.name = data.name ?? '';
    this.email = data.email ?? '';
    this.birthDate = data.birthDate ?? null;
  }

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
}
