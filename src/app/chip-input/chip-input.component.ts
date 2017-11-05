import { Component, Input, forwardRef} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgModel } from '@angular/forms';
import {
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

class Chip {
  id: number;
  name: string;
}

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChipInputComponent),
    multi: true
};

@Component({
  selector: 'chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.css'],
  providers: [
    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR
  ]
})

export class ChipInputComponent implements ControlValueAccessor {
  @Input() chips: Chip[];

  private _selectedChips: Chip[] = [];
  private selectedIndex = 0;

  private term = '';

  constructor() { }

  /**
  * @description implementation of the ControlValueAccessor interface
  */
  writeValue(value: Chip[]) {
    if (value !== null && value !== undefined) {
       this.selectedChips = value;
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  /**
  * @name selectedChips
  * @description getter and setter for selected chips
  */
  get selectedChips() {
      return this._selectedChips;
  }

  set selectedChips(value) {
      this._selectedChips = value;
      this.propagateChange(this._selectedChips);
  }

  /**
  * @name filteredChips
  * @description get filteredChips by search term
  * @return Array Filtered array with items by search term
  */
  get filteredChips() {
    let filteredArray = this.chips.filter((language) => language.name.toLowerCase().indexOf(this.term.toLowerCase()) > -1);
    return filteredArray.sort((a, b) => a.name == b.name ? 0 : +(a.name > b.name) || -1); //sort an array alphabetically
  }

  /**
  * @name onKeyDown
  * @param Number Key code what was down
  * @description Method to handle key events
  */
  onKeyDown(keyCode: number) {
      switch (keyCode) {
        case 38:
          if (this.selectedIndex) {
              this.selectedIndex--;
          }
          break;
        case 40:
          if (this.selectedIndex < this.filteredChips.length - 1) {
              this.selectedIndex++;
          }
          break;
        case 8:
          if (this.selectedChips.length && !this.term) {
              let chip = this.selectedChips[this.selectedChips.length - 1],
                  index = this.selectedChips.indexOf(chip);
              this.removeChip(chip, index);
          }
          break;
        case 13:
          if (this.filteredChips.length && this.term) {
              let chip = this.filteredChips[this.selectedIndex];
              this.addChip(chip);
          }
      }
  }

  /**
  * @name addChip
  * @param Object Chip what need to add
  * @description Method to add chip
  */
  addChip(chip: Chip): void {
    let index = this.chips.indexOf(chip);
    this.chips.splice(index, 1);
    this.selectedChips = [...this.selectedChips, chip];
    this.term = '';
    this.selectedIndex = 0;
  }

  /**
  * @name removeChip
  * @param Object Chip what need to remove
  * @description Method to remove chip
  */
  removeChip(chip: Chip, index: number): void {
    this.selectedChips.splice(index, 1);
    this.chips.push(chip);
  }
}
