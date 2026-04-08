import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './character-filter.component.html',
  styleUrl: './character-filter.component.css'
})
export class CharacterFilterComponent {
  @Output() houseSelected = new EventEmitter<string>();

  house = new FormControl('', { nonNullable: true });

  filterByHouse(): void {
    const houseValue = this.house.value.trim().toLowerCase();
    this.houseSelected.emit(houseValue);
  }
}
