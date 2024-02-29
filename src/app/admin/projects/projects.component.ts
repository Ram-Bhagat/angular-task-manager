import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/models/projectModel';
import { ProjectService } from 'src/app/services/project.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectService = inject(ProjectService)

  projects:Project[]=[];
  deleteProject:Project = new Project();
  deleteIndex:number= 0;

  searchBy:string |any
  searchText:string= "";

  isAdding:boolean =false

  isEditing:boolean =true;
  projectId:number = 0;

  projectForm: FormGroup | any;

  @ViewChild('closeDeleteModel') closeDeleteModel: ElementRef|undefined


  constructor(private formBuilder: FormBuilder,private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.getProjects();
    
    this.searchBy = 'All';
    this.cd.detectChanges();//to detect the searchby value on load in DOM

    this.projectForm = this.projectService.createProjectForm()

  }


  searchProject()
  {
    this.projectService.searchProject(this.searchBy,this.searchText).subscribe(
      (response)=>{
        this.projects = response as Project[]
        
      }
    )
  }
  
  getProjects()
  {
    this.projectService.getAllProjects().subscribe(
      (response)=>{
        this.projects = response        
      },
      (error)=>{console.log(error);
      }
    )
  }


  onClickDelete(event:any,index:number)
  {
    this.deleteProject.projectID =  this.projects[index].projectID;
    this.deleteProject.projectName =  this.projects[index].projectName;
    this.deleteProject.teamSize =  this.projects[index].teamSize;
    this.deleteProject.dateOfStart =  this.projects[index].dateOfStart;
    this.deleteIndex=index;
  }


  confirmDelete() {
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe(
      (response) => {

        this.projects = this.projects.filter(project => project.projectID !== this.deleteProject.projectID);
        this.closeDeleteModel?.nativeElement.click();
      },
      (error) => {
        console.log('Error deleting project:', error);
      }
    );
  }

  addNewProject()
  {
    this.isAdding = true
    
  }
  cancelNewProject()
  {
    this.isAdding = false
  }

  editProject(projectID:number)
  {
    this.isEditing = false;
    this.projectId = projectID;
  }
  saveEditProject(data:Project)
  {
    this.projectService.editProject(data).subscribe(
      (response)=>{
        alert("item Updated Successfully !!");
        this.isEditing = true;
      }
    )
  }

  cancleEditing()
  {
    this.isEditing = true;

  }

  saveNewProject() {
    if (this.projectForm.valid) {
      const formData = this.projectForm.value;
      this.projectService.addProject(formData).subscribe(
        (response)=>{
          this.getProjects()
          },
        (error)=>{console.log(error);
        }
      )
      // Reset the form and exit the adding mode
      this.projectForm.reset();
      this.isAdding = false;
    }
  }
}
