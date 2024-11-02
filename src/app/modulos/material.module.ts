import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatButtonModule } from "@angular/material/button"
import { MatInputModule } from "@angular/material/input"
import { MatTableModule } from "@angular/material/table"

@NgModule({
  exports:[MatFormFieldModule, MatButtonModule, MatInputModule, MatTableModule]
})

export class MaterialModule {}
