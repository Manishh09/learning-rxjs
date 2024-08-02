import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreationOpsDemoComponent } from './creation-ops-demo/creation-ops-demo.component';
// import { PipeableOpsDemoComponent } from './pipeable-ops-demo/pipeable-ops-demo.component';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        redirectTo: 'observables'
    },
    {
        path: 'creation-ops',
        component: CreationOpsDemoComponent
    },
    // {
    //     path: 'pipeable-ops',
    //     component: PipeableOpsDemoComponent
    // },
    {
        path: 'observables',
        component: ObservablesDemoComponent
    }

];
