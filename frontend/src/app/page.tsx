"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import MainLayout from "@/components/layout/MainLayout";
import styles from "./page.module.css";

const tripFormSchema = z
  .object({
    nationality: z.string().min(1, "Nationality is required"),

    arrivalDate: z.string().min(1, "Arrival date is required"),

    departureDate: z.string().min(1, "Departure date is required"),

    adults: z.coerce
      .number()
      .int()
      .min(1, "At least one adult is required"),

    children: z.coerce
      .number()
      .int()
      .min(0, "Children cannot be negative"),

    budget: z.coerce
      .number()
      .positive("Budget must be greater than zero"),

    airport: z.string().min(1, "Arrival airport is required"),

    city: z.string().optional(),

    additionalNotes: z
      .string()
      .max(1000, "Maximum length is 1000 characters")
      .optional(),
  })
  .refine(
    (data) => {
      if (!data.arrivalDate || !data.departureDate) {
        return true;
      }

      return new Date(data.departureDate) > new Date(data.arrivalDate);
    },
    {
      message: "Departure date must be after the arrival date",
      path: ["departureDate"],
    },
  );

type TripFormData = z.infer<typeof tripFormSchema>;

type PackageType = "ready" | "ai";

const preferenceCategories = [
  {
    label: "Accommodation",
    icon: "bi-building",
  },
  {
    label: "Travel Style",
    icon: "bi-compass",
  },
  {
    label: "Transportation",
    icon: "bi-car-front",
  },
  {
    label: "Accessibility & Special Needs",
    icon: "bi-universal-access",
  },
  {
    label: "Food Preferences",
    icon: "bi-cup-hot",
  },
  {
    label: "Environment & Weather",
    icon: "bi-cloud-sun",
  },
  {
    label: "Activities & Interests",
    icon: "bi-map",
  },
  {
    label: "Additional Preferences",
    icon: "bi-sliders",
  },
];

const platformFeatures = [
  {
    icon: "bi-shield-check",
    title: "Trusted Local Partners",
    description: "Supporting local SMEs across Jordan.",
  },
  {
    icon: "bi-stars",
    title: "AI-Powered",
    description: "Recommendations tailored just for you.",
  },
  {
    icon: "bi-lock",
    title: "Secure & Private",
    description: "Your information remains protected.",
  },
  {
    icon: "bi-headset",
    title: "24/7 Support",
    description: "We are here to help you plan.",
  },
];

export default function Home() {
  const [packageType, setPackageType] = useState<PackageType>("ai");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TripFormData>({
    resolver: zodResolver(tripFormSchema),

    defaultValues: {
      nationality: "",
      arrivalDate: "",
      departureDate: "",
      adults: 2,
      children: 0,
      budget: 500,
      airport: "",
      city: "",
      additionalNotes: "",
    },
  });

  const onSubmit = (data: TripFormData) => {
    const completeRequest = {
      packageType,
      ...data,
    };

    console.log("ReTour request:", completeRequest);

    if (packageType === "ready") {
      alert(
        "Your information is ready. The next step will retrieve matching ready packages.",
      );

      return;
    }

    alert(
      "Your information is ready. The next step will send it to the AI Package Builder.",
    );
  };

  return (
    <MainLayout>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroHeading}>
            <h1>Plan Your Perfect Trip to Jordan</h1>

            <p>Choose how you would like to plan your journey.</p>
          </div>

          <div className={styles.packageChoices}>
            <button
              type="button"
              className={`${styles.choiceCard} ${packageType === "ready" ? styles.selectedChoice : ""
                }`}
              onClick={() => setPackageType("ready")}
              aria-pressed={packageType === "ready"}
            >
              <div className={styles.choiceIcon}>
                <i className="bi bi-suitcase-lg" />
              </div>

              <div>
                <h2>Browse Ready Packages</h2>

                <p>
                  Explore existing travel packages prepared by trusted local
                  tourism providers.
                </p>

                <span className={styles.cardAction}>
                  {packageType === "ready"
                    ? "Selected"
                    : "Choose Ready Packages"}

                  <i
                    className={`bi ${packageType === "ready"
                        ? "bi-check-circle-fill"
                        : "bi-arrow-right"
                      }`}
                  />
                </span>
              </div>
            </button>

            <button
              type="button"
              className={`${styles.choiceCard} ${styles.aiChoiceCard} ${packageType === "ai" ? styles.selectedAiChoice : ""
                }`}
              onClick={() => setPackageType("ai")}
              aria-pressed={packageType === "ai"}
            >
              <div className={styles.aiChoiceIcon}>
                <i className="bi bi-stars" />
              </div>

              <div>
                <h2>Build My AI Package</h2>

                <p>
                  Create a new personalized itinerary based on your exact
                  preferences.
                </p>

                <span className={styles.cardAction}>
                  {packageType === "ai"
                    ? "Selected"
                    : "Choose AI Package Builder"}

                  <i
                    className={`bi ${packageType === "ai"
                        ? "bi-check-circle-fill"
                        : "bi-arrow-right"
                      }`}
                  />
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className={`container ${styles.plannerWrapper}`}>
        <form
          className={styles.plannerCard}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <section className={styles.formSection}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIcon}>
                <i className="bi bi-calendar2-week" />
              </span>

              <div>
                <h2>Trip Information</h2>
                <p>Tell us the essential details about your trip.</p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <label className="form-label" htmlFor="nationality">
                  Nationality
                </label>

                <select
                  id="nationality"
                  className={`form-select ${errors.nationality ? "is-invalid" : ""
                    }`}
                  {...register("nationality")}
                >
                  <option value="">Select your nationality</option>
                  <option value="Italy">Italy</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                </select>

                {errors.nationality && (
                  <div className="invalid-feedback">
                    {errors.nationality.message}
                  </div>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label" htmlFor="arrivalDate">
                  Arrival Date
                </label>

                <input
                  id="arrivalDate"
                  type="date"
                  className={`form-control ${errors.arrivalDate ? "is-invalid" : ""
                    }`}
                  {...register("arrivalDate")}
                />

                {errors.arrivalDate && (
                  <div className="invalid-feedback">
                    {errors.arrivalDate.message}
                  </div>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label" htmlFor="departureDate">
                  Departure Date
                </label>

                <input
                  id="departureDate"
                  type="date"
                  className={`form-control ${errors.departureDate ? "is-invalid" : ""
                    }`}
                  {...register("departureDate")}
                />

                {errors.departureDate && (
                  <div className="invalid-feedback">
                    {errors.departureDate.message}
                  </div>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label" htmlFor="adults">
                  Adults
                </label>

                <input
                  id="adults"
                  type="number"
                  min="1"
                  className={`form-control ${errors.adults ? "is-invalid" : ""
                    }`}
                  {...register("adults")}
                />

                {errors.adults && (
                  <div className="invalid-feedback">
                    {errors.adults.message}
                  </div>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label" htmlFor="children">
                  Children
                </label>

                <input
                  id="children"
                  type="number"
                  min="0"
                  className={`form-control ${errors.children ? "is-invalid" : ""
                    }`}
                  {...register("children")}
                />

                {errors.children && (
                  <div className="invalid-feedback">
                    {errors.children.message}
                  </div>
                )}
              </div>

              <div className="col-md-4">
                <label className="form-label" htmlFor="budget">
                  Budget per person (JOD)
                </label>

                <input
                  id="budget"
                  type="number"
                  min="1"
                  placeholder="e.g. 500"
                  className={`form-control ${errors.budget ? "is-invalid" : ""
                    }`}
                  {...register("budget")}
                />

                {errors.budget && (
                  <div className="invalid-feedback">
                    {errors.budget.message}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label" htmlFor="airport">
                  Arrival Airport
                </label>

                <select
                  id="airport"
                  className={`form-select ${errors.airport ? "is-invalid" : ""
                    }`}
                  {...register("airport")}
                >
                  <option value="">Select your arrival airport</option>

                  <option value="Queen Alia International Airport">
                    Queen Alia International Airport — Amman
                  </option>

                  <option value="King Hussein International Airport">
                    King Hussein International Airport — Aqaba
                  </option>
                </select>

                {errors.airport && (
                  <div className="invalid-feedback">
                    {errors.airport.message}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label" htmlFor="city">
                  Preferred Destination
                </label>

                <select
                  id="city"
                  className="form-select"
                  {...register("city")}
                >
                  <option value="">No specific preference</option>
                  <option value="Amman">Amman</option>
                  <option value="Petra">Petra</option>
                  <option value="Wadi Rum">Wadi Rum</option>
                  <option value="Dead Sea">Dead Sea</option>
                  <option value="Aqaba">Aqaba</option>
                  <option value="Jerash">Jerash</option>
                  <option value="Ajloun">Ajloun</option>
                  <option value="Madaba">Madaba</option>
                </select>
              </div>
            </div>
          </section>

          <section className={styles.formSection}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIcon}>
                <i className="bi bi-heart" />
              </span>

              <div>
                <h2>Smart Preferences</h2>

                <p>
                  Add optional preferences to help us find or build the most
                  suitable package.
                </p>
              </div>
            </div>

            <div className={styles.preferenceGrid}>
              {preferenceCategories.map((preference) => (
                <button
                  key={preference.label}
                  type="button"
                  className={styles.preferenceButton}
                >
                  <span>
                    <i className={`bi ${preference.icon}`} />
                    {preference.label}
                  </span>

                  <i className="bi bi-chevron-down" />
                </button>
              ))}
            </div>
          </section>

          <section className={styles.formSection}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIcon}>
                <i className="bi bi-chat-dots" />
              </span>

              <div>
                <h2>Tell AI About Your Trip</h2>

                <p>
                  Share additional details, special occasions, transportation
                  needs, food preferences, or anything else important to you.
                </p>
              </div>
            </div>

            <textarea
              className={`form-control ${styles.aiTextArea} ${errors.additionalNotes ? "is-invalid" : ""
                }`}
              maxLength={1000}
              placeholder="e.g. We are a family of five from Italy. We want a quiet restaurant after arriving at the airport, a private minivan, minimal walking for grandparents, activities suitable for children, and a birthday dinner with a view."
              {...register("additionalNotes")}
            />

            {errors.additionalNotes && (
              <div className="invalid-feedback">
                {errors.additionalNotes.message}
              </div>
            )}

            <p className={styles.textAreaTip}>
              <i className="bi bi-stars" />
              You can write naturally and use any language.
            </p>

            <div className={styles.generateArea}>
              <button
                type="submit"
                className={styles.generateButton}
                disabled={isSubmitting}
              >
                {packageType === "ready"
                  ? "Find Matching Ready Packages"
                  : "Generate My AI Package"}

                <i
                  className={`bi ${packageType === "ready" ? "bi-search" : "bi-stars"
                    }`}
                />
              </button>

              <small>
                <i className="bi bi-lock" />
                Your information is secure and will not be shared.
              </small>
            </div>
          </section>

          <div className={styles.features}>
            {platformFeatures.map((feature) => (
              <article key={feature.title} className={styles.featureItem}>
                <span>
                  <i className={`bi ${feature.icon}`} />
                </span>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </form>
      </section>
    </MainLayout>
  );
}