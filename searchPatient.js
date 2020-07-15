//**USE CASE**Integrate CommCare with OpenMRS for real-time patient record exchange, duplicate-checking & automated data cleaning //
// 1. Search for OpenMRS existing patients using EMRID
getPatients(
  {
    identifier: state => state.data.emrId,
    // identifier: 'John',
    v: 'full',
  },
  {
    exactlyOne: true,
  }
);

// 2. If found, use `uuid` to create new lab encounter
createEncounter({
  encounterDatetime: state => state.references[0].visitDate, 
  patient: dataValue('uuid'), //dynamically fill with CommCare data
  encounterType: 'f01c54cb-2225-471a-9cd5-d348552c337c',
  location: dataValue('identifiers[0].location.uuid'),
  encounterProviders: [
    {
      provider: 'bb1a7781-7896-40be-aaca-7d1b41d843a6',
      encounterRole: '240b26f9-dd88-4172-823d-4a8bfeb7841f',
    },
  ],
});
