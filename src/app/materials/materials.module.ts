import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
/* import {MatInputModule} from '@angular/material/input';*/
import {MatInputModule} from '@angular/material/input';
 
const MaterialComponents = [
  MatNativeDateModule,
  MatFormFieldModule,
  MatDatepickerModule,
   MatInputModule,
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialsModule {}
