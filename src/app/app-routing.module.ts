import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component'
import { TabComponent } from './tab/tab.component';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabComponent,
      children: [
        {
          path: 'search',
          component: SearchComponent
        },
        {
          path: 'list',
          children: [
            {
              path: '',
              component: ListComponent
            },
            {
              path: ':id',
              component: ItemDetailComponent
            }
          ]
        },

        {
          path: '',
          redirectTo: '/tabs/search',
          pathMatch: 'full'
        }
      ]
    },
    {
      path: '',
      redirectTo: 'tabs',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
