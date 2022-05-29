import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule {}