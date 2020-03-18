import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'tr-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.less']
})
export class ProjectsListComponent implements OnInit {

  projects : Project[];
  showSpinner : boolean = true;

  constructor(private projectsService : ProjectsService) { }


  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() : void {
    this.projectsService.getProjects().subscribe((projects)=> {
      this.projects = projects;
      this.showSpinner = false;
    })
  }

}
