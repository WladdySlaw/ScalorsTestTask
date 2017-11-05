import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

class Language {
  id: number;
  name: string;
}

@Component({
  selector: 'chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.css']
})
export class ChipInputComponent implements OnInit {
  @Input() languages: Language[];
  selectedLanguages: Language[] = [];
  term = '';

  constructor() { }

  ngOnInit() {
  }

  get filteredLanguages() {
    return this.languages.filter((language) => language.name.toLowerCase().indexOf(this.term.toLowerCase()) > -1);
  }

  /**
  * @name addChip
  * @param Object Language what need to add
  * @description Method to add chip
  **/
  addChip(language: Language): void {
    let index = this.languages.indexOf(language);
    this.languages.splice(index, 1);
    this.selectedLanguages.push(language);
  }

  /**
  * @name removeChip
  * @param Object Language what need to remove
  * @description Method to remove chip
  **/
  removeChip(language: Language, index: number): void {
    this.selectedLanguages.splice(index, 1);
    this.languages.push(language);
    this.languages.sort((a, b) => a.name == b.name ? 0 : +(a.name > b.name) || -1);
  }
}
