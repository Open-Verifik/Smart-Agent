import type { SmartBatchRow } from '../../smart-batch.service';
import abc123Input from './from-batch-6a1a20b6/abc123/input.json';
import abc123Agreements from './from-batch-6a1a20b6/abc123/simit-agreements.json';
import abc123Sinister from './from-batch-6a1a20b6/abc123/fasecolda-sinister.json';
import abc123Runt from './from-batch-6a1a20b6/abc123/runt-vehicle-by-plate.json';
import abc123Values from './from-batch-6a1a20b6/abc123/fasecolda-values.json';
import abc123SimitTruncated from './abc123-simit-plate-truncated.json';
import ftr223Input from './from-batch-6a1a20b6/ftr223/input.json';
import ftr223Errors from './from-batch-6a1a20b6/ftr223/errors.json';
import ftr223Runt from './from-batch-6a1a20b6/ftr223/runt-vehicle-by-plate.json';
import ftr223Simit from './from-batch-6a1a20b6/ftr223/simit-plate.json';
import ftr223Agreements from './from-batch-6a1a20b6/ftr223/simit-agreements.json';
import ftr223Sinister from './from-batch-6a1a20b6/ftr223/fasecolda-sinister.json';
import hxr704Input from './from-batch-6a1a20b6/hxr704/input.json';
import hxr704Errors from './from-batch-6a1a20b6/hxr704/errors.json';
import hxr704Simit from './from-batch-6a1a20b6/hxr704/simit-plate.json';
import hxr704Agreements from './from-batch-6a1a20b6/hxr704/simit-agreements.json';
import hxr704Sinister from './from-batch-6a1a20b6/hxr704/fasecolda-sinister.json';
import hxr704Values from './from-batch-6a1a20b6/hxr704/fasecolda-values.json';
import mku606Input from './from-batch-6a1a20b6/mku606/input.json';
import mku606Runt from './from-batch-6a1a20b6/mku606/runt-vehicle-by-plate.json';
import mku606Simit from './from-batch-6a1a20b6/mku606/simit-plate.json';
import mku606Agreements from './from-batch-6a1a20b6/mku606/simit-agreements.json';
import mku606Sinister from './from-batch-6a1a20b6/mku606/fasecolda-sinister.json';
import mku606Values from './from-batch-6a1a20b6/mku606/fasecolda-values.json';
import nqu587Input from './from-batch-6a1a20b6/nqu587/input.json';
import nqu587Errors from './from-batch-6a1a20b6/nqu587/errors.json';
import nqu587Simit from './from-batch-6a1a20b6/nqu587/simit-plate.json';
import nqu587Agreements from './from-batch-6a1a20b6/nqu587/simit-agreements.json';
import nqu587Sinister from './from-batch-6a1a20b6/nqu587/fasecolda-sinister.json';
import nqu587Values from './from-batch-6a1a20b6/nqu587/fasecolda-values.json';
import odg78eInput from './from-batch-6a1a20b6/odg78e/input.json';
import odg78eErrors from './from-batch-6a1a20b6/odg78e/errors.json';
import odg78eSimit from './from-batch-6a1a20b6/odg78e/simit-plate.json';
import odg78eAgreements from './from-batch-6a1a20b6/odg78e/simit-agreements.json';
import odg78eSinister from './from-batch-6a1a20b6/odg78e/fasecolda-sinister.json';
import tax121Input from './from-batch-6a1a20b6/tax121/input.json';
import tax121Runt from './from-batch-6a1a20b6/tax121/runt-vehicle-by-plate.json';
import tax121Simit from './from-batch-6a1a20b6/tax121/simit-plate.json';
import tax121Agreements from './from-batch-6a1a20b6/tax121/simit-agreements.json';
import tax121Sinister from './from-batch-6a1a20b6/tax121/fasecolda-sinister.json';
import tax121Values from './from-batch-6a1a20b6/tax121/fasecolda-values.json';
import wol049Input from './from-batch-6a1a20b6/wol049/input.json';
import wol049Errors from './from-batch-6a1a20b6/wol049/errors.json';
import wol049Simit from './from-batch-6a1a20b6/wol049/simit-plate.json';
import wol049Agreements from './from-batch-6a1a20b6/wol049/simit-agreements.json';
import wol049Sinister from './from-batch-6a1a20b6/wol049/fasecolda-sinister.json';
import wol049Values from './from-batch-6a1a20b6/wol049/fasecolda-values.json';

export type BatchExportSlug =
    | 'hxr704'
    | 'mku606'
    | 'odg78e'
    | 'abc123'
    | 'nqu587'
    | 'ftr223'
    | 'wol049'
    | 'tax121';

type RowError = { step: number; message: string; code: string };

const PACKS: Record<
    BatchExportSlug,
    Pick<SmartBatchRow, 'inputData' | 'results' | 'errors'>
> = {
    hxr704: {
        inputData: hxr704Input,
        results: { 2: hxr704Simit, 3: hxr704Agreements, 4: hxr704Sinister, 5: hxr704Values },
        errors: hxr704Errors as RowError[],
    },
    mku606: {
        inputData: mku606Input,
        results: {
            1: mku606Runt,
            2: mku606Simit,
            3: mku606Agreements,
            4: mku606Sinister,
            5: mku606Values,
        },
        errors: [],
    },
    odg78e: {
        inputData: odg78eInput,
        results: { 2: odg78eSimit, 3: odg78eAgreements, 4: odg78eSinister },
        errors: odg78eErrors as RowError[],
    },
    abc123: {
        inputData: abc123Input,
        results: {
            1: abc123Runt,
            2: abc123SimitTruncated,
            3: abc123Agreements,
            4: abc123Sinister,
            5: abc123Values,
        },
        errors: [],
    },
    nqu587: {
        inputData: nqu587Input,
        results: {
            2: nqu587Simit,
            3: nqu587Agreements,
            4: nqu587Sinister,
            5: nqu587Values,
        },
        errors: nqu587Errors as RowError[],
    },
    ftr223: {
        inputData: ftr223Input,
        results: {
            1: ftr223Runt,
            2: ftr223Simit,
            3: ftr223Agreements,
            4: ftr223Sinister,
        },
        errors: ftr223Errors as RowError[],
    },
    wol049: {
        inputData: wol049Input,
        results: {
            2: wol049Simit,
            3: wol049Agreements,
            4: wol049Sinister,
            5: wol049Values,
        },
        errors: wol049Errors as RowError[],
    },
    tax121: {
        inputData: tax121Input,
        results: {
            1: tax121Runt,
            2: tax121Simit,
            3: tax121Agreements,
            4: tax121Sinister,
            5: tax121Values,
        },
        errors: [],
    },
};

export const buildBatchExportRow = (
    slug: BatchExportSlug,
    rowIndex = 0
): Pick<SmartBatchRow, 'rowIndex' | 'inputData' | 'results' | 'errors'> => ({
    rowIndex,
    ...PACKS[slug],
});
