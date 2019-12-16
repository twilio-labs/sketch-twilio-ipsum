// Helpful sources
// https://github.com/sketch-hq/plugins.examples.datasupplier
// https://github.com/paintedbicycle/sketch-data-faker/
import sketch from 'sketch';
import faker from 'faker';
import {generateCreditCard} from './lib/credit-card-generator';
import {generateSid, SidPrefixes} from './utils/sid';
import {generateApiToken} from './utils/api-token';
import {updateData} from './utils/sketch';
import {
  DateTimeFormats,
  getDateTimeFromFormat,
  getRelativePastTime,
  getRelativeFutureTime
} from './utils/datetime';
const {DataSupplier} = sketch;

export function onStartup() {
  // Addresses
  DataSupplier.registerDataSupplier(
    'public.text',
    'Address_Zip Code',
    'SupplyAddressZipCode'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Address_City',
    'SupplyAddressCity'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Address_Street (Primary)',
    'SupplyAddressStreetPrimary'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Address_Street (Secondary)',
    'SupplyAddressStreetSecondary'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Address_State',
    'SupplyAddressState'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Address_Latitude',
    'SupplyAddressLatitude'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Address_Longitude',
    'SupplyAddressLongitude'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Address_Country',
    'SupplyAddressCountry'
  );

  // SIDs
  DataSupplier.registerDataSupplier('public.text', 'SID_User', 'SupplySIDUser');
  DataSupplier.registerDataSupplier(
    'public.text',
    'SID_Account',
    'SupplySIDAccount'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'SID_Organization',
    'SupplySIDOrganization'
  );

  // Credit Cards
  DataSupplier.registerDataSupplier(
    'public.text',
    'Credit Card_Visa',
    'SupplyCreditCardVisa'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Credit Card_Mastercard',
    'SupplyCreditCardMastercard'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Credit Card_Amex',
    'SupplyCreditCardAmex'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Credit Card_Discover',
    'SupplyCreditCardDiscover'
  );

  // Names
  DataSupplier.registerDataSupplier(
    'public.text',
    'Name_First Name',
    'SupplyNameFirstName'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Name_Last Name',
    'SupplyNameLastName'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Name_Full Name',
    'SupplyNameFullName'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Name_Company Name',
    'SupplyNameCompanyName'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Name_Job Title',
    'SupplyNameJobTitle'
  );

  // Date
  DataSupplier.registerDataSupplier(
    'public.text',
    `Date_04 Jan 2019`,
    `SupplyDateTimeFormatA`
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    `Date_12/25/2020`,
    `SupplyDateTimeFormatB`
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    `Date_7 Oct 2015, 03:37 AM`,
    `SupplyDateTimeFormatC`
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    `Date_11:30 PM`,
    `SupplyDateTimeFormatD`
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    `Date_23:15:42`,
    `SupplyDateTimeFormatE`
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    `Date_3 weeks ago`,
    `SupplyDateTimeAgo`
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    `Date_in 5 days`,
    `SupplyDateFromNow`
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Date_.Month',
    'SupplyDateMonth'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Date_.Weekday',
    'SupplyDateWeekday'
  );

  // Internet
  DataSupplier.registerDataSupplier(
    'public.text',
    'Internet_Email',
    'SupplyInternetEmail'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Internet_API Key',
    'SupplyInternetApiKey'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Internet_URL',
    'SupplyInternetUrl'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Internet_Domain Name',
    'SupplyInternetDomain'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Internet_IP Address',
    'SupplyInternetIpAddress'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Internet_IPv6 Address',
    'SupplyInternetIpv6Address'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Internet_Mac Address',
    'SupplyInternetMacAddress'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Internet_User Agent',
    'SupplyInternetUserAgent'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Internet_Password',
    'SupplyInternetPassword'
  );

  // Lorem
  DataSupplier.registerDataSupplier(
    'public.text',
    'Lorem_Sentence',
    'SupplyLoremSentence'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Lorem_Paragraph',
    'SupplyLoremParagraph'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Lorem_Paragraphs',
    'SupplyLoremParagraphs'
  );

  // Random
  DataSupplier.registerDataSupplier(
    'public.text',
    'Random_Number',
    'SupplyRandomNumber'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Random_UUID',
    'SupplyRandomUuid'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Random_Locale',
    'SupplyRandomLocale'
  );

  // Finance
  DataSupplier.registerDataSupplier(
    'public.text',
    'Finance_Account Number',
    'SupplyFinanceAccountNumber'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Finance_Account Name',
    'SupplyFinanceAccountName'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Finance_Amount',
    'SupplyFinanceAmount'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Finance_Transaction Type',
    'SupplyFinanceTransactionType'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Finance_Currency Name',
    'SupplyFinanceCurrencyName'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Finance_Currency Symbol',
    'SupplyFinanceCurrencySymbol'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Finance_IBAN',
    'SupplyFinanceIban'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Finance_BIC',
    'SupplyFinanceBic'
  );

  // Phone
  DataSupplier.registerDataSupplier(
    'public.text',
    'Phone_Phone Number',
    'SupplyPhoneNumber'
  );
  DataSupplier.registerDataSupplier(
    'public.text',
    'Phone_Phone Format',
    'SupplyPhoneFormat'
  );
}

export function onShutdown() {
  DataSupplier.deregisterDataSuppliers();
}

// Addresses
export function onSupplyAddressZipCode(context) {
  updateData(context, () => faker.address.zipCode());
}
export function onSupplyAddressCity(context) {
  updateData(context, () => faker.address.city());
}
export function onSupplyAddressStreetPrimary(context) {
  updateData(context, () => faker.address.streetAddress());
}
export function onSupplyAddressStreetSecondary(context) {
  updateData(context, () => faker.address.secondaryAddress());
}
export function onSupplyAddressState(context) {
  updateData(context, () => faker.address.state());
}
export function onSupplyAddressLatitude(context) {
  updateData(context, () => faker.address.latitude());
}
export function onSupplyAddressLongitude(context) {
  updateData(context, () => faker.address.longitude());
}
export function onSupplyAddressCountry(context) {
  updateData(context, () => faker.address.country());
}

// SIDs
export function onSupplySIDUser(context) {
  updateData(context, () => generateSid(SidPrefixes.USER));
}
export function onSupplySIDAccount(context) {
  updateData(context, () => generateSid(SidPrefixes.ACCOUNT));
}
export function onSupplySIDOrganization(context) {
  updateData(context, () => generateSid(SidPrefixes.ORGANIZATION));
}

// Credit Cards
export function onSupplyCreditCardVisa(context) {
  updateData(context, () => generateCreditCard('VISA')[0]);
}
export function onSupplyCreditCardMastercard(context) {
  updateData(context, () => generateCreditCard('Mastercard')[0]);
}
export function onSupplyCreditCardAmex(context) {
  updateData(context, () => generateCreditCard('Amex')[0]);
}
export function onSupplyCreditCardDiscover(context) {
  updateData(context, () => generateCreditCard('Discover')[0]);
}

// Names
export function onSupplyNameFirstName(context) {
  updateData(context, () => faker.name.firstName());
}
export function onSupplyNameLastName(context) {
  updateData(context, () => faker.name.lastName());
}
export function onSupplyNameFullName(context) {
  updateData(context, () => faker.name.findName());
}
export function onSupplyNameCompanyName(context) {
  updateData(context, () => faker.company.companyName());
}
export function onSupplyNameJobTitle(context) {
  updateData(context, () => faker.name.jobTitle());
}

// Date
export function onSupplyDateTimeFormatA(context) {
  updateData(context, () =>
    getDateTimeFromFormat(DateTimeFormats['04 Jan 2019'])
  );
}
export function onSupplyDateTimeFormatB(context) {
  updateData(context, () =>
    getDateTimeFromFormat(DateTimeFormats['12/25/2020'])
  );
}
export function onSupplyDateTimeFormatC(context) {
  updateData(context, () =>
    getDateTimeFromFormat(DateTimeFormats['7 Oct 2015, 03:37 AM'])
  );
}
export function onSupplyDateTimeFormatD(context) {
  updateData(context, () => getDateTimeFromFormat(DateTimeFormats['11:30 PM']));
}
export function onSupplyDateTimeFormatE(context) {
  updateData(context, () => getDateTimeFromFormat(DateTimeFormats['23:15:42']));
}
export function onSupplyDateTimeAgo(context) {
  updateData(context, () => getRelativePastTime());
}
export function onSupplyDateFromNow(context) {
  updateData(context, () => getRelativeFutureTime());
}
export function onSupplyDateMonth(context) {
  updateData(context, () => faker.date.month());
}
export function onSupplyDateWeekday(context) {
  updateData(context, () => faker.date.weekday());
}

// Internet
export function onSupplyInternetEmail(context) {
  updateData(context, () => faker.internet.email());
}
export function onSupplyInternetApiKey(context) {
  updateData(context, () => generateApiToken());
}
export function onSupplyInternetUrl(context) {
  updateData(context, () => faker.internet.url());
}
export function onSupplyInternetDomain(context) {
  updateData(context, () => faker.internet.domainName());
}
export function onSupplyInternetIpAddress(context) {
  updateData(context, () => faker.internet.ip());
}
export function onSupplyInternetIpv6Address(context) {
  updateData(context, () => faker.internet.ipv6());
}
export function onSupplyInternetMacAddress(context) {
  updateData(context, () => faker.internet.mac());
}
export function onSupplyInternetUserAgent(context) {
  updateData(context, () => faker.internet.userAgent());
}
export function onSupplyInternetPassword(context) {
  updateData(context, () => faker.internet.password());
}

// Lorem
export function onSupplyLoremSentence(context) {
  updateData(context, () => faker.lorem.sentence());
}
export function onSupplyLoremParagraph(context) {
  updateData(context, () => faker.lorem.paragraph());
}
export function onSupplyLoremParagraphs(context) {
  updateData(context, () => faker.lorem.paragraphs());
}

// Random
export function onSupplyRandomNumber(context) {
  updateData(context, () => `${faker.random.number()}`);
}
export function onSupplyRandomUuid(context) {
  updateData(context, () => faker.random.uuid());
}
export function onSupplyRandomLocale(context) {
  updateData(context, () => faker.random.locale());
}

// Finance
export function onSupplyFinanceAccountNumber(context) {
  updateData(context, () => faker.finance.account());
}
export function onSupplyFinanceAccountName(context) {
  updateData(context, () => faker.finance.accountName());
}
export function onSupplyFinanceAmount(context) {
  updateData(context, () => faker.finance.amount());
}
export function onSupplyFinanceTransactionType(context) {
  updateData(context, () => faker.finance.transactionType());
}
export function onSupplyFinanceCurrencyName(context) {
  updateData(context, () => faker.finance.currencyName());
}
export function onSupplyFinanceCurrencySymbol(context) {
  updateData(context, () => faker.finance.currencySymbol());
}
export function onSupplyFinanceIban(context) {
  updateData(context, () => faker.finance.iban());
}
export function onSupplyFinanceBic(context) {
  updateData(context, () => faker.finance.bic());
}

// Phone
export function onSupplyPhoneNumber(context) {
  updateData(context, () => faker.phone.phoneNumber());
}
export function onSupplyPhoneFormat(context) {
  updateData(context, () => faker.phone.phoneFormats());
}
