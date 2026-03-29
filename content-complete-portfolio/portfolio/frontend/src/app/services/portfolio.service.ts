import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, Experience, PersonalInterest, ContactForm } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/projects`);
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.baseUrl}/experience`);
  }

  getInterests(): Observable<PersonalInterest[]> {
    return this.http.get<PersonalInterest[]>(`${this.baseUrl}/personal`);
  }

  sendContact(form: ContactForm): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.baseUrl}/contact`, form);
  }
}
