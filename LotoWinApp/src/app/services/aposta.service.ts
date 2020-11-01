import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aposta } from '../models/Aposta';

@Injectable({
  providedIn: 'root'
})
export class ApostaService {
  baseURL: string = 'http://localhost:5000/api/Aposta';

  constructor(private http: HttpClient) { }

  GetApostas(): Observable<Aposta[]>{
    return this.http.get<Aposta[]>(this.baseURL);
  }

  GetApostaPorConcurso(concurso: string): Observable<Aposta[]>{
    return this.http.get<Aposta[]>(`${this.baseURL}/getByConcurso/${concurso}`);
  }

  GetApostaPorId(id: number): Observable<Aposta>{
    return this.http.get<Aposta>(`${this.baseURL}/${id}`);
  }

  DeleteAposta(id: number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  PostAposta(aposta: Aposta){
    return this.http.post(this.baseURL, aposta);
  }

  PutAposta(aposta: Aposta){
    return this.http.put(this.baseURL, aposta);
  }
}
