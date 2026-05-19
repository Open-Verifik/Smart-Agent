import { BOLIVIA_POSTMAN_SANDBOX_BY_CODE } from './countries/bolivia.postman-sandbox';
import { ARGENTINA_POSTMAN_SANDBOX_BY_CODE } from './countries/argentina.postman-sandbox';
import { CHILE_POSTMAN_SANDBOX_BY_CODE } from './countries/chile.postman-sandbox';
import { COLOMBIA_POSTMAN_SANDBOX_BY_CODE } from './countries/colombia.postman-sandbox';
import { COSTA_RICA_POSTMAN_SANDBOX_BY_CODE } from './countries/costarica.postman-sandbox';
import { ECUADOR_POSTMAN_SANDBOX_BY_CODE } from './countries/ecuador.postman-sandbox';
import { BRAZIL_POSTMAN_SANDBOX_BY_CODE } from './countries/brazil.postman-sandbox';
import { EL_SALVADOR_POSTMAN_SANDBOX_BY_CODE } from './countries/elsalvador.postman-sandbox';
import { GUATEMALA_POSTMAN_SANDBOX_BY_CODE } from './countries/guatemala.postman-sandbox';
import { HONDURAS_POSTMAN_SANDBOX_BY_CODE } from './countries/honduras.postman-sandbox';
import { MEXICO_POSTMAN_SANDBOX_BY_CODE } from './countries/mexico.postman-sandbox';
import { PANAMA_POSTMAN_SANDBOX_BY_CODE } from './countries/panama.postman-sandbox';
import { PARAGUAY_POSTMAN_SANDBOX_BY_CODE } from './countries/paraguay.postman-sandbox';
import { URUGUAY_POSTMAN_SANDBOX_BY_CODE } from './countries/uruguay.postman-sandbox';
import { PERU_POSTMAN_SANDBOX_BY_CODE } from './countries/peru.postman-sandbox';
import { SPAIN_POSTMAN_SANDBOX_BY_CODE } from './countries/spain.postman-sandbox';
import { VENEZUELA_POSTMAN_SANDBOX_BY_CODE } from './countries/venezuela.postman-sandbox';
import { PostmanSandboxEndpointConfig } from './postman-sandbox.types';

export const POSTMAN_SANDBOX_BY_ENDPOINT_CODE: Record<string, PostmanSandboxEndpointConfig> = {
    ...VENEZUELA_POSTMAN_SANDBOX_BY_CODE,
    ...COLOMBIA_POSTMAN_SANDBOX_BY_CODE,
    ...ARGENTINA_POSTMAN_SANDBOX_BY_CODE,
    ...CHILE_POSTMAN_SANDBOX_BY_CODE,
    ...ECUADOR_POSTMAN_SANDBOX_BY_CODE,
    ...COSTA_RICA_POSTMAN_SANDBOX_BY_CODE,
    ...GUATEMALA_POSTMAN_SANDBOX_BY_CODE,
    ...HONDURAS_POSTMAN_SANDBOX_BY_CODE,
    ...PARAGUAY_POSTMAN_SANDBOX_BY_CODE,
    ...MEXICO_POSTMAN_SANDBOX_BY_CODE,
    ...EL_SALVADOR_POSTMAN_SANDBOX_BY_CODE,
    ...BRAZIL_POSTMAN_SANDBOX_BY_CODE,
    ...BOLIVIA_POSTMAN_SANDBOX_BY_CODE,
    ...PANAMA_POSTMAN_SANDBOX_BY_CODE,
    ...URUGUAY_POSTMAN_SANDBOX_BY_CODE,
    ...PERU_POSTMAN_SANDBOX_BY_CODE,
    ...SPAIN_POSTMAN_SANDBOX_BY_CODE,
};
