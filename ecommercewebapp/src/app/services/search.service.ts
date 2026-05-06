import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly searchTermSubject = new BehaviorSubject<string>('');
  readonly searchTerm$: Observable<string> = this.searchTermSubject.asObservable();

  setSearchTerm(value: string): void {
    this.searchTermSubject.next(value.trim().toLowerCase());
  }
}
