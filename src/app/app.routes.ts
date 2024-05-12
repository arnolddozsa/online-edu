import { Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: "login", loadComponent: () => import("./login/login.component").then((c) => c.LoginComponent)}
    ,{path: "course/create", loadComponent: () => import("./create-course/create-course.component").then((c) => c.CreateCourseComponent)}
    ,{path: "course/update/:code", loadComponent: () => import("./create-course/create-course.component").then((c) => c.CreateCourseComponent)}
    ,{path: "course/list", loadComponent: () => import("./list-course/list-course.component").then((c) => c.ListCourseComponent)}
    ,{path: "course/read/:code/:page", loadComponent: () => import("./read-course/read-course.component").then((c) => c.ReadCourseComponent)}
    ,{path: "course/quiz/:code/:page", loadComponent: () => import("./quiz-completion/quiz-completion.component").then((c) => c.QuizCompletionComponent)}
    ,{path: "course/forum/:code", loadComponent: () => import("./forum/forum.component").then((c) => c.ForumComponent)}
    ,{path: "course/preview/:code", loadComponent: () => import("./preview/preview.component").then((c) => c.PreviewComponent )}
    ,{path: "index", loadComponent: () => import("./index/index.component").then((c) => c.IndexComponent)}
    ,{path: "**", redirectTo: "index", pathMatch: "full"}
    // {path: "/login", component: LoginComponent}

];
