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
import { AnagramEncryptComponent } from './anagram-encrypt/anagram-encrypt.component';
import { TransposeEncryptComponent } from './transpose-encrypt/transpose-encrypt.component';
import { DecryptCiphersComponent } from './decrypt-ciphers/decrypt-ciphers.component';
import { CaesarDecryptComponent } from './caesar-decrypt/caesar-decrypt.component';
import { KeywordDecryptComponent } from './keyword-decrypt/keyword-decrypt.component';
import { DecryptHeaderButtonsComponent } from './decrypt-header-buttons/decrypt-header-buttons.component';
import { TransposeDecryptComponent } from './transpose-decrypt/transpose-decrypt.component';
import { AnagramDecryptComponent } from './anagram-decrypt/anagram-decrypt.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'encrypt', component: EncryptComponent },
    { path: 'decrypt', component: DecryptComponent },
    { path: 'caesar', component: CaesarComponent },
    { path: 'keyword-encrypt', component: KeywordEncryptComponent },
    { path: 'keyword-decrypt', component: KeywordDecryptComponent },
    { path: 'anagram-encrypt', component: AnagramEncryptComponent },
    { path: 'anagram-decrypt', component: AnagramDecryptComponent },
    { path: 'transpose-encrypt', component: TransposeEncryptComponent },
    { path: 'transpose-decrypt', component: TransposeDecryptComponent },
    { path: 'caesar-decrypt', component: CaesarDecryptComponent },
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
    AnagramEncryptComponent,
    TransposeEncryptComponent,
    DecryptCiphersComponent,
    CaesarDecryptComponent,
    KeywordDecryptComponent,
    DecryptHeaderButtonsComponent,
    TransposeDecryptComponent,
    AnagramDecryptComponent,
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
