import { environment } from 'environments/environment';

export interface ApiEndpoint {
  id: string;
  label: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  description?: string;
  headers?: { key: string; value: string }[];
  params?: { key: string; value: string; type: string; required: boolean; description?: string }[];
  body?: any;
  category?: string;
}

export const API_ENDPOINTS: ApiEndpoint[] = [
  {
    id: 'auth-email',
    label: 'API Key Access via Email',
    category: 'AUTHENTICATION',
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
    category: 'IDENTITY VALIDATION',
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
  },
];
