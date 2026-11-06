import { endpointsNotInAccountCodes } from './account-endpoint-access.util';

describe('endpointsNotInAccountCodes', () => {
    it('reads the codes from an API error', () => {
        expect(
            endpointsNotInAccountCodes({
                error: { message: 'endpoints_not_in_account colombia_api_runt_owners,colombia_api_simit_plate' },
            })
        ).toBe('colombia_api_runt_owners,colombia_api_simit_plate');
    });

    it('ignores other failures', () => {
        expect(endpointsNotInAccountCodes({ error: { message: 'batch_not_found' } })).toBeNull();
    });
});
