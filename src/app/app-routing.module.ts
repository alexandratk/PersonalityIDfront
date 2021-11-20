import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./classes/auth.guard";
import { AboutComponent } from "./component/about/about.component";
import { HomeComponent } from "./component/home/home.component";
import { LoginComponent } from "./component/login/login.component";
import { AuthLayoutComponent } from "./shared/layouts/auth-layout/auth-layout.component";
import { SiteLayoutComponent } from "./shared/layouts/site-layout/site-layout.component";

const routes: Routes = [
    {
        path: '', component: AuthLayoutComponent, children: [
            { path: 'login', component: LoginComponent }
        ]
    },
    {
        path: '', component: SiteLayoutComponent, canActivateChild: [AuthGuard], children: [
            { path: 'about', component: AboutComponent },
            { path: 'home', component: HomeComponent },
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}