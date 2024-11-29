import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { PlaygroundComponent } from './playground/playground.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomePageComponent
    },
    {
        path:'aboutMe',
        component:AboutMePageComponent
    },
    {
        path:'projects',
        component:ProjectsPageComponent
    },
    {
        path:'playground',
        component:PlaygroundComponent
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path:'**',
        component: NotFoundPageComponent
    }
];
