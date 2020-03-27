import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class QuizzesService {
  private readonly BaseURL = "/api/quiz";
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.BaseURL);
  }

  post(quiz) {
    return this.http.post(this.BaseURL, quiz);
  }

  update(quiz) {
    return this.http.put(`${this.BaseURL}/${quiz._id}`, quiz);
  }
}
