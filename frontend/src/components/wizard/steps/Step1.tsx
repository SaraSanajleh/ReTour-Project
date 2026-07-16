"use client";

import { WizardData } from "@/types/wizard";

import styles from "@/styles/wizard/wizard.module.css";

type Props = {

    data: WizardData;

    updateField: <K extends keyof WizardData>(
        field: K,
        value: WizardData[K]
    ) => void;

};

const durations = ["1", "2", "3", "5", "7", "Custom"];

const languages = [

    "English",

    "Arabic",

    "French",

    "German",

    "Spanish",

    "Italian",

];

const airports = [

    {
        value: "AMM",
        label: "Queen Alia (AMM)"
    },

    {
        value: "AQJ",
        label: "King Hussein (AQJ)"
    },

    {
        value: "OTHER",
        label: "Other"
    },

];

const regions = [

    "Amman",

    "Petra",

    "Wadi Rum",

    "Dead Sea",

    "Aqaba",

    "Jerash",

    "Ajloun",

    "Madaba",

];

export default function Step1({

    data,

    updateField,

}: Props) {

    return (

        <>

            <div className="row g-4">

                <div className="col-md-6">

                    <label className="form-label">

                        Start Date

                    </label>

                    <input

                        type="date"

                        className="form-control"

                        value={data.startDate}

                        onChange={(e) =>

                            updateField(

                                "startDate",

                                e.target.value

                            )

                        }

                    />

                </div>

                <div className="col-md-6">

                    <label className="form-label">

                        Arrival Airport

                    </label>

                    <select

                        className="form-select"

                        value={data.arrivalAirport}

                        onChange={(e) =>

                            updateField(

                                "arrivalAirport",

                                e.target.value as any

                            )

                        }

                    >

                        <option value="">

                            Select Airport

                        </option>

                        {

                            airports.map((airport) => (

                                <option

                                    key={airport.value}

                                    value={airport.value}

                                >

                                    {airport.label}

                                </option>

                            ))

                        }

                    </select>

                </div>

                <div className="col-12">

                    <label className="form-label">

                        Package Duration

                    </label>

                    <div className={styles.durationButtons}>

                        {

                            durations.map((item) => (

                                <button

                                    key={item}

                                    type="button"

                                    className={`${styles.durationButton}

                                    ${data.duration === item

                                            ?

                                            styles.activeDuration

                                            :

                                            ""

                                        }`}

                                    onClick={() =>

                                        updateField(

                                            "duration",

                                            item as any

                                        )

                                    }

                                >

                                    {item}

                                </button>

                            ))

                        }

                    </div>

                </div>
                <div className="col-md-6">

                    <label className="form-label">

                        Total Budget (JOD)

                    </label>

                    <input

                        type="number"

                        className="form-control"

                        placeholder="e.g. 1200"

                        value={data.totalBudget}

                        onChange={(e) =>

                            updateField(

                                "totalBudget",

                                e.target.value

                            )

                        }

                    />

                </div>

                <div className="col-md-6">

                    <label className="form-label">

                        Preferred Language

                    </label>

                    <select

                        className="form-select"

                        value={data.preferredLanguage}

                        onChange={(e) =>

                            updateField(

                                "preferredLanguage",

                                e.target.value

                            )

                        }

                    >

                        {

                            languages.map((language) => (

                                <option

                                    key={language}

                                    value={language}

                                >

                                    {language}

                                </option>

                            ))

                        }

                    </select>

                </div>

                {

                    data.duration === "Custom" && (

                        <div className="col-md-6">

                            <label className="form-label">

                                Custom Duration

                            </label>

                            <input

                                className="form-control"

                                placeholder="Number of days"

                                value={data.customDuration}

                                onChange={(e) =>

                                    updateField(

                                        "customDuration",

                                        e.target.value

                                    )

                                }

                            />

                        </div>

                    )

                }

                <div className="col-12">

                    <label className="form-label mb-3">

                        Preferred Regions

                    </label>

                    <div className={styles.regionChips}>

                        {

                            regions.map((region) => {

                                const selected =

                                    data.preferredRegion.includes(region);

                                return (

                                    <button

                                        key={region}

                                        type="button"

                                        className={`${styles.regionChip}

                                        ${selected

                                                ? styles.activeRegion

                                                : ""

                                            }`}

                                        onClick={() => {

                                            if (selected) {

                                                updateField(

                                                    "preferredRegion",

                                                    data.preferredRegion.filter(

                                                        item => item !== region

                                                    )

                                                );

                                            } else {

                                                updateField(

                                                    "preferredRegion",

                                                    [

                                                        ...data.preferredRegion,

                                                        region,

                                                    ]

                                                );

                                            }

                                        }}

                                    >

                                        {region}

                                    </button>

                                );

                            })

                        }

                    </div>

                </div>

            </div>

        </>

    );

}