import ArkhamAIEngine from './arkhamAiEngine.js';

// 1. Test Digital Threat ML Model
const threatTest = ArkhamAIEngine.analyzeDigitalThreatML(
  "URGENT: Click here to verify your bank OTP immediately or account will be blocked!",
  { isUnknown: true }
);
console.log("--- Digital Threat Test ---", threatTest);

// 2. Test Real-World Venue Safety Model
const venueTest = ArkhamAIEngine.evaluateContextualSafety({
  venueType: 'nightlife',
  stationaryDurationMinutes: 25,
  unattendedDrinkDuration: 20,
  locationAnomaly: false
});
console.log("--- Venue Safety Test ---", venueTest);

// 3. Test Evidence Vault Processor
const vaultTest = ArkhamAIEngine.processEvidenceVault([
  { id: '1', timestamp: '2026-10-21T10:00:00Z', type: 'message', dataPayload: 'Suspicious text received', source: 'WhatsApp' },
  { id: '2', timestamp: '2026-10-21T09:30:00Z', type: 'location', dataPayload: 'Coordinates logged', source: 'GPS' }
]);
console.log("--- Evidence Vault Test ---", vaultTest);