import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { 
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from "./events/index";

import { EventsAppComponent } from './events-app.component';
import { NavBarCompoent } from './nav/navbar.component';
import { Error404Component } from "./errors/404.component";

import { appRoutes } from "./routes";


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarCompoent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [EventService, EventRouteActivator, EventListResolver,
  { provide: 'canDeactivateCreateEvent', 
    useValue: checkDirtyState
  }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
  return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
