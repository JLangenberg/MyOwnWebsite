import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { CSharpApplicationsComponent } from './my-projects/c-sharp-applications/c-sharp-applications.component';
import { JavaApplicationsComponent } from './my-projects/java-applications/java-applications.component';
import { DiamondFabricatorComponent } from './my-projects/ts-applications/diamond-fabricator/diamond-fabricator.component';
import { IsogrammTesterComponent } from './my-projects/ts-applications/isogramm-tester/isogramm-tester.component';
import { StringReverserComponent } from './my-projects/ts-applications/string-reverser/string-reverser.component';

const routes: Routes = [
  { path: 'main', component: IntroductionComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'c-sharp-applications', component: CSharpApplicationsComponent },
  { path: 'java-applications', component: JavaApplicationsComponent },
  { path: 'diamond-fabricator', component: DiamondFabricatorComponent },
  { path: 'isogramm-tester', component: IsogrammTesterComponent },
  { path: 'string-reverser', component: StringReverserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }