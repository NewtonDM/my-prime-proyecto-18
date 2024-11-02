import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../modulos/material.module';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.sass'
})
export class ProductoComponent {
  miFormulario: FormGroup;
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email'];
  dataSource: any[] = [];
  constructor(private fb: FormBuilder){
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if(this.miFormulario.valid) {
      const newProducto = {
        id: this.dataSource.length +1,
        ... this.miFormulario.value,
      }
      this.dataSource = [...this.dataSource, newProducto];
      this.miFormulario.reset();
      this.miFormulario.markAsPristine();
      this.miFormulario.markAsUntouched();
    }
  }

}
