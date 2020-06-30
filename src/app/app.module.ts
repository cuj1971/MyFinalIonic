import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list/list.component';
import { TabComponent } from './tab/tab.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { LevelPipe } from './shared/pipes/level/level.pipe';
import { ColourPipe } from './shared/pipes/level/colour.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UpdatesNotificationComponent } from './updates-notification/updates-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TabComponent,
    ItemDetailComponent,
    SearchComponent,
    LevelPipe,
    ColourPipe,
    UpdatesNotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
