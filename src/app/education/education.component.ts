import { Component } from '@angular/core';
import { Education } from '../models/model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationList : Education[] = [
    {
      institute : 'Techno India University',
      course : 'B.tech , CSE',
      duration : '2019 - 2023',
      score : '87%'
    }, 
    {
      institute : 'Kola Union High School',
      course : 'HSC , PCMB',
      duration : '2017 - 2018',
      score : '91%'
    },
    {
      institute : 'Kola Union Jigendra Girls High  School',
      course : 'SSC',
      duration : '2015 - 2016',
      score : '90%'
    }
  ]
}
