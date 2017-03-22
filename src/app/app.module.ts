import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { EncryptComponent } from './encrypt/encrypt.component';
import { DecryptComponent } from './decrypt/decrypt.component';
import { ToolsComponent } from './tools/tools.component';
import { CiphersComponent } from './ciphers/ciphers.component';
import { CaesarComponent } from './caesar/caesar.component';
import { EncryptHeaderButtonsComponent } from './encrypt-header-buttons/encrypt-header-buttons.component';
import { KeywordEncryptComponent } from './keyword-encrypt/keyword-encrypt.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'encrypt', component: EncryptComponent },
    { path: 'decrypt', component: DecryptComponent },
    { path: 'caesar', component: CaesarComponent },
    { path: 'keyword-encrypt', component: KeywordEncryptComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    EncryptComponent,
    DecryptComponent,
    ToolsComponent,
    CiphersComponent,
    CaesarComponent,
    EncryptHeaderButtonsComponent,
    KeywordEncryptComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
