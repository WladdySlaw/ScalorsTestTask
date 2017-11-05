import { Component, OnInit, Input } from '@angular/core';

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
  filteredLanguages: Language[] = [];

  constructor() { }

  ngOnInit() {
  }

  /**
  * @name search
  * @param String Value from search input
  * @description Method to get value from search input
  **/
  search(term: string): void {
    this.filteredLanguages = this.languages.filter((language) => language.name.toLowerCase().indexOf(term.toLowerCase()) > -1);
    console.log(this.filteredLanguages);
    // console.log(this.languages);
    // console.log('term value is', term);
  }

}
