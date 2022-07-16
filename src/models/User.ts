
export class User{
    IDUser: number = 0;
    Email: string  = '';
    Username: string  = '';
    PasswordHash: string  = '';
    Dateuserexpire: Date  = new Date('01/01/1900');
    Connectstate: boolean  = false;
    IdProfil: number  = 0;
    token: string  = '';
    
}