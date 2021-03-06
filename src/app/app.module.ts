import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GetTodosComponent } from './get-todos/get-todos.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostItemComponent } from './post-item/post-item.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'get-todos', component: GetTodosComponent },
  { path: 'post-item', component: PostItemComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GetTodosComponent,
    LandingComponent,
    NavbarComponent,
    PostItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
