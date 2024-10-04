import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./task/task.component";
import { TaskListComponent } from "./task/task-list/task-list.component";
import { NewTaskComponent } from "./task/new-task/new-task.component";
import { CardComponent } from "./sharedui/card/card.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./sharedui/shared.module";
import { TasksModule } from "./task/task.module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule]
})
export class AppModule {

}