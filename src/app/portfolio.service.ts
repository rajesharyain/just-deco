import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Portfolio {
  id: number;
  category: string;
  title: string;
  description: string;
  imgSrc: string;
}


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl = 'assets/json/portfolio.json'; // Path to the JSON file

  constructor(private http: HttpClient) { }

  getPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.apiUrl);
  }
}
