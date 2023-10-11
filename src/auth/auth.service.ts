import { Injectable } from '@nestjs/common';

export interface User {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  private users: User[];
  constructor() {
    this.users = [
      {
        email: 'test@test.com',
        password: '1234',
      },
    ];
  }

  signup(email: string, password: string): User[] {
    this.users.push({ email, password });
    return this.users;
  }

  verfiyUser(email: string, password: string): User | null {
    const user = this.users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) return null;
    return user;
  }
}
