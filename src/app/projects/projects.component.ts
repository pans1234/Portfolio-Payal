import { Component } from '@angular/core';
import { Project } from '../models/model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'CertCheck',
      technologies: ' Angular, Angular Material , Bootsstrap , NestJs , Hyperledger',
      description: [
        'Worked as a team lead to develop apps that are by HLF.',
        'Built the services to store the documents issued ny various universities and organization , verify those documents by BGV Company and protec the document from Tampering.',
      ],
    },
    {
      title: 'HealthCare Website',
      technologies: 'HTML , CSS , JS , PHP',
      description: [
        'Worked as a team lead ',
        'Got to learn about HTML , CSS , JS ',
      ],
    },
    {
      title: 'Text Summarization',
      technologies: 'Mahine Learning ,PYTHON ,  HTML , CSS , FLASK',
      description: [
        'Summarioze the Entire Text into smaller one , based on the number of frequency nad their importance nad relevance tehy will keep it into the summary',
        'Learned multiple technologies to build the product.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
