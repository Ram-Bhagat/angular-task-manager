import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/projectModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient,private formBuilder:FormBuilder) { }

  createProjectForm(): FormGroup {
    return this.formBuilder.group({
      projectID: ['', Validators.required],
      projectName: ['', Validators.required],
      dateOfStart: [''],
      teamSize: ['', Validators.min(1)],
    });
  }

  getAllProjects()
  {
    return this.httpClient.get<Project[]>('http://localhost:9090/api/projects',{responseType:'json'})    
  }

  deleteProject(projectID:number)
  {
    return this.httpClient.delete(`http://localhost:9090/api/projects?ProjectID=${projectID}`,{responseType: 'json'});
  
  }
  addProject(data:Project)
  {
    return this.httpClient.post('http://localhost:9090/api/projects',data,{responseType: 'json'})
  }

  editProject(data:Project)
  {
    return this.httpClient.put('http://localhost:9090/api/projects',data,{responseType: 'json'})
  }
  searchProject(searchBy:string,searchText:string)
  {
    return this.httpClient.get(`http://localhost:9090/api/projects/search/${searchBy}/${searchText}`,{responseType: 'json'})
  }
  
}
