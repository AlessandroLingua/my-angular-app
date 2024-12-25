import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getMessage(): string {
    return 'Hello from DataService!';
  }
}
