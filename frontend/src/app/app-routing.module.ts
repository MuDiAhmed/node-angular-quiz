import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizzesComponent } from "./quizzes/quizzes.component";
import { QuizzesFormComponent } from "./quizzes-form/quizzes-form.component";

const routes: Routes = [
  {
    path: "quiz",
    component: QuizzesComponent
  },
  {
    path: "quiz/add",
    component: QuizzesFormComponent
  },
  {
    path: "**",
    redirectTo: "quiz"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
