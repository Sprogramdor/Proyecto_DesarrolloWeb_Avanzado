import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { MaterialModule } from "../shared/material/material.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        HeaderComponent,
        HeroComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        HeroComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule
    ]

})

export class CoreModule{

}