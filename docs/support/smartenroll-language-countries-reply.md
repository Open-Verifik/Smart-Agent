# Support reply: SmartEnroll language & country configuration

Copy or adapt the text below when responding to customers about SmartEnroll UI language, OTP email language, or country/document catalog setup.

---

Hello,

Thank you for reaching out. Here are answers based on how SmartEnroll works today, including recent improvements for default language and the documents setup experience.

## 1. SmartEnroll UI language (Spanish)

Yes, Spanish is supported for the SmartEnroll onboarding UI.

**Recommended for Venezuela / Spanish-first users:** in SmartEnroll (or SmartAccess) open **Basic setup** and set **Default language** to **Español**. New enrollees who have not chosen a language yet open the flow in Spanish. That same default is also used for OTP emails when the request does not send a `language` value.

Users can still switch language with the **language selector** in the flow; that choice is stored in the browser and reused on later visits.

Priority: saved browser preference → project default language → browser locale → English.

## 2. Verifik email language still English

Updating the email template language to Spanish in the dashboard **does not by itself** set the language of outgoing emails. That control is an **editor tab** for customizing Spanish copy (not the send language).

**What determines OTP / SmartEnroll email language:**

1. The end user’s active UI language when the OTP is requested (the SDK sends `language`), or
2. The project **Default language** when `language` is omitted, or
3. English (`en`) as a last resort.

Spanish system defaults already exist; custom Spanish copy under the Español tab is optional.

**How to get Spanish emails:**

1. Set the project **Default language** to Spanish in Basic setup, **and/or**
2. Have end users run the flow in Spanish (language selector), **or**
3. If you call the API directly, send `language: "es"`.
4. Optionally customize Spanish OTP copy under the Español tab and use **Send Test** on that tab to preview.

Setting the client account language in the Verifik admin alone does **not** drive SmartEnroll OTP emails.

## 3. Country configuration

There are **two different country settings**:

| Setting | Where | What it does | Bulk “all”? |
|---------|--------|--------------|-------------|
| **Allowed countries** | Project basic setup | Who can enroll / geo allow-list | **Yes** — choose **All** (World) |
| **Document countries** | Documents step | Which countries and document types you accept | **No** — add one country block at a time |

### How to enable all supported countries

1. In **Basic setup**, set **Allowed countries** to **All**.
2. In **Documents**, add a country configuration only for countries whose documents you actually want to accept, pick the country, and enable categories that have catalog entries.
3. There is no single toggle that auto-creates document configurations for every country in the catalog.

**Tip:** On the Documents step you now see a summary of how many countries are configured, and you can collapse/expand each country (and long document lists) so multi-country setup stays manageable.

### “No documents found for this country in the catalog (including global)”

That message is **per document category** (Government ID, License, Passport), not for the whole country.

For example, for the **United States**:

- **Government ID** often shows “no documents” because there are no approved US government-ID templates in the catalog (including global).
- **License** is where US **state driver licenses** live. Enable **License** and select the states you need (the full catalog loads; categories with templates are listed first).
- **Passport** may show the global (World) passport template when available.

Leave categories that show the empty-catalog message **inactive**. Only enable categories that list available documents. When a category is empty, the UI may suggest which other categories for that country do have documents.

### “Some country configurations are incomplete / Pick a country for every configuration”

This usually means:

- An **Add country** row was added but no country was selected, or
- A category was turned on with no valid document templates selected.

**Fix:**

1. Remove empty country rows, or select a country on every row.
2. Only enable categories that show available documents.
3. Ensure at least one active category has valid templates selected.
4. Do not enable a category that still shows the empty-catalog message.

Incomplete countries are highlighted in the summary so they are easier to find and finish.

If you need help enabling a specific country or document type, tell us which countries and categories you need and we can confirm catalog coverage.

Best regards,  
Verifik Support
