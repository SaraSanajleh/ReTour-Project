"use client";

import { useState } from "react";

import { WizardMode, WizardState } from "@/types/wizard";

import WizardSidebar from "./WizardSidebar";
import WizardHeader from "./WizardHeader";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";

import styles from "@/styles/wizard/wizard.module.css";

type Props = {

    mode?: WizardMode;

};

export default function ReTourWizard({

    mode = "ai_builder",

}: Props) {

    const totalSteps = 7;

    const [wizard, setWizard] = useState<WizardState>({

        mode,

        step: 1,

        data: {

            startDate: "",

            duration: "5",

            customDuration: "",

            arrivalAirport: "",

            totalBudget: "",

            preferredLanguage: "English",

            preferredRegion: [],

            adults: 2,

            children: 0,

            childrenAges: [],

            seniors: 0,

            groupType: "",

            accessibilityNeeds: [],

            interests: [],

            tripPace: "",

            activityLevel: "",

            mustVisit: [],

            placesToAvoid: "",

            accommodationType: "",

            hotelRating: "",

            cuisine: [],

            specialOccasion: "",

            smePreferences: [],

            aiPriority: "",

            freeText: "",

        },

    });

    function updateField<K extends keyof WizardState["data"]>(

        field: K,

        value: WizardState["data"][K]

    ) {

        setWizard((prev) => ({

            ...prev,

            data: {

                ...prev.data,

                [field]: value,

            },

        }));

    }

    function nextStep() {

        if (wizard.step < totalSteps) {

            setWizard((prev) => ({

                ...prev,

                step: prev.step + 1,

            }));

        }

    }

    function previousStep() {

        if (wizard.step > 1) {

            setWizard((prev) => ({

                ...prev,

                step: prev.step - 1,

            }));

        }

    }

    function renderStep() {

        switch (wizard.step) {

            case 1:
                return (
                    <Step1
                        data={wizard.data}
                        updateField={updateField}
                    />
                );

            case 2:
                return (
                    <Step2
                        data={wizard.data}
                        updateField={updateField}
                    />
                );

            case 3:
                return (
                    <Step3
                        data={wizard.data}
                        updateField={updateField}
                    />
                );

            case 4:
                return (
                    <Step4
                        data={wizard.data}
                        updateField={updateField}
                    />
                );

            case 5:
                return (
                    <Step5
                        data={wizard.data}
                        updateField={updateField}
                    />
                );

            case 6:
                return (
                    <Step6
                        data={wizard.data}
                        updateField={updateField}
                    />
                );

            case 7:
                return (
                    <Step7
                        data={wizard.data}
                    />
                );

            default:
                return null;

        }

    }

    return (

        <div className={styles.wizard}>

            <WizardSidebar

                currentStep={wizard.step}

            />

            <main className={styles.main}>

                <WizardHeader

                    currentStep={wizard.step}

                    totalSteps={totalSteps}

                    onNext={nextStep}

                    onBack={previousStep}

                />

                {renderStep()}
                <div className={styles.actions}>

                    <button
                        className="btn btn-outline-secondary"
                        onClick={previousStep}
                        disabled={wizard.step === 1}
                    >
                        Back
                    </button>

                    <button
                        className="btn btn-success"
                        onClick={nextStep}
                    >
                        {
                            wizard.step === totalSteps
                                ? "Generate My Package"
                                : "Continue"
                        }
                    </button>

                </div>

            </main>

        </div>

    );

}