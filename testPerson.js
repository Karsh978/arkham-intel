import PersonIntelligenceEngine from './personIntelligenceEngine.js';

// Test 1: Background Check Assessment
const bgCheck = PersonIntelligenceEngine.evaluatePersonRisk({
  fullName: "John Doe",
  knownAliases: ["Johnny D", "J_Doe"],
  verifiedId: false,
  hasCriminalRecord: true,
  fraudFlagsCount: 1,
  identityMatchConfidence: 85
});

console.log("--- Person Background Check Result ---", bgCheck);

// Test 2: Meeting Safety Check
const meetingCheck = PersonIntelligenceEngine.assessMeetingSafety({
  locationType: 'private',
  sharedLocationWithContact: false,
  backgroundScore: 65,
  unexpectedVehicle: true
});

console.log("--- Meeting Safety Result ---", meetingCheck);