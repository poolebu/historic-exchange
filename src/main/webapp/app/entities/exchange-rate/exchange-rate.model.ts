
const enum Sistema {
    'NEGRO',
    'CADIVI',
    'CENCOEX',
    'SIMADI'

};
export class ExchangeRate {
    constructor(
        public id?: number,
        public date?: any,
        public fromcurrency?: string,
        public tocurrency?: string,
        public conversionvalue?: number,
        public sistema?: Sistema,
    ) {
    }
}