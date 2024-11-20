import { Routes } from '@angular/router';
import { CounterComponent } from './counter.component';


export const GIFT_ROUTES: Routes = [
  {
    path: '',
    component: CounterComponent,
    //providers: [PeopleStore],
  },
];
