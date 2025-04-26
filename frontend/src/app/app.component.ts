import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <button (click)="callApi()">Call API</button>
    <p>{{ message }}</p>
  `,
})
export class AppComponent {
  message = '';

  constructor(private http: HttpClient) {}

  callApi() {
    this.http.get<any>('http://localhost:8000/api/test')
      .subscribe(res => this.message = res.message);
  }
}
