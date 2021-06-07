import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SliderComponent } from './Components/slider/slider.component';
import { MusicBioComponent } from './Components/music-bio/music-bio.component';
import { PhotographySiteComponent } from './Components/photography-site/photography-site.component';
import { ProgrammingSiteComponent } from './Components/programming-site/programming-site.component';
import { CreateCategoryComponent } from './Components/create-category/create-category.component';
import { ShowCategoriesComponent } from './Components/show-categories/show-categories.component';
import {CreateUserComponent} from './Components/create-user/create-user.component';
//Servicios
import {UserService} from './Services/user.service';


const routesApp: Routes = [
  {path:'',component: MusicBioComponent},
  {path:'music-bio',component: MusicBioComponent},
  {path:'photography-site',component: PhotographySiteComponent},
  {path:'programming-site', component: ProgrammingSiteComponent},
  {path:'create-category', component: CreateCategoryComponent},
  {path:'show-categories', component: ShowCategoriesComponent},
  {path:'UserService', component: UserService},
  {path:'create-user', component: CreateUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SliderComponent,
    MusicBioComponent,
    PhotographySiteComponent,
    ProgrammingSiteComponent,
    CreateCategoryComponent,
    ShowCategoriesComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
