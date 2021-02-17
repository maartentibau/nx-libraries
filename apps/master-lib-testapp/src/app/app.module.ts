import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Lib1TestComponent } from '../lib1-test/lib1-test.component';
import { Lib2TestComponent } from '../lib2-test/lib2-test.component';
import { MasterLibModule } from '@master';

@NgModule({
  declarations: [AppComponent, Lib1TestComponent, Lib2TestComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: 'lib1', component: Lib1TestComponent },
        { path: 'lib2', component: Lib2TestComponent },
      ],
      { initialNavigation: 'enabled' }
    ),
    MasterLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
