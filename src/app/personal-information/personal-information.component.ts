import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  myData : string[][]= [
    ['Name', 'Payal Jain'],
    ['DOB' , '08/03/2000'],
    ['Work Experience' , '6 Months'],
    ['Education', 'B.tech (2023)'],
    ['Interests','Yoga , Meditation , Painting']
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 6 Months of experience in software industry.',
    'Worked as a Frontend Developer in Angular.',
    'I want to be a part of professional , innovative , knowledge based organuzation and develop myself more efficiently and contribute best skills to the company with full determination . My goal also includes learning new Technologies which will be introduced in upcoming years',
    'I have the Clarity in my Mind , Purity in my Heart and Sincerity in my Action',

  ];
  constructor(){}
  ngOnInit() : void{}

}
