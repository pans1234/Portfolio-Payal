import { Component } from '@angular/core';
import { Skill } from '../models/model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermidiate',
      rating: '85',
    },
  
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: '80',
    },
   
    {
      name: 'C++',
      level: 'Intermidiate',
      rating: '85',
    },
    {
      name: 'SQL',
      level: 'Intermidiate',
      rating: '85',
    },
  ];
  constructor() {}

}
