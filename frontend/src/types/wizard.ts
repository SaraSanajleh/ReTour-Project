/**
 * types/wizard.ts
 *
 * Shared type definitions for the ReTour AI Trip Wizard.
 * Every wizard-related file (constants, hooks, step components, services)
 * should import from here instead of redefining shapes locally.
 */

/* ---------------------------------------------------------------------- */
/*  Entry point / mode                                                    */
/* ---------------------------------------------------------------------- */

/**
 * How the user entered the wizard. Both entry points ("Browse Ready
 * Packages" and "AI Package Builder") render the exact same wizard UI —
 * this field is the only thing that differs, and it travels through to
 * the backend so it knows which flow to run:
 *   - "ready_packages": match against existing packages, then personalize
 *     within the closest match.
 *   - "ai_builder": build a fully custom package from scratch.
 */
export type WizardMode = "ready_packages" | "ai_builder";

/* ---------------------------------------------------------------------- */
/*  Option id unions (mirror the constants that will live in constants/)  */
/* ---------------------------------------------------------------------- */

export type GroupTypeId = "solo" | "couple" | "family" | "friends" | "business";

export type AccommodationTypeId =
  | "no_pref"
  | "hotel"
  | "resort"
  | "boutique"
  | "eco_lodge"
  | "desert_camp";

export type PriorityId =
  | "budget"
  | "famous"
  | "hidden"
  | "authentic"
  | "sustainable"
  | "comfort"
  | "maximize"
  | "family";

export type DurationOption = "1" | "2" | "3" | "5" | "7" | "Custom";

export type AirportId = "AMM" | "AQJ" | "OTHER";

/* ---------------------------------------------------------------------- */
/*  Wizard form state                                                     */
/* ---------------------------------------------------------------------- */

export interface WizardData {
  // Step 1 — Trip Basics
  startDate: string;
  duration: DurationOption;
  customDuration: string;
  arrivalAirport: AirportId | "";
  totalBudget: string;
  preferredLanguage: string;
  preferredRegion: string[];

  // Step 2 — Travelers
  adults: number;
  children: number;
  childrenAges: string[];
  seniors: number;
  groupType: GroupTypeId | "";
  accessibilityNeeds: string[];

  // Step 3 — Journey Type
  interests: string[];
  tripPace: string;
  activityLevel: string;
  mustVisit: string[];

  // Step 4 — Customize
  placesToAvoid: string;
  accommodationType: AccommodationTypeId | "";
  hotelRating: string;
  cuisine: string[];
  specialOccasion: string;
  smePreferences: string[];

  // Step 5 — AI Priorities
  aiPriority: PriorityId | "";

  // Step 6 — Tell AI
  freeText: string;
}

/** The full state carried by the wizard, including how the user got here. */
export interface WizardState {
  mode: WizardMode;
  step: number;
  data: WizardData;
}

/* ---------------------------------------------------------------------- */
/*  Derived / UI-only values (not submitted, just displayed)              */
/* ---------------------------------------------------------------------- */

export interface WizardMatchIndicators {
  hotelsMatch: number;
  poisMatch: number;
  eventsMatch: number;
  smesMatch: number;
  restaurantsMatch: number;
  confidence: number;
}

/* ---------------------------------------------------------------------- */
/*  Backend submission payload (draft — confirm with Team Alpha)          */
/* ---------------------------------------------------------------------- */

/**
 * Shape of the JSON sent to the backend when the user clicks
 * "Generate My Package". This is a first draft based on the current
 * form fields — treat it as a proposal to review with Team Alpha before
 * it's treated as a stable contract.
 */
export interface WizardSubmissionPayload {
  requestType: WizardMode;
  submittedAt: string; // ISO timestamp

  trip: {
    startDate: string;
    endDate: string;
    durationDays: number;
    arrivalAirport: AirportId | "";
    totalBudget: number | null;
    preferredLanguage: string;
    preferredRegions: string[];
  };

  travelers: {
    adults: number;
    children: number;
    childrenAges: number[];
    seniors: number;
    groupType: GroupTypeId | "";
    accessibilityNeeds: string[];
  };

  preferences: {
    interests: string[];
    tripPace: string;
    activityLevel: string;
    mustVisit: string[];
    placesToAvoid: string;
    accommodationType: AccommodationTypeId | "";
    hotelRating: string;
    cuisine: string[];
    specialOccasion: string;
    smePreferences: string[];
    aiPriority: PriorityId | "";
  };

  freeText: string;
}