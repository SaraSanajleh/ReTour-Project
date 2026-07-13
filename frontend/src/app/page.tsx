import MainLayout from "@/components/layout/MainLayout";
import styles from "./page.module.css";

export default function Home() {
  return (
    <MainLayout>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroHeading}>
            <h1>Plan Your Perfect Trip to Jordan</h1>
            <p>Choose how you would like to plan your journey.</p>
          </div>

          <div className={styles.packageChoices}>
            <article className={styles.choiceCard}>
              <div className={styles.choiceIcon}>
                <i className="bi bi-suitcase-lg" />
              </div>

              <div>
                <h2>Browse Ready Packages</h2>
                <p>
                  Explore handpicked packages from trusted local SMEs.
                </p>

                <button type="button" className={styles.outlineButton}>
                  Explore Packages
                  <i className="bi bi-arrow-right" />
                </button>
              </div>
            </article>

            <article
              className={`${styles.choiceCard} ${styles.aiChoiceCard}`}
            >
              <div className={styles.aiChoiceIcon}>
                <i className="bi bi-stars" />
              </div>

              <div>
                <h2>Build My AI Package</h2>
                <p>
                  Create a fully personalized itinerary using AI.
                </p>

                <button type="button" className={styles.primaryButton}>
                  Start Building
                  <i className="bi bi-arrow-right" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`container ${styles.plannerWrapper}`}>
        <div className={styles.plannerCard}>
          <section className={styles.formSection}>
            <div className={styles.sectionHeading}>
              <span className={styles.sectionIcon}>
                <i className="bi bi-calendar2-week" />
              </span>

              <div>
                <h2>Trip Information</h2>
                <p>Tell us the basics about your trip.</p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <label className="form-label" htmlFor="nationality">
                  Nationality
                </label>

                <select id="nationality" className="form-select">
                  <option value="">Select your nationality</option>
                  <option value="italy">Italy</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="spain">Spain</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label" htmlFor="arrivalDate">
                  Arrival Date
                </label>

                <input
                  id="arrivalDate"
                  type="date"
                  className="form-control"
                />
              </div>

              <div className="col-md-4">
                <label className="form-label" htmlFor="departureDate">
                  Departure Date
                </label>

                <input
                  id="departureDate"
                  type="date"
                  className="form-control"
                />
              </div>

              <div className="col-md-4">
                <label className="form-label" htmlFor="adults">
                  Adults
                </label>

                <input
                  id="adults"
                  type="number"
                  min="1"
                  defaultValue="2"
                  className="form-control"
                />
              </div>

              <div className="col-md-4">
                <label className="form-label" htmlFor="children">
                  Children
                </label>

                <input
                  id="children"
                  type="number"
                  min="0"
                  defaultValue="0"
                  className="form-control"
                />
              </div>

              <div className="col-md-4">
                <label className="form-label" htmlFor="budget">
                  Budget per person (JOD)
                </label>

                <input
                  id="budget"
                  type="number"
                  min="0"
                  placeholder="e.g. 500"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label" htmlFor="airport">
                  Arrival Airport
                </label>

                <select id="airport" className="form-select">
                  <option value="">Select airport</option>
                  <option value="amm">
                    Queen Alia International Airport
                  </option>
                  <option value="aqj">
                    King Hussein International Airport
                  </option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label" htmlFor="cities">
                  Preferred Cities
                </label>

                <select id="cities" className="form-select">
                  <option value="">Select cities</option>
                  <option value="amman">Amman</option>
                  <option value="petra">Petra</option>
                  <option value="wadi-rum">Wadi Rum</option>
                  <option value="dead-sea">Dead Sea</option>
                  <option value="aqaba">Aqaba</option>
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
                  Customize your preferences to help our AI craft the
                  perfect experience.
                </p>
              </div>
            </div>

            <div className={styles.preferenceGrid}>
              {[
                ["bi-building", "Accommodation"],
                ["bi-people", "Travel Style"],
                ["bi-car-front", "Transportation"],
                ["bi-universal-access", "Accessibility & Special Needs"],
                ["bi-fork-knife", "Food Preferences"],
                ["bi-cloud-sun", "Environment & Weather"],
                ["bi-map", "Activities & Interests"],
                ["bi-gear", "Additional Preferences"],
              ].map(([icon, label]) => (
                <button
                  key={label}
                  type="button"
                  className={styles.preferenceButton}
                >
                  <span>
                    <i className={`bi ${icon}`} />
                    {label}
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
                  Share details, special requests, or preferences. The
                  more you tell us, the better we can personalize your
                  trip.
                </p>
              </div>
            </div>

            <textarea
              className={`form-control ${styles.aiTextArea}`}
              maxLength={1000}
              placeholder="e.g. We are a family from Italy. We want a quiet hotel near Petra, minimal walking for grandparents, a birthday dinner, private transportation, and activities suitable for children..."
            />

            <p className={styles.textAreaTip}>
              <i className="bi bi-stars" />
              You can write in any language.
            </p>

            <div className={styles.generateArea}>
              <button type="button" className={styles.generateButton}>
                Generate My Package
                <i className="bi bi-stars" />
              </button>

              <small>
                <i className="bi bi-lock" />
                Your information is secure and will not be shared.
              </small>
            </div>
          </section>

          <div className={styles.features}>
            {[
              [
                "bi-shield-check",
                "Trusted Local Partners",
                "Supporting local SMEs across Jordan.",
              ],
              [
                "bi-stars",
                "AI-Powered",
                "Recommendations tailored just for you.",
              ],
              [
                "bi-lock",
                "Secure & Private",
                "Your information remains protected.",
              ],
              [
                "bi-headset",
                "24/7 Support",
                "We are here to help you plan.",
              ],
            ].map(([icon, title, description]) => (
              <article key={title} className={styles.featureItem}>
                <span>
                  <i className={`bi ${icon}`} />
                </span>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}