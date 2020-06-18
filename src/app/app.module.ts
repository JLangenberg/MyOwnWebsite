import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Needed for live translation
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';


// The components for the content
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { AppRoutingModule } from './app-routing.module';
import { IsogrammTesterComponent } from './my-projects/ts-applications/isogramm-tester/isogramm-tester.component';
import { StringReverserComponent } from './my-projects/ts-applications/string-reverser/string-reverser.component';
import { DiamondFabricatorComponent } from './my-projects/ts-applications/diamond-fabricator/diamond-fabricator.component';
import { JavaApplicationsComponent } from './my-projects/java-applications/java-applications.component';
import { CSharpApplicationsComponent } from './my-projects/c-sharp-applications/c-sharp-applications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroductionComponent,
    AboutMeComponent,
    FooterComponent,
    MyProjectsComponent,
    IsogrammTesterComponent,
    StringReverserComponent,
    DiamondFabricatorComponent,
    JavaApplicationsComponent,
    CSharpApplicationsComponent
  ],
  imports: [
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
