import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizzesFormComponent } from './quizzes-form/quizzes-form.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, QuizzesComponent, QuizzesFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
