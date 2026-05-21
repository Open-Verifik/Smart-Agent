import { HttpParams } from '@angular/common/http';

/** Builds HttpParams supporting array values (e.g. in_code, in_collections). */
export const toHttpParams = (params: Record<string, unknown>): HttpParams => {
    let out = new HttpParams();

    for (const [key, value] of Object.entries(params)) {
        if (value === undefined || value === null || value === '') continue;

        if (Array.isArray(value)) {
            value.forEach((item) => {
                if (item !== undefined && item !== null && `${item}` !== '') {
                    out = out.append(key, String(item));
                }
            });
            continue;
        }

        out = out.set(key, String(value));
    }

    return out;
};
