import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreationOpsDemoComponent } from './creation-ops-demo/creation-ops-demo.component';
// import { PipeableOpsDemoComponent } from './pipeable-ops-demo/pipeable-ops-demo.component';
import { ObservablesDemoComponent } from './observables-demo/observables-demo.component';
import { PipeableOpsDemoComponent } from './pipeable-ops-demo/pipeable-ops-demo.component';
import { ObserverDemoComponent } from './observer-demo/observer-demo.component';
import { SubscriptionDemoComponent } from './subscription-demo/subscription-demo.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        
    },
    {
        path: 'observables',
        component: ObservablesDemoComponent
    },
    {
        path: 'observer',
        component: ObserverDemoComponent
    },
    {
        path: 'subscription',
        component: SubscriptionDemoComponent
    },
    // {
    //     path: 'creation-ops',
    //     component: CreationOpsDemoComponent
    // },
    // {
    //     path: 'pipeable-ops',
    //     component: PipeableOpsDemoComponent
    // },
];
