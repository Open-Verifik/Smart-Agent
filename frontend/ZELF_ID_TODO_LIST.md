# Zelf ID & KYC Flows Implementation Plan

## Overview

This plan outlines the steps to implement the "Zelf ID" user flow and "KYC Flows" configuration menu in the Smart-Agent application, matching the functionality of the Verifik SmartEnroll process.

## 1. Services & Core setup

We need to port or implement necessary services to interact with the Verifik Backend APIs.

- [ ] **Create `VerifikApiService`**:

  - Centralize API calls to `https://verifik.app` (or configured backend).
  - Implement methods:
    - `requestProject(projectId: string)`
    - `getAppRegistration(params: any)`
    - `createAppRegistration(data: any)`
    - `validateContact(id: string, type: 'email'|'phone', code?: string)`
    - `uploadDocument(file: File, side: string)`
    - `verifyLiveness(video: Blob)`
    - `compareFace(docFace: string, selfie: string)`

- [ ] **Port Models/Interfaces**:
  - `Project`
  - `ProjectFlow`
  - `AppRegistration`
  - `OnboardingSettings`

## 2. KYC Flows Menu (Configuration)

A new module to manage Projects and Project Flows.

- [ ] **Create `KycFlowsModule`**:

  - Route: `/kyc-flows`
  - Component: `KycFlowsListComponent`
  - Component: `KycFlowDetailComponent` (Edit/Create)

- [ ] **List View**:

  - Fetch Projects/Flows using `verifik-backend/Repositories/ProjectFlows`.
  - Display table with ID, Name, CreatedAt.

- [ ] **Editor View**:
  - Form to configure `onboardingSettings`:
    - Email Verification (Enabled/Gateway)
    - Phone Verification (Enabled/Gateway)
    - Document Validation Requirements.
    - Biometric Requirements.

## 3. Zelf ID Menu (User Flow)

A new module for the end-user KYC experience, specific to Project `6266193db77ccc8111730c90`.

- [ ] **Create `ZelfIdModule`**:

  - Route: `/zelf-id`
  - Component: `ZelfIdComponent` (Container)

- [ ] **Step 1: Initialization**:

  - Auto-load Project `6266193db77ccc8111730c90`.
  - Determine required steps from `projectFlow`.

- [ ] **Step 2: Registration Form**:

  - Inputs: First Name, Last Name, Email, Phone.
  - Action: Create `AppRegistration`.

- [ ] **Step 3: Contact Validation (OTP)**:

  - UI for entering Email/Phone OTPs.
  - Logic to request and verify codes.

- [ ] **Step 4: Document Validation**:

  - UI to select Document Type (Passport, ID, License).
  - Camera capture / file upload for Front/Back.
  - Call OCR/Validation endpoint.

- [ ] **Step 5: Biometrics**:

  - **Liveness**: Record short video/selfie.
  - **Face Match**: Verify Selfie against Document Face.

- [ ] **Step 6: Completion**:
  - Display Success/Failure result.

## 4. Navigation

- [ ] Add "Zelf ID" and "KYC Flows" to the main side navigation.
  - Zelf ID: Before "History".
  - KYC Flows: Admin section?

## References

- `sign-up.component.ts` (Logic flow)
- `projectFlow.controller.js` (Config data)
