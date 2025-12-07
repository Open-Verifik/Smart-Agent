import { environment } from 'environments/environment';

export interface ApiEndpoint {
  id: string;
  label: string;
  code?: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  description?: string;
  headers?: { key: string; value: string }[];
  params?: { key: string; value: string; type: string; required: boolean; description?: string }[];
  body?: any;
  category?: string;
  country?: string;
  documentationUrl?: string; // URL to the markdown file
  estimatedCost?: number; // USD cost for x402 payment calculation
}

export const API_ENDPOINTS: ApiEndpoint[] = [
  {
    id: 'auth-email',
    label: 'API Key Access via Email',
    category: 'AUTHENTICATION',
    country: 'world',
    method: 'POST',
    url: `${environment.apiUrl}/v2/projects/email-login`,
    headers: [{ key: 'Accept', value: 'application/json' }],
    params: [
      {
        key: 'email',
        value: '',
        type: 'string',
        required: true,
        description: 'Client email to receive the OTP.',
      },
    ],
  },
  {
    id: 'biometrics-liveness',
    label: 'Liveness Detection',
    category: "BIOMETRICS API'S",
    country: 'world',
    method: 'POST',
    url: `${environment.apiUrl}/v2/face-recognition/liveness`,
    headers: [
      { key: 'Content-Type', value: 'application/json' },
      { key: 'Authorization', value: 'Bearer <token>' },
    ],
    body: {
      os: 'DESKTOP',
      image: '',
      liveness_min_score: 0.6,
    },
  },
  {
    id: 'identity-colombia',
    label: 'Colombian Citizen',
    code: 'colombia_api_identity_lookup',
    category: 'IDENTITY VALIDATION',
    country: 'Colombia',
    method: 'GET',
    url: `${environment.apiUrl}/v2/co/cedula`,
    headers: [
      { key: 'Accept', value: 'application/json' },
      { key: 'Authorization', value: 'Bearer <token>' },
    ],
    params: [
      {
        key: 'documentType',
        value: 'CC',
        type: 'string',
        required: true,
        description: 'One of CC, PPT.',
      },
      {
        key: 'documentNumber',
        value: '',
        type: 'string',
        required: true,
        description: 'Document number.',
      },
    ],
    documentationUrl: 'docs/identity-validation/colombia/colombian-citizen.md',
  },
];
