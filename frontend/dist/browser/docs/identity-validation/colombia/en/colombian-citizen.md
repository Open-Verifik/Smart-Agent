### Headers

| Name          | Value              |
| ------------- | ------------------ |
| Accept        | `application/json` |
| Authorization | `Bearer <token>`   |

### Parameters

| Name             | Type   | Required | Description                          |
| ---------------- | ------ | -------- | ------------------------------------ |
| `documentType`   | string | Yes      | One of `CC`, `PPT`.                  |
| `documentNumber` | string | Yes      | Document number (no spaces or dots). |

### Notes

- Use `documentType=CC` for Citizenship Card; `PPT` for Temporary Protection Permit.

---

### Identity Verification in Colombia

Verifik's Identity Verification API helps you authenticate Colombian citizens using official government data. It's designed to streamline your KYC (Know Your Customer) processes, prevent fraud, and ensure you meet all regulatory requirements effortlessly.

We built this integration for businesses that need a fast, secure, and automated way to confirm the true identity of users, employees, or customers.

### What does this API validate?

Our API connects directly with official records to validate:

- **Full Name & ID Number**: Supports _Cédula de Ciudadanía_ and _Cédula de Extranjería_.
- **Document Status**: Checks the current status in the _Registraduría Nacional del Estado Civil_ database.
- **Issuance & Validity**: Verifies the date of issuance and whether the document is currently valid.
- **Identity Match**: Confirms that the name provided matches the ID number.

By verifying these details, you can be confident that the person you're dealing with is real and holds a valid document, significantly lowering the risk of impersonation and fraud.

### Common Use Cases

- **Fintech & Banking**: Verify identities instantly during account opening or loan applications.
- **E-commerce & Delivery**: Authenticate users and couriers before they become active on your platform.
- **HR & Recruitment**: Validate candidate documents as part of your hiring workflow.
- **Insurance & Healthcare**: Confirm identities before issuing policies or providing medical benefits.

### Official Sources & Reliability

We connect directly with Colombia's _Registraduría Nacional del Estado Civil_ to ensure you receive verified, up-to-the-minute information.
Every query is handled with strict adherence to security and regulatory standards, including:

- **Law 1581 of 2012** (Personal Data Protection)
- **KYC/AML Circulars** from the UIAF and Financial Superintendence of Colombia

### Key Benefits

- **Automated Compliance**: Streamline your KYC checks to prevent fraud without adding friction for your users.
- **Instant Results**: Process verifications in seconds, perfect for real-time digital onboarding.
- **Trusted Data**: Rely on data sourced directly from the Colombian government.
- **Easy Integration**: Connect easily via our REST API or use our compatible SDKs.
