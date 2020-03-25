import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule {}
