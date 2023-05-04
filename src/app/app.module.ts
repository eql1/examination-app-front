import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { UsersComponent } from './features/users/users.component';
import { UsersModule } from './features/users/users.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, UsersModule],
  providers: [UsersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
