import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Weight} from '../models/Weight';
import {AirportStats} from '../models/AirportStats';

const url = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}


  getFlights() {
    return this.http.get<number[]>(`${url}/flights`);
  }

  getDepartureDates() {
    return this.http.get<string[]>(`${url}/departureDates`);
  }

  getWeightFor(flightNumber: number, date: string) {
    return this.http.get<Weight>(`${url}/weight/flightNumber/${flightNumber}/date/${date}`);
  }

  getIataCodes() {
    return this.http.get<string[]>(`${url}/airport/IATACodes`);
  }

  getAirportStats(code: string, date: string) {
    return this.http.get<AirportStats>(`${url}/airport/IATACode/${code}/date/${date}`);
  }
}
