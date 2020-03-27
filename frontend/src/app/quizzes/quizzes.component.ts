import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { QuizzesService } from "../quizzes.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-quizzes",
  templateUrl: "./quizzes.component.html",
  styleUrls: ["./quizzes.component.scss"]
})
export class QuizzesComponent implements OnInit {
  quizzez = [];
  constructor(
    private quizService: QuizzesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.quizService.getAll().subscribe((response: any) => {
      this.quizzez = response;
    });
  }
  publish(quiz) {
    const quizObject = { ...quiz, published: true };
    this.quizService.update(quizObject).subscribe(response => {
      this.snackBar.open(`Quiz ${quiz.title} has been published`, null, {
        duration: 3000,
        verticalPosition: "top"
      });
      this.quizzez.forEach(quizObject => {
        if (quiz._id === quizObject._id) quizObject.published = true;
      });
    });
  }
  publishedQuiz() {
    return this.quizzez.filter(quiz => {
      return quiz.published;
    });
  }

  notPublishedQuiz() {
    return this.quizzez.filter(quiz => {
      return !quiz.published;
    });
  }
}
