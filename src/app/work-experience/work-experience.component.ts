import { Component } from '@angular/core';
import { WorkExperience } from '../models/model';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Softeware Developer',
      company: 'Vara Infrovate Pvt. Ltd',
      duration: 'January 2023 - June 2023',
      description: [
        'Working as a Frontend Developer( Angular) In certcheck. Certcheck - To protect the  documents from Tampering Using Blcokchain',
        'Working to develop new technologies to make life easier.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
