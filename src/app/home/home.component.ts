import { Component } from '@angular/core';
import { MaterialModule } from '../modulos/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  constructor(private router: Router){}

  navegarProductos() {
    this.router.navigate(['/productos']);
  }
}
