import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/project';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'tr-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.less']
})
export class ProjectsListComponent implements OnInit {

  projects : Project[];
  showSpinner : boolean = true;
  projectForm : FormGroup;

  constructor(private projectsService : ProjectsService,
              private formBuilder : FormBuilder) { }


  ngOnInit() {
    this.loadProjects();
    this.projectForm = this.buildProjectForm();
  }

  loadProjects() : void {
    this.projectsService.getProjects().subscribe((projects)=> {
      this.projects = projects;
      this.showSpinner = false;
    })
  }

  buildProjectForm() {
    return this.formBuilder.group ({
      description : ['', Validators.required],
      client : ['', Validators.required],
      monthlyCost : ['', Validators.required],
      startDate : ['', Validators.required],
      endDate : ['', Validators.required],
      totalCost : ''
    })
  }

  addProject() {
    this.projectsService.addProject(this.projectForm.value).subscribe(()=> {
      this.loadProjects();
    })

  }

  deleteProject(project : Project) {
    this.projectsService.deleteProject(project.id).subscribe(()=> {
      this.loadProjects();
    })
  }

}
