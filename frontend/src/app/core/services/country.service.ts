import { Injectable } from '@angular/core';

export interface CountryOption {
  name: string;
  code: string;
  country: string;
}

export interface CountryDialCode {
  dialCode: string;
  countryCode: string;
  name: string;
  flag: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _countryMap = new Map<string, CountryOption>();
  private _dialCodeMap = new Map<string, CountryDialCode>();

  constructor() {
    this.countries.forEach((country) => {
      if (this._countryMap.has(country.country)) return;

      this._countryMap.set(country.country, country);
    });

    // Build dial code map for quick lookups
    this.countryDialCodes.forEach((country) => {
      this._dialCodeMap.set(country.dialCode, country);
    });
  }

  /**
   * Countries that can be used as "allowed countries" for an enrollment project,
   * including the synthetic "World" entry that means every country is allowed.
   */
  get ipCountries(): CountryOption[] {
    return this.countries.filter((c) => c.country !== 'World').concat([
      { name: 'country_name.world', code: 'world', country: 'All' },
    ]);
  }

  /** Plain country list (alias of `countries`). */
  get worldCountries(): CountryOption[] {
    return this.countries;
  }

  getCountryByDialCode(dialCode: string): CountryDialCode | undefined {
    return this._dialCodeMap.get(dialCode);
  }

  /**
   * Filters dial-code rows by country name, dial code digits/symbols, or ISO country code.
   */
  filterCountryDialCodes(codes: CountryDialCode[], term: string): CountryDialCode[] {
    const t = term.trim();
    if (!t) {
      return [...codes];
    }
    const lower = t.toLowerCase();
    return codes.filter(
      (country) =>
        country.name.toLowerCase().includes(lower) ||
        country.dialCode.includes(t) ||
        country.countryCode.toLowerCase().includes(lower),
    );
  }

  detectCountryFromPhoneNumber(phoneNumber: string): CountryDialCode | null {
    // Remove all non-digit characters except +
    const cleaned = phoneNumber.replace(/[^\d+]/g, '');

    // Try to match dial codes (longest first to avoid partial matches)
    const sortedCodes = [...this.countryDialCodes].sort(
      (a, b) => b.dialCode.replace('+', '').length - a.dialCode.replace('+', '').length,
    );

    for (const country of sortedCodes) {
      const dialCodeDigits = country.dialCode.replace('+', '');
      if (cleaned.startsWith('+' + dialCodeDigits) || cleaned.startsWith(dialCodeDigits)) {
        return country;
      }
    }

    return null;
  }

  get countries(): CountryOption[] {
    return [
      { name: 'country_name.world', code: 'world', country: 'World' },
      { name: 'country_name.afghanistan', code: 'af', country: 'Afghanistan' },
      { name: 'country_name.albania', code: 'al', country: 'Albania' },
      { name: 'country_name.algeria', code: 'dz', country: 'Algeria' },
      { name: 'country_name.andorra', code: 'ad', country: 'Andorra' },
      { name: 'country_name.angola', code: 'ao', country: 'Angola' },
      { name: 'country_name.antigua_and_barbuda', code: 'ag', country: 'Antigua and Barbuda' },
      { name: 'country_name.argentina', code: 'ar', country: 'Argentina' },
      { name: 'country_name.armenia', code: 'am', country: 'Armenia' },
      { name: 'country_name.australia', code: 'au', country: 'Australia' },
      { name: 'country_name.austria', code: 'at', country: 'Austria' },
      { name: 'country_name.azerbaijan', code: 'az', country: 'Azerbaijan' },
      { name: 'country_name.bahamas', code: 'bs', country: 'Bahamas' },
      { name: 'country_name.bahrain', code: 'bh', country: 'Bahrain' },
      { name: 'country_name.bangladesh', code: 'bd', country: 'Bangladesh' },
      { name: 'country_name.barbados', code: 'bb', country: 'Barbados' },
      { name: 'country_name.belarus', code: 'by', country: 'Belarus' },
      { name: 'country_name.belgium', code: 'be', country: 'Belgium' },
      { name: 'country_name.belize', code: 'bz', country: 'Belize' },
      { name: 'country_name.benin', code: 'bj', country: 'Benin' },
      { name: 'country_name.bhutan', code: 'bt', country: 'Bhutan' },
      { name: 'country_name.bolivia', code: 'bo', country: 'Bolivia' },
      {
        name: 'country_name.bosnia_and_herzegovina',
        code: 'ba',
        country: 'Bosnia and Herzegovina',
      },
      { name: 'country_name.botswana', code: 'bw', country: 'Botswana' },
      { name: 'country_name.brazil', code: 'br', country: 'Brazil' },
      { name: 'country_name.brunei', code: 'bn', country: 'Brunei' },
      { name: 'country_name.bulgaria', code: 'bg', country: 'Bulgaria' },
      { name: 'country_name.burkina_faso', code: 'bf', country: 'Burkina Faso' },
      { name: 'country_name.burundi', code: 'bi', country: 'Burundi' },
      { name: 'country_name.cambodia', code: 'kh', country: 'Cambodia' },
      { name: 'country_name.cameroon', code: 'cm', country: 'Cameroon' },
      { name: 'country_name.canada', code: 'ca', country: 'Canada' },
      { name: 'country_name.cape_verde', code: 'cv', country: 'Cape Verde' },
      {
        name: 'country_name.central_african_republic',
        code: 'cf',
        country: 'Central African Republic',
      },
      { name: 'country_name.chad', code: 'td', country: 'Chad' },
      { name: 'country_name.chile', code: 'cl', country: 'Chile' },
      { name: 'country_name.china', code: 'cn', country: 'China' },
      { name: 'country_name.colombia', code: 'co', country: 'Colombia' },
      { name: 'country_name.comoros', code: 'km', country: 'Comoros' },
      { name: 'country_name.congo', code: 'cg', country: 'Congo' },
      { name: 'country_name.costa_rica', code: 'cr', country: 'Costa Rica' },
      { name: 'country_name.croatia', code: 'hr', country: 'Croatia' },
      { name: 'country_name.cuba', code: 'cu', country: 'Cuba' },
      { name: 'country_name.cyprus', code: 'cy', country: 'Cyprus' },
      { name: 'country_name.czech_republic', code: 'cz', country: 'Czech Republic' },
      { name: 'country_name.denmark', code: 'dk', country: 'Denmark' },
      { name: 'country_name.djibouti', code: 'dj', country: 'Djibouti' },
      { name: 'country_name.dominica', code: 'dm', country: 'Dominica' },
      { name: 'country_name.dominican_republic', code: 'do', country: 'Dominican Republic' },
      { name: 'country_name.ecuador', code: 'ec', country: 'Ecuador' },
      { name: 'country_name.egypt', code: 'eg', country: 'Egypt' },
      { name: 'country_name.el_salvador', code: 'sv', country: 'El Salvador' },
      { name: 'country_name.equatorial_guinea', code: 'gq', country: 'Equatorial Guinea' },
      { name: 'country_name.eritrea', code: 'er', country: 'Eritrea' },
      { name: 'country_name.estonia', code: 'ee', country: 'Estonia' },
      { name: 'country_name.eswatini', code: 'sz', country: 'Eswatini' },
      { name: 'country_name.ethiopia', code: 'et', country: 'Ethiopia' },
      { name: 'country_name.fiji', code: 'fj', country: 'Fiji' },
      { name: 'country_name.finland', code: 'fi', country: 'Finland' },
      { name: 'country_name.france', code: 'fr', country: 'France' },
      { name: 'country_name.gabon', code: 'ga', country: 'Gabon' },
      { name: 'country_name.gambia', code: 'gm', country: 'Gambia' },
      { name: 'country_name.georgia', code: 'ge', country: 'Georgia' },
      { name: 'country_name.germany', code: 'de', country: 'Germany' },
      { name: 'country_name.ghana', code: 'gh', country: 'Ghana' },
      { name: 'country_name.greece', code: 'gr', country: 'Greece' },
      { name: 'country_name.grenada', code: 'gd', country: 'Grenada' },
      { name: 'country_name.guatemala', code: 'gt', country: 'Guatemala' },
      { name: 'country_name.guinea', code: 'gn', country: 'Guinea' },
      { name: 'country_name.guinea_bissau', code: 'gw', country: 'Guinea-Bissau' },
      { name: 'country_name.guyana', code: 'gy', country: 'Guyana' },
      { name: 'country_name.haiti', code: 'ht', country: 'Haiti' },
      { name: 'country_name.honduras', code: 'hn', country: 'Honduras' },
      { name: 'country_name.hungary', code: 'hu', country: 'Hungary' },
      { name: 'country_name.iceland', code: 'is', country: 'Iceland' },
      { name: 'country_name.india', code: 'in', country: 'India' },
      { name: 'country_name.indonesia', code: 'id', country: 'Indonesia' },
      { name: 'country_name.iran', code: 'ir', country: 'Iran' },
      { name: 'country_name.iraq', code: 'iq', country: 'Iraq' },
      { name: 'country_name.ireland', code: 'ie', country: 'Ireland' },
      { name: 'country_name.israel', code: 'il', country: 'Israel' },
      { name: 'country_name.italy', code: 'it', country: 'Italy' },
      { name: 'country_name.jamaica', code: 'jm', country: 'Jamaica' },
      { name: 'country_name.japan', code: 'jp', country: 'Japan' },
      { name: 'country_name.jordan', code: 'jo', country: 'Jordan' },
      { name: 'country_name.kazakhstan', code: 'kz', country: 'Kazakhstan' },
      { name: 'country_name.kenya', code: 'ke', country: 'Kenya' },
      { name: 'country_name.kiribati', code: 'ki', country: 'Kiribati' },
      { name: 'country_name.kuwait', code: 'kw', country: 'Kuwait' },
      { name: 'country_name.kyrgyzstan', code: 'kg', country: 'Kyrgyzstan' },
      { name: 'country_name.laos', code: 'la', country: 'Laos' },
      { name: 'country_name.latvia', code: 'lv', country: 'Latvia' },
      { name: 'country_name.lebanon', code: 'lb', country: 'Lebanon' },
      { name: 'country_name.lesotho', code: 'ls', country: 'Lesotho' },
      { name: 'country_name.liberia', code: 'lr', country: 'Liberia' },
      { name: 'country_name.libya', code: 'ly', country: 'Libya' },
      { name: 'country_name.liechtenstein', code: 'li', country: 'Liechtenstein' },
      { name: 'country_name.lithuania', code: 'lt', country: 'Lithuania' },
      { name: 'country_name.luxembourg', code: 'lu', country: 'Luxembourg' },
      { name: 'country_name.madagascar', code: 'mg', country: 'Madagascar' },
      { name: 'country_name.malawi', code: 'mw', country: 'Malawi' },
      { name: 'country_name.malaysia', code: 'my', country: 'Malaysia' },
      { name: 'country_name.maldives', code: 'mv', country: 'Maldives' },
      { name: 'country_name.mali', code: 'ml', country: 'Mali' },
      { name: 'country_name.malta', code: 'mt', country: 'Malta' },
      { name: 'country_name.marshall_islands', code: 'mh', country: 'Marshall Islands' },
      { name: 'country_name.mauritania', code: 'mr', country: 'Mauritania' },
      { name: 'country_name.mauritius', code: 'mu', country: 'Mauritius' },
      { name: 'country_name.mexico', code: 'mx', country: 'Mexico' },
      { name: 'country_name.micronesia', code: 'fm', country: 'Micronesia' },
      { name: 'country_name.moldova', code: 'md', country: 'Moldova' },
      { name: 'country_name.monaco', code: 'mc', country: 'Monaco' },
      { name: 'country_name.mongolia', code: 'mn', country: 'Mongolia' },
      { name: 'country_name.montenegro', code: 'me', country: 'Montenegro' },
      { name: 'country_name.morocco', code: 'ma', country: 'Morocco' },
      { name: 'country_name.mozambique', code: 'mz', country: 'Mozambique' },
      { name: 'country_name.myanmar', code: 'mm', country: 'Myanmar' },
      { name: 'country_name.namibia', code: 'na', country: 'Namibia' },
      { name: 'country_name.nauru', code: 'nr', country: 'Nauru' },
      { name: 'country_name.nepal', code: 'np', country: 'Nepal' },
      { name: 'country_name.netherlands', code: 'nl', country: 'Netherlands' },
      { name: 'country_name.new_zealand', code: 'nz', country: 'New Zealand' },
      { name: 'country_name.nicaragua', code: 'ni', country: 'Nicaragua' },
      { name: 'country_name.niger', code: 'ne', country: 'Niger' },
      { name: 'country_name.nigeria', code: 'ng', country: 'Nigeria' },
      { name: 'country_name.north_korea', code: 'kp', country: 'North Korea' },
      { name: 'country_name.north_macedonia', code: 'mk', country: 'North Macedonia' },
      { name: 'country_name.norway', code: 'no', country: 'Norway' },
      { name: 'country_name.oman', code: 'om', country: 'Oman' },
      { name: 'country_name.pakistan', code: 'pk', country: 'Pakistan' },
      { name: 'country_name.palau', code: 'pw', country: 'Palau' },
      { name: 'country_name.palestine', code: 'ps', country: 'Palestine' },
      { name: 'country_name.panama', code: 'pa', country: 'Panama' },
      { name: 'country_name.papua_new_guinea', code: 'pg', country: 'Papua New Guinea' },
      { name: 'country_name.paraguay', code: 'py', country: 'Paraguay' },
      { name: 'country_name.peru', code: 'pe', country: 'Peru' },
      { name: 'country_name.philippines', code: 'ph', country: 'Philippines' },
      { name: 'country_name.poland', code: 'pl', country: 'Poland' },
      { name: 'country_name.portugal', code: 'pt', country: 'Portugal' },
      { name: 'country_name.qatar', code: 'qa', country: 'Qatar' },
      { name: 'country_name.romania', code: 'ro', country: 'Romania' },
      { name: 'country_name.russia', code: 'ru', country: 'Russia' },
      { name: 'country_name.rwanda', code: 'rw', country: 'Rwanda' },
      { name: 'country_name.saint_kitts_and_nevis', code: 'kn', country: 'Saint Kitts and Nevis' },
      { name: 'country_name.saint_lucia', code: 'lc', country: 'Saint Lucia' },
      {
        name: 'country_name.saint_vincent_and_the_grenadines',
        code: 'vc',
        country: 'Saint Vincent and the Grenadines',
      },
      { name: 'country_name.samoa', code: 'ws', country: 'Samoa' },
      { name: 'country_name.san_marino', code: 'sm', country: 'San Marino' },
      { name: 'country_name.sao_tome_and_principe', code: 'st', country: 'Sao Tome and Principe' },
      { name: 'country_name.saudi_arabia', code: 'sa', country: 'Saudi Arabia' },
      { name: 'country_name.senegal', code: 'sn', country: 'Senegal' },
      { name: 'country_name.serbia', code: 'rs', country: 'Serbia' },
      { name: 'country_name.seychelles', code: 'sc', country: 'Seychelles' },
      { name: 'country_name.sierra_leone', code: 'sl', country: 'Sierra Leone' },
      { name: 'country_name.singapore', code: 'sg', country: 'Singapore' },
      { name: 'country_name.slovakia', code: 'sk', country: 'Slovakia' },
      { name: 'country_name.slovenia', code: 'si', country: 'Slovenia' },
      { name: 'country_name.solomon_islands', code: 'sb', country: 'Solomon Islands' },
      { name: 'country_name.somalia', code: 'so', country: 'Somalia' },
      { name: 'country_name.south_africa', code: 'za', country: 'South Africa' },
      { name: 'country_name.south_korea', code: 'kr', country: 'South Korea' },
      { name: 'country_name.south_sudan', code: 'ss', country: 'South Sudan' },
      { name: 'country_name.spain', code: 'es', country: 'Spain' },
      { name: 'country_name.sri_lanka', code: 'lk', country: 'Sri Lanka' },
      { name: 'country_name.sudan', code: 'sd', country: 'Sudan' },
      { name: 'country_name.suriname', code: 'sr', country: 'Suriname' },
      { name: 'country_name.sweden', code: 'se', country: 'Sweden' },
      { name: 'country_name.switzerland', code: 'ch', country: 'Switzerland' },
      { name: 'country_name.syria', code: 'sy', country: 'Syria' },
      { name: 'country_name.taiwan', code: 'tw', country: 'Taiwan' },
      { name: 'country_name.tajikistan', code: 'tj', country: 'Tajikistan' },
      { name: 'country_name.tanzania', code: 'tz', country: 'Tanzania' },
      { name: 'country_name.thailand', code: 'th', country: 'Thailand' },
      { name: 'country_name.timor_leste', code: 'tl', country: 'Timor-Leste' },
      { name: 'country_name.togo', code: 'tg', country: 'Togo' },
      { name: 'country_name.tonga', code: 'to', country: 'Tonga' },
      { name: 'country_name.trinidad_and_tobago', code: 'tt', country: 'Trinidad and Tobago' },
      { name: 'country_name.tunisia', code: 'tn', country: 'Tunisia' },
      { name: 'country_name.turkey', code: 'tr', country: 'Turkey' },
      { name: 'country_name.turkmenistan', code: 'tm', country: 'Turkmenistan' },
      { name: 'country_name.tuvalu', code: 'tv', country: 'Tuvalu' },
      { name: 'country_name.uganda', code: 'ug', country: 'Uganda' },
      { name: 'country_name.ukraine', code: 'ua', country: 'Ukraine' },
      { name: 'country_name.united_arab_emirates', code: 'ae', country: 'United Arab Emirates' },
      { name: 'country_name.united_kingdom', code: 'gb', country: 'United Kingdom' },
      { name: 'country_name.united_states', code: 'us', country: 'United States' },
      { name: 'country_name.uruguay', code: 'uy', country: 'Uruguay' },
      { name: 'country_name.uzbekistan', code: 'uz', country: 'Uzbekistan' },
      { name: 'country_name.vanuatu', code: 'vu', country: 'Vanuatu' },
      { name: 'country_name.venezuela', code: 've', country: 'Venezuela' },
      { name: 'country_name.vietnam', code: 'vn', country: 'Vietnam' },
      { name: 'country_name.yemen', code: 'ye', country: 'Yemen' },
      { name: 'country_name.zambia', code: 'zm', country: 'Zambia' },
      { name: 'country_name.zimbabwe', code: 'zw', country: 'Zimbabwe' },
    ];
  }

  get countryDialCodes(): CountryDialCode[] {
    return [
      { dialCode: '+1', countryCode: 'us', name: 'United States', flag: '🇺🇸' },
      { dialCode: '+1', countryCode: 'ca', name: 'Canada', flag: '🇨🇦' },
      { dialCode: '+52', countryCode: 'mx', name: 'Mexico', flag: '🇲🇽' },
      { dialCode: '+57', countryCode: 'co', name: 'Colombia', flag: '🇨🇴' },
      { dialCode: '+54', countryCode: 'ar', name: 'Argentina', flag: '🇦🇷' },
      { dialCode: '+56', countryCode: 'cl', name: 'Chile', flag: '🇨🇱' },
      { dialCode: '+55', countryCode: 'br', name: 'Brazil', flag: '🇧🇷' },
      { dialCode: '+51', countryCode: 'pe', name: 'Peru', flag: '🇵🇪' },
      { dialCode: '+58', countryCode: 've', name: 'Venezuela', flag: '🇻🇪' },
      { dialCode: '+593', countryCode: 'ec', name: 'Ecuador', flag: '🇪🇨' },
      { dialCode: '+591', countryCode: 'bo', name: 'Bolivia', flag: '🇧🇴' },
      { dialCode: '+595', countryCode: 'py', name: 'Paraguay', flag: '🇵🇾' },
      { dialCode: '+598', countryCode: 'uy', name: 'Uruguay', flag: '🇺🇾' },
      { dialCode: '+507', countryCode: 'pa', name: 'Panama', flag: '🇵🇦' },
      { dialCode: '+506', countryCode: 'cr', name: 'Costa Rica', flag: '🇨🇷' },
      { dialCode: '+505', countryCode: 'ni', name: 'Nicaragua', flag: '🇳🇮' },
      { dialCode: '+504', countryCode: 'hn', name: 'Honduras', flag: '🇭🇳' },
      { dialCode: '+503', countryCode: 'sv', name: 'El Salvador', flag: '🇸🇻' },
      { dialCode: '+502', countryCode: 'gt', name: 'Guatemala', flag: '🇬🇹' },
      { dialCode: '+44', countryCode: 'gb', name: 'United Kingdom', flag: '🇬🇧' },
      { dialCode: '+33', countryCode: 'fr', name: 'France', flag: '🇫🇷' },
      { dialCode: '+49', countryCode: 'de', name: 'Germany', flag: '🇩🇪' },
      { dialCode: '+39', countryCode: 'it', name: 'Italy', flag: '🇮🇹' },
      { dialCode: '+34', countryCode: 'es', name: 'Spain', flag: '🇪🇸' },
      { dialCode: '+31', countryCode: 'nl', name: 'Netherlands', flag: '🇳🇱' },
      { dialCode: '+46', countryCode: 'se', name: 'Sweden', flag: '🇸🇪' },
      { dialCode: '+47', countryCode: 'no', name: 'Norway', flag: '🇳🇴' },
      { dialCode: '+45', countryCode: 'dk', name: 'Denmark', flag: '🇩🇰' },
      { dialCode: '+358', countryCode: 'fi', name: 'Finland', flag: '🇫🇮' },
      { dialCode: '+41', countryCode: 'ch', name: 'Switzerland', flag: '🇨🇭' },
      { dialCode: '+43', countryCode: 'at', name: 'Austria', flag: '🇦🇹' },
      { dialCode: '+32', countryCode: 'be', name: 'Belgium', flag: '🇧🇪' },
      { dialCode: '+351', countryCode: 'pt', name: 'Portugal', flag: '🇵🇹' },
      { dialCode: '+353', countryCode: 'ie', name: 'Ireland', flag: '🇮🇪' },
      { dialCode: '+7', countryCode: 'ru', name: 'Russia', flag: '🇷🇺' },
      { dialCode: '+48', countryCode: 'pl', name: 'Poland', flag: '🇵🇱' },
      { dialCode: '+420', countryCode: 'cz', name: 'Czech Republic', flag: '🇨🇿' },
      { dialCode: '+421', countryCode: 'sk', name: 'Slovakia', flag: '🇸🇰' },
      { dialCode: '+36', countryCode: 'hu', name: 'Hungary', flag: '🇭🇺' },
      { dialCode: '+40', countryCode: 'ro', name: 'Romania', flag: '🇷🇴' },
      { dialCode: '+359', countryCode: 'bg', name: 'Bulgaria', flag: '🇧🇬' },
      { dialCode: '+30', countryCode: 'gr', name: 'Greece', flag: '🇬🇷' },
      { dialCode: '+385', countryCode: 'hr', name: 'Croatia', flag: '🇭🇷' },
      { dialCode: '+386', countryCode: 'si', name: 'Slovenia', flag: '🇸🇮' },
      { dialCode: '+387', countryCode: 'ba', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
      { dialCode: '+381', countryCode: 'rs', name: 'Serbia', flag: '🇷🇸' },
      { dialCode: '+382', countryCode: 'me', name: 'Montenegro', flag: '🇲🇪' },
      { dialCode: '+389', countryCode: 'mk', name: 'North Macedonia', flag: '🇲🇰' },
      { dialCode: '+355', countryCode: 'al', name: 'Albania', flag: '🇦🇱' },
      { dialCode: '+380', countryCode: 'ua', name: 'Ukraine', flag: '🇺🇦' },
      { dialCode: '+375', countryCode: 'by', name: 'Belarus', flag: '🇧🇾' },
      { dialCode: '+373', countryCode: 'md', name: 'Moldova', flag: '🇲🇩' },
      { dialCode: '+370', countryCode: 'lt', name: 'Lithuania', flag: '🇱🇹' },
      { dialCode: '+371', countryCode: 'lv', name: 'Latvia', flag: '🇱🇻' },
      { dialCode: '+372', countryCode: 'ee', name: 'Estonia', flag: '🇪🇪' },
      { dialCode: '+354', countryCode: 'is', name: 'Iceland', flag: '🇮🇸' },
      { dialCode: '+352', countryCode: 'lu', name: 'Luxembourg', flag: '🇱🇺' },
      { dialCode: '+356', countryCode: 'mt', name: 'Malta', flag: '🇲🇹' },
      { dialCode: '+357', countryCode: 'cy', name: 'Cyprus', flag: '🇨🇾' },
      { dialCode: '+86', countryCode: 'cn', name: 'China', flag: '🇨🇳' },
      { dialCode: '+81', countryCode: 'jp', name: 'Japan', flag: '🇯🇵' },
      { dialCode: '+82', countryCode: 'kr', name: 'South Korea', flag: '🇰🇷' },
      { dialCode: '+91', countryCode: 'in', name: 'India', flag: '🇮🇳' },
      { dialCode: '+62', countryCode: 'id', name: 'Indonesia', flag: '🇮🇩' },
      { dialCode: '+60', countryCode: 'my', name: 'Malaysia', flag: '🇲🇾' },
      { dialCode: '+66', countryCode: 'th', name: 'Thailand', flag: '🇹🇭' },
      { dialCode: '+63', countryCode: 'ph', name: 'Philippines', flag: '🇵🇭' },
      { dialCode: '+92', countryCode: 'pk', name: 'Pakistan', flag: '🇵🇰' },
      { dialCode: '+65', countryCode: 'sg', name: 'Singapore', flag: '🇸🇬' },
      { dialCode: '+880', countryCode: 'bd', name: 'Bangladesh', flag: '🇧🇩' },
      { dialCode: '+94', countryCode: 'lk', name: 'Sri Lanka', flag: '🇱🇰' },
      { dialCode: '+977', countryCode: 'np', name: 'Nepal', flag: '🇳🇵' },
      { dialCode: '+93', countryCode: 'af', name: 'Afghanistan', flag: '🇦🇫' },
      { dialCode: '+98', countryCode: 'ir', name: 'Iran', flag: '🇮🇷' },
      { dialCode: '+964', countryCode: 'iq', name: 'Iraq', flag: '🇮🇶' },
      { dialCode: '+90', countryCode: 'tr', name: 'Turkey', flag: '🇹🇷' },
      { dialCode: '+971', countryCode: 'ae', name: 'United Arab Emirates', flag: '🇦🇪' },
      { dialCode: '+966', countryCode: 'sa', name: 'Saudi Arabia', flag: '🇸🇦' },
      { dialCode: '+974', countryCode: 'qa', name: 'Qatar', flag: '🇶🇦' },
      { dialCode: '+973', countryCode: 'bh', name: 'Bahrain', flag: '🇧🇭' },
      { dialCode: '+965', countryCode: 'kw', name: 'Kuwait', flag: '🇰🇼' },
      { dialCode: '+968', countryCode: 'om', name: 'Oman', flag: '🇴🇲' },
      { dialCode: '+972', countryCode: 'il', name: 'Israel', flag: '🇮🇱' },
      { dialCode: '+970', countryCode: 'ps', name: 'Palestine', flag: '🇵🇸' },
      { dialCode: '+961', countryCode: 'lb', name: 'Lebanon', flag: '🇱🇧' },
      { dialCode: '+962', countryCode: 'jo', name: 'Jordan', flag: '🇯🇴' },
      { dialCode: '+963', countryCode: 'sy', name: 'Syria', flag: '🇸🇾' },
      { dialCode: '+967', countryCode: 'ye', name: 'Yemen', flag: '🇾🇪' },
      { dialCode: '+976', countryCode: 'mn', name: 'Mongolia', flag: '🇲🇳' },
      { dialCode: '+998', countryCode: 'uz', name: 'Uzbekistan', flag: '🇺🇿' },
      { dialCode: '+996', countryCode: 'kg', name: 'Kyrgyzstan', flag: '🇰🇬' },
      { dialCode: '+992', countryCode: 'tj', name: 'Tajikistan', flag: '🇹🇯' },
      { dialCode: '+993', countryCode: 'tm', name: 'Turkmenistan', flag: '🇹🇲' },
      { dialCode: '+994', countryCode: 'az', name: 'Azerbaijan', flag: '🇦🇿' },
      { dialCode: '+374', countryCode: 'am', name: 'Armenia', flag: '🇦🇲' },
      { dialCode: '+995', countryCode: 'ge', name: 'Georgia', flag: '🇬🇪' },
      { dialCode: '+84', countryCode: 'vn', name: 'Vietnam', flag: '🇻🇳' },
      { dialCode: '+855', countryCode: 'kh', name: 'Cambodia', flag: '🇰🇭' },
      { dialCode: '+856', countryCode: 'la', name: 'Laos', flag: '🇱🇦' },
      { dialCode: '+95', countryCode: 'mm', name: 'Myanmar', flag: '🇲🇲' },
      { dialCode: '+673', countryCode: 'bn', name: 'Brunei', flag: '🇧🇳' },
      { dialCode: '+670', countryCode: 'tl', name: 'Timor-Leste', flag: '🇹🇱' },
      { dialCode: '+27', countryCode: 'za', name: 'South Africa', flag: '🇿🇦' },
      { dialCode: '+234', countryCode: 'ng', name: 'Nigeria', flag: '🇳🇬' },
      { dialCode: '+20', countryCode: 'eg', name: 'Egypt', flag: '🇪🇬' },
      { dialCode: '+254', countryCode: 'ke', name: 'Kenya', flag: '🇰🇪' },
      { dialCode: '+255', countryCode: 'tz', name: 'Tanzania', flag: '🇹🇿' },
      { dialCode: '+256', countryCode: 'ug', name: 'Uganda', flag: '🇺🇬' },
      { dialCode: '+250', countryCode: 'rw', name: 'Rwanda', flag: '🇷🇼' },
      { dialCode: '+233', countryCode: 'gh', name: 'Ghana', flag: '🇬🇭' },
      { dialCode: '+212', countryCode: 'ma', name: 'Morocco', flag: '🇲🇦' },
      { dialCode: '+213', countryCode: 'dz', name: 'Algeria', flag: '🇩🇿' },
      { dialCode: '+216', countryCode: 'tn', name: 'Tunisia', flag: '🇹🇳' },
      { dialCode: '+218', countryCode: 'ly', name: 'Libya', flag: '🇱🇾' },
      { dialCode: '+220', countryCode: 'gm', name: 'Gambia', flag: '🇬🇲' },
      { dialCode: '+221', countryCode: 'sn', name: 'Senegal', flag: '🇸🇳' },
      { dialCode: '+222', countryCode: 'mr', name: 'Mauritania', flag: '🇲🇷' },
      { dialCode: '+223', countryCode: 'ml', name: 'Mali', flag: '🇲🇱' },
      { dialCode: '+224', countryCode: 'gn', name: 'Guinea', flag: '🇬🇳' },
      { dialCode: '+225', countryCode: 'ci', name: 'Ivory Coast', flag: '🇨🇮' },
      { dialCode: '+226', countryCode: 'bf', name: 'Burkina Faso', flag: '🇧🇫' },
      { dialCode: '+227', countryCode: 'ne', name: 'Niger', flag: '🇳🇪' },
      { dialCode: '+228', countryCode: 'tg', name: 'Togo', flag: '🇹🇬' },
      { dialCode: '+229', countryCode: 'bj', name: 'Benin', flag: '🇧🇯' },
      { dialCode: '+230', countryCode: 'mu', name: 'Mauritius', flag: '🇲🇺' },
      { dialCode: '+231', countryCode: 'lr', name: 'Liberia', flag: '🇱🇷' },
      { dialCode: '+232', countryCode: 'sl', name: 'Sierra Leone', flag: '🇸🇱' },
      { dialCode: '+235', countryCode: 'td', name: 'Chad', flag: '🇹🇩' },
      { dialCode: '+236', countryCode: 'cf', name: 'Central African Republic', flag: '🇨🇫' },
      { dialCode: '+237', countryCode: 'cm', name: 'Cameroon', flag: '🇨🇲' },
      { dialCode: '+238', countryCode: 'cv', name: 'Cape Verde', flag: '🇨🇻' },
      { dialCode: '+239', countryCode: 'st', name: 'Sao Tome and Principe', flag: '🇸🇹' },
      { dialCode: '+240', countryCode: 'gq', name: 'Equatorial Guinea', flag: '🇬🇶' },
      { dialCode: '+241', countryCode: 'ga', name: 'Gabon', flag: '🇬🇦' },
      { dialCode: '+242', countryCode: 'cg', name: 'Congo', flag: '🇨🇬' },
      { dialCode: '+243', countryCode: 'cd', name: 'DR Congo', flag: '🇨🇩' },
      { dialCode: '+244', countryCode: 'ao', name: 'Angola', flag: '🇦🇴' },
      { dialCode: '+245', countryCode: 'gw', name: 'Guinea-Bissau', flag: '🇬🇼' },
      { dialCode: '+246', countryCode: 'io', name: 'British Indian Ocean Territory', flag: '🇮🇴' },
      { dialCode: '+248', countryCode: 'sc', name: 'Seychelles', flag: '🇸🇨' },
      { dialCode: '+249', countryCode: 'sd', name: 'Sudan', flag: '🇸🇩' },
      { dialCode: '+251', countryCode: 'et', name: 'Ethiopia', flag: '🇪🇹' },
      { dialCode: '+252', countryCode: 'so', name: 'Somalia', flag: '🇸🇴' },
      { dialCode: '+253', countryCode: 'dj', name: 'Djibouti', flag: '🇩🇯' },
      { dialCode: '+257', countryCode: 'bi', name: 'Burundi', flag: '🇧🇮' },
      { dialCode: '+258', countryCode: 'mz', name: 'Mozambique', flag: '🇲🇿' },
      { dialCode: '+260', countryCode: 'zm', name: 'Zambia', flag: '🇿🇲' },
      { dialCode: '+261', countryCode: 'mg', name: 'Madagascar', flag: '🇲🇬' },
      { dialCode: '+262', countryCode: 're', name: 'Reunion', flag: '🇷🇪' },
      { dialCode: '+263', countryCode: 'zw', name: 'Zimbabwe', flag: '🇿🇼' },
      { dialCode: '+264', countryCode: 'na', name: 'Namibia', flag: '🇳🇦' },
      { dialCode: '+265', countryCode: 'mw', name: 'Malawi', flag: '🇲🇼' },
      { dialCode: '+266', countryCode: 'ls', name: 'Lesotho', flag: '🇱🇸' },
      { dialCode: '+267', countryCode: 'bw', name: 'Botswana', flag: '🇧🇼' },
      { dialCode: '+268', countryCode: 'sz', name: 'Eswatini', flag: '🇸🇿' },
      { dialCode: '+269', countryCode: 'km', name: 'Comoros', flag: '🇰🇲' },
      { dialCode: '+61', countryCode: 'au', name: 'Australia', flag: '🇦🇺' },
      { dialCode: '+64', countryCode: 'nz', name: 'New Zealand', flag: '🇳🇿' },
      { dialCode: '+679', countryCode: 'fj', name: 'Fiji', flag: '🇫🇯' },
      { dialCode: '+676', countryCode: 'to', name: 'Tonga', flag: '🇹🇴' },
      { dialCode: '+677', countryCode: 'sb', name: 'Solomon Islands', flag: '🇸🇧' },
      { dialCode: '+678', countryCode: 'vu', name: 'Vanuatu', flag: '🇻🇺' },
      { dialCode: '+681', countryCode: 'wf', name: 'Wallis and Futuna', flag: '🇼🇫' },
      { dialCode: '+682', countryCode: 'ck', name: 'Cook Islands', flag: '🇨🇰' },
      { dialCode: '+683', countryCode: 'nu', name: 'Niue', flag: '🇳🇺' },
      { dialCode: '+685', countryCode: 'ws', name: 'Samoa', flag: '🇼🇸' },
      { dialCode: '+686', countryCode: 'ki', name: 'Kiribati', flag: '🇰🇮' },
      { dialCode: '+687', countryCode: 'nc', name: 'New Caledonia', flag: '🇳🇨' },
      { dialCode: '+688', countryCode: 'tv', name: 'Tuvalu', flag: '🇹🇻' },
      { dialCode: '+689', countryCode: 'pf', name: 'French Polynesia', flag: '🇵🇫' },
    ];
  }
}
