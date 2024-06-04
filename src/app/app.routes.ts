import { Routes } from '@angular/router';
import { SelectListComponent } from '../CRD_select/select-list/select-list.component';
import { NameSpaceComponent } from '../CRD_select/name-space/name-space.component';
import { StorageClassComponent } from '../CRD_select/storage-class/storage-class.component';


export const routes: Routes = [
    {path:"NameSpace",component:NameSpaceComponent},
    {path:"StorageClass",component:StorageClassComponent}
];
