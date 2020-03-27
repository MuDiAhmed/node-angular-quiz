import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { QuizzesService } from "../services/quizzes.service";
import { Router } from "@angular/router";
import { CdkTextareaAutosize } from "@angular/cdk/text-field";

@Component({
  selector: "app-quizzes-form",
  templateUrl: "./quizzes-form.component.html",
  styleUrls: ["./quizzes-form.component.scss"]
})
export class QuizzesFormComponent implements OnInit {
  @ViewChild("autosize") autosize: CdkTextareaAutosize;
  quizForm: FormGroup = this.formBuilder.group({
    published: [false],
    title: ["", [Validators.required]],
    quiz: this.formBuilder.array([])
  });
  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuizzesService,
    private router: Router
  ) {
    this.addQuestion();
    this.addQuestion();
  }

  ngOnInit(): void {}

  get quiz() {
    return this.quizForm.get("quiz") as FormArray;
  }

  addQuestion() {
    this.quiz.push(
      this.formBuilder.group({
        question: ["", [Validators.required]],
        answers: this.formBuilder.array([
          ["", [Validators.required]],
          ["", [Validators.required]],
          ["", [Validators.required]]
        ]),
        correct: ["", [Validators.required]],
        explanation: ["", [Validators.required]]
      })
    );
  }

  publish() {
    this.quizForm.get("published").setValue(true);
    this.submit();
  }

  submit() {
    console.log(this.quizForm.value);
    this.quizService.post(this.quizForm.value).subscribe(response => {
      this.router.navigate(["../"]);
    });
  }

  removeQuestion(questionIndex) {
    this.quiz.removeAt(questionIndex);
  }
}
