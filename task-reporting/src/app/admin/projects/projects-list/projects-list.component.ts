import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/app/models/project';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Utilites } from 'src/app/shared-module/utilities';
import { Sort } from '@angular/material';

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
              private formBuilder : FormBuilder,
              private utilities : Utilites) { }


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

  sortProjects(sort: Sort) {
    const data = this.projects.slice();
    if (!sort.active || sort.direction === '') {
      this.projects = data;
      return;
    }
      this.projects = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'description': return this.utilities.compare(a.description, b.description, isAsc);
          case 'client': return this.utilities.compare(a.client, b.client, isAsc);
          case 'monthlyCost': return this.utilities.compare(a.monthlyCost, b.monthlyCost, isAsc);
          case 'startDate': return this.utilities.compare(a.startDate, b.startDate, isAsc);
          case 'endDate': return this.utilities.compare(a.endDate, b.endDate, isAsc);
          case 'totalCost': return this.utilities.compare(a.totalCost, b.totalCost, isAsc);
          default: return 0;
        }
      });
    }

}
