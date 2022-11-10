import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderConfig, NgxUiLoaderModule, POSITION,PB_DIRECTION, SPINNER } from 'ngx-ui-loader';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserAddComponent } from './user-add/user-add.component';
import { UsersComponent } from './users/users.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsPosition: POSITION.topLeft,
  bgsType: SPINNER.circle,
  bgsSize: 500,
  pbDirection: PB_DIRECTION.rightToLeft,
  pbThickness: 5 
}

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UsersComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule, 
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  exports:[MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
