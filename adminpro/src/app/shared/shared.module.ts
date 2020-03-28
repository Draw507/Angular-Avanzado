import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';

@NgModule({
    declarations: [
        NopageFoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
    ],
    exports: [
        NopageFoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ]
})
export class SharedModule { }
