import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  baseUrl = 'http://localhost:3000/api/'

  constructor(private http: HttpClient) { }

  getComputerMove() {
    return this.http.get(`${this.baseUrl}computer-move`);
  }

  getGameHistory() {

  }

}
