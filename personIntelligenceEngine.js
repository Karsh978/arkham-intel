/**
 * Arkham Intel - Person Intelligence & Background Check Engine
 * Evaluates identity risk, public/legal indicators, and dating/social safety parameters.
 */

class PersonIntelligenceEngine {

  /**
   * 1. Identity & Reputation Risk Assessor
   * Analyzes identity verification status, alias flags, and public records indicators.
   */
  static evaluatePersonRisk(personProfile) {
    // personProfile = { fullName, knownAliases: [], verifiedId: boolean, hasCriminalRecord: boolean, fraudFlagsCount: number, identityMatchConfidence: number }
    
    let riskScore = 0;
    const warningFlags = [];
    const verifiedFacts = [];

    // Verified legal data processing
    if (personProfile.hasCriminalRecord) {
      riskScore += 45;
      verifiedFacts.push("Verified court or criminal record match found.");
    }

    if (!personProfile.verifiedId) {
      riskScore += 25;
      warningFlags.push("Identity verification incomplete or unverified source.");
    }

    if (personProfile.knownAliases && personProfile.knownAliases.length > 1) {
      riskScore += 20;
      warningFlags.push(`Multiple unverified aliases detected (${personProfile.knownAliases.length}).`);
    }

    if (personProfile.fraudFlagsCount > 0) {
      riskScore += Math.min(personProfile.fraudFlagsCount * 15, 30);
      warningFlags.push("Associated with public fraud or scam indicators.");
    }

    const finalScore = Math.min(riskScore, 100);
    
    let safetyRating = "Standard Risk Profile";
    if (finalScore >= 70) safetyRating = "High Caution Required";
    else if (finalScore >= 40) safetyRating = "Moderate Advisory Risk";

    return {
      module: "Person Intelligence - Background Assessment",
      subject: personProfile.fullName || "Subject",
      riskScore: finalScore,
      safetyRating,
      factsVerified: verifiedFacts,
      probabilisticFlags: warningFlags,
      complianceNotice: "Strictly separates verified legal records from probabilistic reputation signals to eliminate false accusations."
    };
  }

  /**
   * 2. Dating & Meeting Safety Evaluator
   * Assesses interaction context when meeting someone new (online dating / offline meetings).
   */
  static assessMeetingSafety(contextData) {
    // contextData = { locationType: 'public'|'private', sharedLocationWithContact: boolean, backgroundScore: number, unexpectedVehicle: boolean }
    
    const advisoryAlerts = [];
    let riskLevel = "Low";

    if (contextData.locationType === 'private' && contextData.backgroundScore > 40) {
      riskLevel = "High";
      advisoryAlerts.push("Meeting in a private setting with an elevated risk profile. Recommend moving to a public venue.");
    }

    if (!contextData.sharedLocationWithContact) {
      advisoryAlerts.push("Live location is not shared with emergency/trusted contacts.");
    }

    if (contextData.unexpectedVehicle) {
      advisoryAlerts.push("Unverified or unexpected vehicle details reported.");
    }

    return {
      module: "Person Intelligence - Meeting & Dating Safety",
      overallRiskLevel: riskLevel,
      safetyAlerts: advisoryAlerts,
      actionableAdvice: advisoryAlerts.length > 0 ? "Share live trip/location with trusted contact immediately." : "Standard meeting parameters."
    };
  }
}

export default PersonIntelligenceEngine;