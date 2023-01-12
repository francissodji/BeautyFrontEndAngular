import { Routes } from '@angular/router';
import { CustomModule } from '../../views/booking/custom/custom.module';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [

    {
        path: 'company',
        loadChildren: () => import('../../views/company/company.module').then(m => m.CompanyModule)
    },
    //************** Booking
    {
        path: 'booksetting',
        loadChildren: () => import('../../views/booking/settings/settings.module').then(m => m.SettingsModule)
    },
    {
        path: 'bookcustom',
        loadChildren: () => import('../../views/booking/custom/custom.module').then(m => m.CustomModule)
    },
    //************* Finance
    /*
    {
        path: 'bookingsetting',
        loadChildren: () => import('../../views/booking/settings/settings.module').then(m => m.SettingsModule)
    },
    {
        path: 'bookingcustom',
        loadChildren: () => import('../../views/booking/custom/custom.module').then(m => m.CustomModule)
    },
    */
   //************** Stock
    /*
    {
        path: 'bookingsetting',
        loadChildren: () => import('../../views/booking/settings/settings.module').then(m => m.SettingsModule)
    },
    {
        path: 'bookingcustom',
        loadChildren: () => import('../../views/booking/custom/custom.module').then(m => m.CustomModule)
    },
    */
   //************************************ */
    
    /*
    {
        path: 'error',
        loadChildren: () => import('./../../error/error.module').then(m => m.ErrorModule)
    },
    */
];