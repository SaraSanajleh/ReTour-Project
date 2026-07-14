"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

interface HeroSlide {
    id: string;
    image: string;
    eyebrow: string;
    title: string;
    highlightedText: string;
    description: string;
    location: string;
}

const heroSlides: HeroSlide[] = [
    {
        id: "petra",
        image: "/images/hero/petra-hero.png",
        eyebrow: "AI-Powered Travel Planning",
        title: "Rediscover Jordan with",
        highlightedText: "AI",
        description:
            "Create personalized journeys tailored to your interests, travel style, and budget, supported by trusted local tourism providers.",
        location: "Petra",
    },
    {
        id: "wadi-rum",
        image: "/images/hero/wadi-rum-hero.png",
        eyebrow: "Authentic Desert Experiences",
        title: "Experience the Magic of",
        highlightedText: "Wadi Rum",
        description:
            "Explore dramatic desert landscapes, Bedouin culture, stargazing experiences, jeep tours, camps, and local adventures designed around you.",
        location: "Wadi Rum",
    },
    {
        id: "dead-sea",
        image: "/images/hero/dead-sea-hero.png",
        eyebrow: "Wellness and Relaxation",
        title: "Relax Beside the",
        highlightedText: "Dead Sea",
        description:
            "Build a peaceful Jordan itinerary with wellness resorts, spa treatments, scenic dining, nature, and personalized transportation.",
        location: "Dead Sea",
    },
];

const features = [
    {
        icon: "bi-stars",
        title: "AI Personalized",
        description: "Itineraries created around your exact preferences.",
    },
    {
        icon: "bi-people-fill",
        title: "Local SMEs",
        description: "Supporting trusted tourism businesses across Jordan.",
    },
    {
        icon: "bi-shield-check",
        title: "Secure & Trusted",
        description: "Verified partners and protected trip information.",
    },
    {
        icon: "bi-geo-alt",
        title: "Authentic Experiences",
        description: "Real culture, local services, and meaningful journeys.",
    },
];

export default function Home() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) {
            return;
        }

        const interval = window.setInterval(() => {
            setActiveSlide((currentSlide) =>
                currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1,
            );
        }, 6000);

        return () => window.clearInterval(interval);
    }, [isPaused]);

    const showPreviousSlide = () => {
        setActiveSlide((currentSlide) =>
            currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1,
        );
    };

    const showNextSlide = () => {
        setActiveSlide((currentSlide) =>
            currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1,
        );
    };

    const currentSlide = heroSlides[activeSlide];

    return (
        <main className={styles.page}>
            <header className={styles.header}>
                <nav className={styles.navbar} aria-label="Main navigation">
                    <Link href="/" className={styles.brand}>
                        <span className={styles.brandIcon}>
                            <i className="bi bi-geo-alt-fill" />
                        </span>

                        <span className={styles.brandText}>
                            <strong>ReTour</strong>
                            <small>Rediscover Jordan</small>
                        </span>
                    </Link>

                    <div className={styles.navLinks}>
                        <Link
                            href="/"
                            className={`${styles.navLink} ${styles.activeLink}`}
                        >
                            Home
                        </Link>

                        <Link href="/ready-packages" className={styles.navLink}>
                            Ready Packages
                        </Link>

                        <Link href="/experiences" className={styles.navLink}>
                            Experiences
                        </Link>

                        <Link href="/about" className={styles.navLink}>
                            About Us
                        </Link>

                        <Link href="/for-smes" className={styles.navLink}>
                            For SMEs
                        </Link>

                        <Link href="/contact" className={styles.navLink}>
                            Contact
                        </Link>
                    </div>

                    <div className={styles.navActions}>
                        <button
                            type="button"
                            className={styles.languageButton}
                            aria-label="Change language"
                        >
                            <i className="bi bi-globe2" />
                            <span>EN</span>
                            <i className="bi bi-chevron-down" />
                        </button>

                        <Link href="/login" className={styles.signInButton}>
                            <i className="bi bi-person" />
                            Sign In
                        </Link>
                        <Link href="/register" className={styles.signUpButton}>
                            Sign Up
                        </Link>
                    </div>
                </nav>
            </header>

            <section
                className={styles.hero}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                aria-label="Jordan destinations"
            >
                <div className={styles.backgroundSlides} aria-hidden="true">
                    {heroSlides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`${styles.backgroundSlide} ${index === activeSlide ? styles.activeBackground : ""
                                }`}
                            style={{ backgroundImage: `url("${slide.image}")` }}
                        />
                    ))}
                </div>

                <div className={styles.heroOverlay} />

                <div className={styles.heroContent}>
                    <div key={currentSlide.id} className={styles.animatedContent}>
                        <span className={styles.aiBadge}>
                            <i className="bi bi-stars" />
                            {currentSlide.eyebrow}
                        </span>

                        <h1 className={styles.heroTitle}>
                            {currentSlide.title}
                            <br />
                            <span>{currentSlide.highlightedText}</span>
                        </h1>

                        <p className={styles.heroDescription}>
                            {currentSlide.description}
                        </p>

                        <div className={styles.heroActions}>
                            <Link href="/ai-builder" className={styles.primaryButton}>
                                <i className="bi bi-stars" />
                                Build My AI Trip
                            </Link>

                            <Link
                                href="/ready-packages"
                                className={styles.secondaryButton}
                            >
                                <i className="bi bi-suitcase-lg" />
                                Browse Packages
                            </Link>
                        </div>

                        <div className={styles.socialProof}>
                            <div className={styles.avatars} aria-hidden="true">
                                <span>A</span>
                                <span>M</span>
                                <span>S</span>
                                <span>R</span>
                            </div>

                            <p>
                                <strong>2.5K+</strong> travelers planned journeys with ReTour
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.sliderControls}>
                    <button
                        type="button"
                        className={styles.arrowButton}
                        onClick={showPreviousSlide}
                        aria-label="Show previous destination"
                    >
                        <i className="bi bi-chevron-left" />
                    </button>

                    <div className={styles.slideIndicators}>
                        {heroSlides.map((slide, index) => (
                            <button
                                key={slide.id}
                                type="button"
                                className={`${styles.indicator} ${index === activeSlide ? styles.activeIndicator : ""
                                    }`}
                                onClick={() => setActiveSlide(index)}
                                aria-label={`Show ${slide.location}`}
                                aria-current={index === activeSlide ? "true" : undefined}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        className={styles.arrowButton}
                        onClick={showNextSlide}
                        aria-label="Show next destination"
                    >
                        <i className="bi bi-chevron-right" />
                    </button>
                </div>

                <span className={styles.locationBadge}>
                    <i className="bi bi-geo-alt-fill" />
                    {currentSlide.location}, Jordan
                </span>
            </section>

            <section className={styles.featureBar} aria-label="ReTour benefits">
                {features.map((feature) => (
                    <article key={feature.title} className={styles.feature}>
                        <span className={styles.featureIcon}>
                            <i className={`bi ${feature.icon}`} />
                        </span>

                        <div>
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}