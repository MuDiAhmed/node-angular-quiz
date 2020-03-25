import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-quizzes-form",
  templateUrl: "./quizzes-form.component.html",
  styleUrls: ["./quizzes-form.component.scss"]
})
export class QuizzesFormComponent implements OnInit {
  quizForm: FormGroup = this.formBuilder.group({
    published: [false],
    quiz: this.formBuilder.array([
      this.formBuilder.group({
        question: ["", [Validators.required]],
        answers: this.formBuilder.array([
          ["", [Validators.required]],
          ["", [Validators.required]],
          ["", [Validators.required]]
        ]),
        correct: ["", [Validators.required]]
      }),
      this.formBuilder.group({
        question: ["", [Validators.required]],
        answers: this.formBuilder.array([
          ["", [Validators.required]],
          ["", [Validators.required]],
          ["", [Validators.required]]
        ]),
        correct: ["", [Validators.required]]
      })
    ])
  });
  constructor(private formBuilder: FormBuilder) {}

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
        correct: ["", [Validators.required]]
      })
    );
  }

  publish() {
    this.quizForm.get("published").setValue(true);
    this.submit();
  }

  submit() {
    console.log(this.quizForm.value);
  }

  removeQuestion(questionIndex) {
    this.quiz.removeAt(questionIndex);
  }
}
