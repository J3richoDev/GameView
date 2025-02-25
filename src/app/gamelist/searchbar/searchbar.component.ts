import { Component, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [InputTextModule, FloatLabelModule, FormsModule, ReactiveFormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  search = signal('');
}
