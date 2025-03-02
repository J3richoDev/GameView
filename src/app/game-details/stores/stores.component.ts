import { Component, DestroyRef, inject, input, signal } from '@angular/core';
import { GameDetailService } from '../gamedetail.service';

@Component({
  selector: 'app-stores',
  imports: [],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css'
})
export class StoresComponent {
  stores = input<any>([]);

}
