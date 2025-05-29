import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../Services/course.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {


courseList: Course[]=[];
filteredCourses: Course[] = [];
filterValue: String = "";


constructor(private courseservice: CourseService){}

ngOnInit() {
  this.courseservice.getCourses().subscribe(data => {
    this.courseList=data;
    this.filteredCourses=data;
  })
}

filterCourses(): void {
    try {
      this.filteredCourses = this.courseList.filter((course) =>
        course.courseCode.toLowerCase().includes(this.filterValue.toLowerCase())|| course.courseName.toLowerCase().includes(this.filterValue.toLowerCase()) || course.subject.toLowerCase().includes(this.filterValue.toLowerCase()))
    }
    catch (error) {
      console.error;

    }
  }

  sortCodes(): void {
    this.filteredCourses.sort((a, b) => a.courseCode > b.courseCode ? 1 : -1);

  }

  sortNames() {
    this.filteredCourses.sort((a, b) => a.courseName > b.courseName ? 1 : -1);

  }

  sortProgressions() {
    this.filteredCourses.sort((a, b) => a.progression > b.progression ? 1 : -1);

  }

   sortSubjects() {
    this.filteredCourses.sort((a, b) => a.subject > b.subject ? 1 : -1);

  }

   sortPoints() {
    this.filteredCourses.sort((a, b) => a.points > b.points ? 1 : -1);

  }

}


