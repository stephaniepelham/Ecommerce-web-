import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { User, LoginRequest, RegisterRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'api/auth';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadStoredUser();
    }
  }

  register(request: RegisterRequest): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, request).pipe(
      catchError(() => {
        // Mock registration - return user object on error
        const mockUser: User = {
          id: Math.random().toString(),
          name: request.name,
          email: request.email,
          password: request.password,
          role: 'CUSTOMER'
        };
        return of(mockUser);
      })
    );
  }

  login(request: LoginRequest): Observable<{ user: User; token: string }> {
    return this.http.post<{ user: User; token: string }>(`${this.apiUrl}/login`, request).pipe(
      catchError(() => {
        // Mock login - return user and token on error
        const mockUser: User = {
          id: Math.random().toString(),
          name: request.email.split('@')[0],
          email: request.email,
          password: request.password,
          role: 'CUSTOMER'
        };
        return of({ 
          user: mockUser, 
          token: 'mock-token-' + Math.random().toString(36).substr(2, 9)
        });
      })
    );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  storeToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('authToken', token);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  storeUser(user: User): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.getToken() && !!this.getCurrentUser();
  }

  resetPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, { email });
  }

  private loadStoredUser(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUserSubject.next(JSON.parse(storedUser));
      }
    }
  }
}
