import { Pet } from './pet';

export interface Foundation {
    id: string;
    name: string;
    mission: string;
    history: string;
    contact: [
        {
            name: string;
            cellphone: string;
            email: string;
        }
    ],
    socialNetworks: {
        website: string;
        instagram: string;
        whatsapp: string;
        facebook: string;
    }
    bankAccounts: [{
        bank: string;
        accountNumber: string;
        accountType: string;
    }]
    pets: Pet[];
}