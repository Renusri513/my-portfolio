import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { CurrentlyComponent } from './pages/currently/currently.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'currently', component: CurrentlyComponent },
  { path: 'contact', component: ContactComponent }

];
