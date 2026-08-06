// Identity details the privacy policy has to state. GDPR Article 13(1)(a) asks
// for the controller's identity and *contact details* — a channel the reader can
// actually reach, not necessarily a postal address. Email and phone (from
// src/contact.js) cover that.
//
// The identification duties in Book XII of the Belgian Code of Economic Law —
// geographic address, enterprise number — attach to an information society
// service, meaning one offered as an economic activity. This site sells nothing
// and is a personal portfolio, so they do not apply and no home address is
// published here.
//
// If that ever changes (freelancing, a KBO/BCE number, anything for
// remuneration), fill `address` and `enterpriseNumber` in and both lines appear
// in the policy automatically.
export const CONTROLLER = {
    name: 'Hans Maas',
    address: '',
    enterpriseNumber: ''
}

// Shown at the top of the policy. Bump this whenever the text changes.
export const LAST_UPDATED = '6 August 2026'
