import { Cat } from "./cat.entity";

export const catProviders = [
    {
        provide: 'CATS_REPOSITORY',
        useValue: Cat
    }
]