import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThoughtCard } from 'src/app/shared/models/thoughtCard.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiMockService {
  constructor(private httpClient: HttpClient) {}
  private readonly MOCK_DATA_URL = '';
  getData(): Observable<ThoughtCard[]> {
    return this.httpClient.get<ThoughtCard[]>(this.MOCK_DATA_URL);
  }
}
