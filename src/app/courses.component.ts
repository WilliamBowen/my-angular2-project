import {Component} from '@angular/core'
import {CourseService} from './course.service'

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
    {{ title }}
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    `

})
export class CourseComponent {
    title: string = "The title of courses page";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}