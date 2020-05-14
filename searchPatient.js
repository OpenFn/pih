// Search for patient using EMRID
getPatients(
  {
    identifier: state => state.data.emrId,
    // identifier: 'John',
    v: 'full'
  },
  {
    exactlyOne: true
  }
);

// If found, use `uuid` to create new lab encounter
createEncounter({
  encounterDatetime: '2019-10-16 12:08:43',
  patient: ,
  encounterType: 'e22e39fd-7db2-45e7-80f1-60fa0d5a4378',
  location: 'aff27d58-a15c-49a6-9beb-d30dcfc0c66e',
  encounterProviders: [
    {
      provider: 'bb1a7781-7896-40be-aaca-7d1b41d843a6',
      encounterRole: '240b26f9-dd88-4172-823d-4a8bfeb7841f'
    }
  ]
});

// If not found, log error message
// console.log('Patient with EMRID `${emrid}` not found.')
