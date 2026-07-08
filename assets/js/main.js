/* ==========================================================================
   MoveRx Webpage Logic (v2)
   Description: Dynamic JS content injection, navigation rendering,
                dynamic hero construction, and scroll-animated decorative leaf logic.
   ========================================================================== */

/* 1. CENTRALIZED WEBSITE CONTENT DEFINITIONS
   ==========================================================================
   Edit this object to update text, links, or image paths across the page.
   This avoids hardcoding strings directly in the HTML codebase. */
const websiteContent = {
    // Navigation Configuration
    navigation: {
        logo: {
            textHighlight: "Move", // Styled in accent green/italic
            textRegular: "Rx",     // Styled in tropical yellow/gold
            link: "index.html"
        },
        links: [
            { text: "Specialties", url: "#specialties" },
            { text: "My Journey", url: "#journey" },
            { text: "Testimonials", url: "#testimonials" }
        ],
        cta: {
            text: "Book Consultation",
            url: "#contact"
        }
    },

    // Hero Section Configuration
    hero: {
        badge: "South Florida's Premier Specialist",
        heading: "Reclaim your freedom.<br>One step at a time.",
        description: "MoveRx blends movement science with clinical corrective exercise and post-rehab expertise. Working in close coordination with your healthcare providers, Mollie delivers safe, evidence-based training for precise functional recovery.",
        image: "assets/images/hero/hero-bg.jpg",
        imageAlt: "Mollie's brother wading in beach ocean waves during corrective physical mobility therapy",
        ctas: [
            { text: "Start Your Journey", url: "#contact", primary: true },
            { text: "The Mission", url: "#principles", primary: false }
        ]
    },

    // Featured Success Gallery Configuration
    gallery: {
        heading: "Client Success Stories",
        subtext: "Experience the real-life transformations of clients who have regained their strength, mobility, and confidence. Click or drag the card deck on the right to browse their stories.",
        items: [
            {
                image: "assets/images/success/gallery-1.jpg",
                title: "John C.",
                description: "“Mollie helped me recover full range of movement in both shoulders. I've gained 25 lbs of solid muscle and feel like a new person.”",
                tag: "Cancer Survivor",
                date: "Delray Beach, FL"
            },
            {
                image: "assets/images/success/gallery-2.jpg",
                title: "Cathy B.",
                description: "“Arthritis and fibromyalgia made movement painful. Mollie's customized rehab provided relief that years of medication couldn’t.”",
                tag: "Rehabilitation",
                date: "Palm Beach, FL"
            },
            {
                image: "assets/images/success/gallery-3.jpg",
                title: "Benjamin P.",
                description: "“As an exercise physiologist and firefighter, I can confidently state Mollie possesses outstanding, premium training expertise.”",
                tag: "Exercise Physiologist",
                date: "Boynton Beach, FL"
            },
            {
                image: "assets/images/success/gallery-4.jpg",
                title: "Coach Conroy W.",
                description: "“Having trained NFL players for over ten years, I can state that Mollie’s rehab and strength knowledge is truly remarkable.”",
                tag: "Athletic Director",
                date: "Zion Lutheran"
            },
            {
                image: "assets/images/success/gallery-5.jpg",
                title: "Judy K.",
                description: "“Mollie corrected my Forward Head Posture. My neck tension, headaches, and eyeball pressure are completely gone.”",
                tag: "Posture Correction",
                date: "Delray Beach, FL"
            },
            {
                image: "assets/images/success/gallery-6.jpg",
                title: "Jess M.",
                description: "“Sustainable lifestyle and strength changes made a lasting impact. I didn't just lose weight—I became stronger and more confident.”",
                tag: "Strength & Lifestyle",
                date: "Palm Beach, FL"
            }
        ]
    },

    // Success Stories Section Configuration (used by renderPrinciples)
    successStories: {
        images: [
            "assets/images/success/gallery-1.jpg",
            "assets/images/success/gallery-2.jpg",
            "assets/images/success/gallery-3.jpg",
            "assets/images/success/gallery-4.jpg",
            "assets/images/success/gallery-5.jpg",
            "assets/images/success/gallery-6.jpg"
        ]
    },

    // Mollie's Practice & Principles Configuration (Migrated from Mission Page)
    principles: {
        heading: "Mollie’s Practice & Principles",
        paragraphs: [
            "Under the <strong>MoveRx</strong> framework, I merge <strong>corrective exercise</strong> and <strong>post-rehab expertise</strong> with evidence-based programming. By collaborating closely with your healthcare providers, I ensure your transition from clinical care to functional recovery is seamless, precise, and completely safe.",
            "With over six and a half years of active physical rehabilitation in South Florida, my practice is built around precision safety—designing customized movement plans for clients recovering from orthopedic surgeries, joint replacements, and neurological transitions.",
            "<strong>\"Functional recovery is built on evidence-based movement. Through close medical collaboration, I provide the precise and safe training you need to move with absolute confidence.\"</strong> — Mollie Wittenkeller"
        ]
    },

    // Mollie's Bio Career Journey Configuration
    journey: {
        heading: "My Career Journey",
        paragraphs: [
            "For more than 25 years, I’ve dedicated my career to helping people move better, feel stronger, and reclaim confidence in their bodies. As a Specialized Personal Trainer serving Boynton Beach and the surrounding communities, my passion lies in functional movement, corrective exercise, and guiding high‑risk and special populations with the care, precision, and encouragement they deserve.",
            "My training foundation comes from Fitness Institute International, where I studied Kinesiology and High‑Risk Populations. Over the years, I’ve continued to expand my expertise with advanced credentials including Master Trainer, Corrective Exercise Specialist, and Functional Training Specialist. This ongoing education allows me to design safe, effective, and highly personalized programs for every client — from post‑rehabilitation and chronic conditions to body sculpting and real‑world strength.",
            "What truly drives me is connection. I believe in meeting clients exactly where they are, honoring their unique challenges, and celebrating every win along the way. My coaching style blends science‑based training with compassion, accountability, and a genuine commitment to long‑term well‑being.",
            "Whether you’re rebuilding strength, improving mobility, or striving for your next level of fitness, I’m here to guide you with expertise, patience, and unwavering support. Together, we’ll create a stronger, healthier, more confident you."
        ]
    },

    // Specialties Bento Sections (Migrated from Mission Page)
    specialties: [
        {
            title: "Posture Correction Specialist",
            description: "Poor posture is called “Forward Head Posture” (FHP) and is successfully treatable and preventable. It is evident by the ears protruding forward past the level of the shoulders rather than being in line with them.\n\nClients often describe symptoms of extreme tension or tightness in the front of their necks, along with pain and discomfort in the back of the skull and shoulders. As FHP progresses over time, the brain attempts to level the eyes by increasing the head tilt on the skull, causing major headaches and tension behind the eyeballs.",
            image: "assets/images/mission/posture_specialist.png",
            badge: "Biomechanics"
        },
        {
            title: "Post Rehab Specialist",
            description: "The most common client for a post-rehabilitation fitness trainer is an older adult recovering from surgeries (such as hip or knee replacements) or managing chronic joint pain.\n\nThese sessions are heavily focused on functional fitness, fall prevention, and rebuilding trust in an injured joint after physical therapy ends.",
            image: "assets/images/mission/post_rehab.png",
            badge: "Recovery"
        },
        {
            title: "Strength Training Specialist",
            description: "These sessions feature evidence-based exercise programs personally designed to improve physical performance, build muscle, and reduce injury risk.\n\nWe assess and construct specific movement patterns, teach proper lifting techniques, and monitor progress, working with everyone from elite athletes to individuals recovering from injuries.",
            image: "assets/images/mission/strength_training.png",
            badge: "Performance"
        },
        {
            title: "Aqua Fitness Instructor",
            description: "Buoyancy supports roughly 90% of total body weight when submerged, making it ideal for those with arthritis, recovering from injuries, or managing weight.\n\nPushing and pulling against water naturally engages opposing muscle groups, serving as an effective way to tone muscles without using heavy weights.",
            image: "assets/images/mission/aqua_fitness.png",
            badge: "Hydrotherapy"
        }
    ],

    // Testimonials Section Configuration
    testimonials: {
        heading: "Success Stories & Client Testimonials",
        subtext: "See and hear from the people who have transformed their lives with MoveRx. Real stories of recovery, strength, and renewed vitality.",
        list: [
            {
                stars: 5,
                author: "J.C.",
                quote: "Over the past 6 years, Mollie’s training sessions have helped this one-time couch potato develop muscle mass, prep for and recoup quickly from three major surgeries, and feel 20 years younger."
            },
            {
                stars: 5,
                author: "J.O.",
                quote: "Working with Mollie was truly life-changing. Beyond challenging and engaging workouts tailored to my goals, she taught me about my body and how sustainable lifestyle and nutrition changes make a lasting impact. I didn't just lose weight—I became stronger, more confident, and healthier overall."
            },
            {
                stars: 5,
                author: "A.C.",
                quote: "I’ve worked with Mollie since high school, and she's trained me through so many stages of life—from high school sports, to wedding dress prep, and even rehabbing a hip injury. She doesn't just guide workouts, she teaches you how to stay safe, avoid injury, and feel confident both mentally and physically.\n\nHer expertise and attention to my individual needs have helped me perform at my best while gaining lifelong knowledge about stretching, nutrition, and how to properly rest and recover. I highly recommend Mollie. She is a top quality trainer and results-driven mentor who truly makes exercise fun and engaging."
            },
            {
                stars: 5,
                author: "D.S.",
                quote: "13 months ago Mollie began working her P.T magic with me.\n\nThe first four months involved pool work only. Hydrotherapy soon freed up the impinged nerve connections to my legs and feet while strengthening weakened muscles and tendons. Month six began in the gym. Specialized exercises, stretches, aerobic activities and weight lifting have made me stronger and more flexible. At Age 72 bigger biceps is a tangible reward. Mollie is super educated and she really cares. I will continue to work with her to achieve lifelong physical and mental well being."
            }
        ]
    },

    // Decorative Scroll Layout Elements Settings
    leaves: [
        {
            id: "leaf-left-1",
            type: "leaf-left",
            svgType: "monstera",
            initialTop: 450 // Monstera leaf sits in Hero/Transition area
        },
        {
            id: "leaf-right-1",
            type: "leaf-right",
            svgType: "palm",
            initialTop: 1050 // Palm tree silhouette sits near Success header
        },
        {
            id: "leaf-left-2",
            type: "leaf-left",
            svgType: "sand",
            initialTop: 1650 // Sand ripples sit near Success card
        },
        {
            id: "leaf-right-2",
            type: "leaf-right",
            svgType: "fern",
            initialTop: 1850 // Fern leaf sits near footer transition
        }
    ],


    // Tropical SVG Shapes Vector Graphic Markups
    svgs: {
        // 1. Monstera leaf
        monstera: `
            <svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" class="scroll-leaf-svg" aria-hidden="true">
                <path d="M50,145 Q48,75 25,15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M47,125 C32,120 18,102 12,88 C18,92 36,110 46,115 Z" fill="currentColor"/>
                <path d="M45,110 C29,103 14,84 8,70 C15,74 34,92 43,99 Z" fill="currentColor"/>
                <path d="M42,95 C25,86 11,67 5,52 C13,57 30,77 40,84 Z" fill="currentColor"/>
                <path d="M39,80 C22,69 8,50 3,35 C11,40 27,60 37,69 Z" fill="currentColor"/>
                <path d="M35,65 C19,52 6,33 2,18 C9,23 23,43 33,54 Z" fill="currentColor"/>
                <path d="M31,50 C16,35 4,18 1,5 C7,10 19,27 28,39 Z" fill="currentColor"/>
                <path d="M51,125 C66,120 80,102 86,88 C80,92 62,110 52,115 Z" fill="currentColor"/>
                <path d="M49,110 C65,103 78,84 84,70 C77,74 58,92 49,99 Z" fill="currentColor"/>
                <path d="M46,95 C63,86 75,67 81,52 C73,57 56,77 46,84 Z" fill="currentColor"/>
                <path d="M43,80 C60,69 70,50 75,35 C67,40 51,60 41,69 Z" fill="currentColor"/>
                <path d="M39,65 C56,52 64,33 69,18 C61,23 47,43 37,54 Z" fill="currentColor"/>
                <path d="M34,50 C51,35 57,18 60,5 C53,10 41,27 32,39 Z" fill="currentColor"/>
            </svg>
        `,
        // 2. Palm tree silhouette
        palm: `
            <svg viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg" class="scroll-leaf-svg" aria-hidden="true">
                <path d="M40,175 Q45,110 70,55" fill="none" stroke="currentColor" stroke-width="6.5" stroke-linecap="round"/>
                <path d="M40,175 Q45,110 70,55" fill="none" stroke="#f8f6f0" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="2 6"/>
                <path d="M70,55 Q50,45 25,48 Q48,32 70,55" fill="currentColor"/>
                <path d="M70,55 Q55,25 35,15 Q55,10 70,55" fill="currentColor"/>
                <path d="M70,55 Q75,20 88,10 Q85,25 70,55" fill="currentColor"/>
                <path d="M70,55 Q95,30 108,25 Q95,42 70,55" fill="currentColor"/>
                <path d="M70,55 Q100,58 112,65 Q95,68 70,55" fill="currentColor"/>
                <path d="M70,55 Q90,80 100,95 Q82,80 70,55" fill="currentColor"/>
                <path d="M70,55 Q65,75 58,98 Q58,75 70,55" fill="currentColor"/>
                <path d="M70,55 Q45,65 30,78 Q45,55 70,55" fill="currentColor"/>
            </svg>
        `,
        // 3. Sand waves ripples
        sand: `
            <svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg" class="scroll-leaf-svg" aria-hidden="true">
                <path d="M10,25 C40,5 70,45 100,25 C120,15 135,22 145,28" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                <path d="M5,55 C35,35 65,75 95,55 C115,45 130,52 140,58" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
                <path d="M15,85 C45,65 75,105 105,85 C125,75 140,82 150,88" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
            </svg>
        `,
        // 4. Tropical Fern leaf
        fern: `
            <svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" class="scroll-leaf-svg" aria-hidden="true">
                <path d="M50,145 Q53,85 62,10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M51,130 Q30,125 15,122 Q35,118 52,122" fill="currentColor"/>
                <path d="M52,122 Q70,117 85,114 Q65,110 52,114" fill="currentColor"/>
                <path d="M53,110 Q32,104 18,100 Q37,97 53,101" fill="currentColor"/>
                <path d="M54,101 Q72,96 87,92 Q67,89 54,92" fill="currentColor"/>
                <path d="M54,90 Q34,83 20,78 Q39,76 55,80" fill="currentColor"/>
                <path d="M55,80 Q73,75 88,70 Q68,68 55,71" fill="currentColor"/>
                <path d="M56,70 Q36,62 22,57 Q41,55 56,59" fill="currentColor"/>
                <path d="M56,59 Q74,53 89,48 Q69,47 56,50" fill="currentColor"/>
                <path d="M57,50 Q38,42 25,37 Q43,35 57,39" fill="currentColor"/>
                <path d="M58,39 Q76,33 90,28 Q70,27 58,30" fill="currentColor"/>
                <path d="M59,30 Q42,22 30,17 Q47,16 59,20" fill="currentColor"/>
                <path d="M59,20 Q75,14 88,9 Q70,9 59,12" fill="currentColor"/>
            </svg>
        `
    }
};

/* 2. DYNAMIC DOM RENDERERS
   ========================================================================== */

/**
 * Renders the navigation bar pill inside the <header> tag
 */
function renderNavigation() {
    const header = document.getElementById("nav-header");
    if (!header) {
        console.error("Navigation mount container '#nav-header' not found.");
        return;
    }

    // 1. Create nav pill wrapper
    const navPill = document.createElement("nav");
    navPill.className = "nav-pill";

    // 2. Create Image Logo
    const logoLink = document.createElement("a");
    logoLink.href = websiteContent.navigation.logo.link;
    logoLink.className = "logo";
    logoLink.ariaLabel = "MoveRx Home";
    logoLink.innerHTML = `
        <img src="assets/images/logo.png" alt="MoveRx Logo" class="logo-img">
    `;
    navPill.appendChild(logoLink);

    // 3. Create Mobile Hamburger Menu Toggle (Checkbox Hack for pure CSS action)
    const toggleInput = document.createElement("input");
    toggleInput.type = "checkbox";
    toggleInput.id = "mobile-toggle";
    toggleInput.className = "mobile-toggle-checkbox";
    toggleInput.setAttribute("aria-label", "Toggle navigation menu");
    navPill.appendChild(toggleInput);

    const toggleLabel = document.createElement("label");
    toggleLabel.htmlFor = "mobile-toggle";
    toggleLabel.className = "mobile-toggle-label";
    toggleLabel.innerHTML = "<span></span><span></span><span></span>";
    navPill.appendChild(toggleLabel);

    // 4. Create Nav Links List
    const navLinks = document.createElement("ul");
    navLinks.className = "nav-links";

    // Populate standard links from content object
    websiteContent.navigation.links.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.url;
        a.textContent = item.text;
        li.appendChild(a);
        navLinks.appendChild(li);
    });

    // Mobile-only booking CTA in the slide-out menu drawer
    const mobileCtaLi = document.createElement("li");
    mobileCtaLi.className = "mobile-only";
    const mobileCta = document.createElement("a");
    mobileCta.href = websiteContent.navigation.cta.url;
    mobileCta.className = "btn-primary";
    mobileCta.textContent = websiteContent.navigation.cta.text;
    
    // Close navigation menu when clicking links or buttons
    mobileCta.addEventListener("click", () => {
        toggleInput.checked = false;
    });
    
    mobileCtaLi.appendChild(mobileCta);
    navLinks.appendChild(mobileCtaLi);

    navPill.appendChild(navLinks);

    // 5. Desktop-only booking CTA (styled inside nav-pill container)
    const desktopCtaContainer = document.createElement("div");
    desktopCtaContainer.className = "nav-cta desktop-only";
    const desktopCta = document.createElement("a");
    desktopCta.href = websiteContent.navigation.cta.url;
    desktopCta.className = "btn-primary-small";
    desktopCta.textContent = websiteContent.navigation.cta.text;
    desktopCtaContainer.appendChild(desktopCta);
    navPill.appendChild(desktopCtaContainer);

    // Close menu when clicking standard links in mobile view
    navLinks.querySelectorAll("a:not(.btn-primary)").forEach(link => {
        link.addEventListener("click", () => {
            toggleInput.checked = false;
        });
    });

    // Mount nav pill to header
    header.appendChild(navPill);
}

/**
 * Renders the Full-Background Hero Section inside #main-content
 */
function renderHero() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) {
        console.error("Main content mount container '#main-content' not found.");
        return;
    }

    // 1. Create Hero section container
    const heroSection = document.createElement("section");
    heroSection.className = "hero-section";

    // 2. Create Dynamic Background Image element (independent opacity)
    const bgImage = document.createElement("div");
    bgImage.className = "hero-bg-image";
    bgImage.style.backgroundImage = `url('${websiteContent.hero.image}')`;
    bgImage.setAttribute("role", "img");
    bgImage.setAttribute("aria-label", websiteContent.hero.imageAlt);
    heroSection.appendChild(bgImage);

    // 3. Create Legibility Overlay
    const overlay = document.createElement("div");
    overlay.className = "hero-overlay";
    heroSection.appendChild(overlay);

    // Ambient decorative background orbs (sit between overlay and content)
    const glowTeal = document.createElement("div");
    glowTeal.className = "hero-glow-teal";
    const glowGold = document.createElement("div");
    glowGold.className = "hero-glow-gold";
    heroSection.appendChild(glowTeal);
    heroSection.appendChild(glowGold);

    // 4. Create Centered Content Container
    const container = document.createElement("div");
    container.className = "container hero-content-wrapper";
    container.style.opacity = '0'; // Hide initially, animation triggered after preloader

    // Accent Badge
    const badge = document.createElement("span");
    badge.className = "pill-badge";
    badge.textContent = websiteContent.hero.badge;
    container.appendChild(badge);

    // Main Heading
    const heading = document.createElement("h1");
    heading.innerHTML = websiteContent.hero.heading;
    container.appendChild(heading);

    // Description text
    const description = document.createElement("p");
    description.className = "hero-description";
    description.textContent = websiteContent.hero.description;
    container.appendChild(description);

    // Action buttons container
    const actionsContainer = document.createElement("div");
    actionsContainer.className = "hero-actions";

    websiteContent.hero.ctas.forEach(cta => {
        const button = document.createElement("a");
        button.href = cta.url;
        button.textContent = cta.text;
        
        if (cta.primary) {
            button.className = "btn-primary";
        } else {
            button.className = "btn-secondary";
        }
        
        actionsContainer.appendChild(button);
    });

    container.appendChild(actionsContainer);

    // Assemble section
    heroSection.appendChild(container);
    
    // Inject at the beginning of the main content
    mainContent.appendChild(heroSection);
}



/**
 * Creates and injects the scroll-animated leaf containers in the DOM
 */
function renderLeaves() {
    const mountPoint = document.getElementById("leaves-mount");
    if (!mountPoint) {
        console.error("Leaves mount container '#leaves-mount' not found.");
        return;
    }

    websiteContent.leaves.forEach(leafData => {
        const leafContainer = document.createElement("div");
        leafContainer.id = leafData.id;
        leafContainer.className = `scroll-leaf-container ${leafData.type} type-${leafData.svgType}`;
        leafContainer.style.top = `${leafData.initialTop}px`;
        
        // Dynamic loading of specific SVG vector graphic markup
        leafContainer.innerHTML = websiteContent.svgs[leafData.svgType];
        mountPoint.appendChild(leafContainer);
    });
}

/* 3. PERFORMANCE-OPTIMIZED LEAF SCROLL DECORATIONS
   ========================================================================== */

/**
 * Setup scroll event handlers to animate decorative foliage
 */
function initLeafScrollAnimation() {
    const leaves = document.querySelectorAll(".scroll-leaf-container");
    if (leaves.length === 0) return;

    function updateLeaves() {
        const viewportCenter = window.innerHeight / 2;
        const maxDistance = window.innerHeight * 0.65; // Range of scroll effect

        leaves.forEach(leaf => {
            const rect = leaf.getBoundingClientRect();
            const leafCenter = rect.top + rect.height / 2;
            const distance = Math.abs(leafCenter - viewportCenter);

            if (distance < maxDistance) {
                // Calculate scale of effect (0 = edge of range, 1 = centered)
                const progress = 1 - (distance / maxDistance);
                const ease = Math.sin(progress * Math.PI / 2); // Smooth sine ease out

                // Set different peak opacity for different elements for visual variety
                let peakOpacity = 0.38; // Default leaf
                if (leaf.classList.contains("type-palm")) peakOpacity = 0.25; // Delicate silhouette
                if (leaf.classList.contains("type-sand")) peakOpacity = 0.20; // Soft ripples

                const opacity = ease * peakOpacity;
                const isLeft = leaf.classList.contains("leaf-left");

                // Sway rotation: from 10deg (resting) to 55deg (reaching on-screen)
                const startAngle = 10;
                const endAngle = 55;
                const currentAngle = startAngle + ease * (endAngle - startAngle);
                const rotateDeg = isLeft ? currentAngle : -currentAngle;

                // Slide offset: from -65px to 0px
                const slideOffset = (1 - ease) * 65;
                const translateX = isLeft ? -slideOffset : slideOffset;

                leaf.style.opacity = opacity;
                leaf.style.transform = `translateX(${translateX}px) rotate(${rotateDeg}deg)`;
            } else {
                // Completely out of scope: hide and tuck away
                const isLeft = leaf.classList.contains("leaf-left");
                leaf.style.opacity = 0;
                leaf.style.transform = `translateX(${isLeft ? -65 : 65}px) rotate(${isLeft ? 10 : -10}deg)`;
            }
        });
    }

    // Scroll throttle using requestAnimationFrame
    let scrollTicking = false;
    window.addEventListener("scroll", () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                updateLeaves();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    }, { passive: true });

    // Run initially and on resize
    updateLeaves();
    window.addEventListener("resize", updateLeaves, { passive: true });
}

/**
 * Renders the Premium Dark-Green Footer Section with a Business Card and 3D Spotlight Card
 */
function renderFooter() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) {
        console.error("Main content mount container '#main-content' not found.");
        return;
    }

    // 1. Create Footer Element
    const footer = document.createElement("footer");
    footer.className = "site-footer-green";
    footer.id = "contact";

    // 2. Create Grid Container
    const gridContainer = document.createElement("div");
    gridContainer.className = "container footer-grid-container";

    // Column 1: Business Card
    const leftCol = document.createElement("div");
    leftCol.className = "footer-left-col";

    const businessCard = document.createElement("div");
    businessCard.className = "business-card";
    businessCard.innerHTML = `
        <div class="card-logo">
            <img src="assets/images/logo.png" alt="MoveRx Logo" class="footer-logo-img">
        </div>
        <div class="card-title-group">
            <h3>Mollie W.</h3>
            <p class="card-specialty">Corrective Exercise Specialist & Movement Scientist</p>
        </div>
        <div class="card-contact-info">
            <a href="tel:+15551234567" class="card-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>(555) 123-4567</span>
            </a>
            <a href="mailto:mollie@activehorizonsfl.com" class="card-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>mollie@activehorizonsfl.com</span>
            </a>
            <div class="card-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2a10 10 0 0 0-10 10c0 5.25 10 12 10 12s10-6.75 10-12a10 10 0 0 0-10-10z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Palm Beach County, FL</span>
            </div>
        </div>
        <div class="card-socials">
            <a href="#" class="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 320 512" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
            </a>
            <a href="#" class="social-icon" aria-label="Twitter">
                <svg fill="currentColor" viewBox="0 0 48 48"><path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></svg>
            </a>
            <a href="#" class="social-icon" aria-label="Instagram">
                <svg fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></svg>
            </a>
        </div>
    `;
    leftCol.appendChild(businessCard);

    // Column 2: 3D Spotlight Card
    const rightCol = document.createElement("div");
    rightCol.className = "footer-right-col";

    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container-3d noselect";
    cardContainer.setAttribute("aria-label", "Interactive 3D highlight card");

    const canvas = document.createElement("div");
    canvas.className = "canvas-3d";

    // 25 Invisible Trackers
    for (let i = 1; i <= 25; i++) {
        const tracker = document.createElement("div");
        tracker.className = `tracker tr-${i}`;
        canvas.appendChild(tracker);
    }

    // Spotlight Split Content
    const spotlightContent = document.createElement("div");
    spotlightContent.className = "card-content-3d spotlight-split-layout";
    spotlightContent.innerHTML = `
        <div class="spotlight-image-side">
            <img src="assets/images/misc/spotlight-image.jpeg" alt="Mollie MoveRx Mission Spotlight" class="spotlight-img">
        </div>
        <div class="spotlight-text-side">
            <span class="spotlight-badge">Clinical Spotlight</span>
            <h2 class="card-title-3d">The MoveRx Mission</h2>
            <p class="card-description-3d">
                “MoveRx integrates functional movement, corrective exercise, and mindful coaching to support whole‑body wellness. My mission is to help clients move with ease, strength, and purpose — in the gym, at work, and throughout life.”
                <span class="quote-author">– Mollie W.</span>
            </p>
            <div class="card-stats-row-3d">
                <div class="stat-box-3d">
                    <span class="stat-number-3d">27+</span>
                    <span class="stat-label-3d">Years Active</span>
                </div>
                <div class="stat-box-3d">
                    <span class="stat-number-3d">AED & CPR</span>
                    <span class="stat-label-3d">Certified</span>
                </div>
                <div class="stat-box-3d">
                    <span class="stat-number-3d">100%</span>
                    <span class="stat-label-3d">Mobile Care</span>
                </div>
            </div>
        </div>
    `;
    canvas.appendChild(spotlightContent);
    cardContainer.appendChild(canvas);
    rightCol.appendChild(cardContainer);

    gridContainer.appendChild(leftCol);
    gridContainer.appendChild(rightCol);
    footer.appendChild(gridContainer);

    // 3. Add Footer Bottom Copyright
    const footerBottom = document.createElement("div");
    footerBottom.className = "footer-bottom-bar";
    footerBottom.innerHTML = `
        <div class="container">
            <p>&copy; 2026 MoveRx. All rights reserved.</p>
        </div>
    `;
    footer.appendChild(footerBottom);

    mainContent.appendChild(footer);
}

/**
 * Renders the Client Testimonials Section inside #main-content
 * Layout displays as a looping horizontal floating card track.
 */
function renderTestimonials() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) {
        console.error("Main content mount container '#main-content' not found.");
        return;
    }

    const testimonialsData = websiteContent.testimonials;

    // Create Section Container
    const testimonialsSection = document.createElement("section");
    testimonialsSection.className = "testimonials-section";
    testimonialsSection.id = "testimonials";

    const container = document.createElement("div");
    container.className = "container";

    // Section Header
    const sectionHeader = document.createElement("div");
    sectionHeader.className = "section-header animate-fade-in";

    const heading = document.createElement("h2");
    heading.textContent = testimonialsData.heading;
    sectionHeader.appendChild(heading);

    const subtext = document.createElement("p");
    subtext.className = "section-subtext";
    subtext.textContent = testimonialsData.subtext;
    sectionHeader.appendChild(subtext);

    container.appendChild(sectionHeader);

    // Create horizontal track wrapper (takes up viewport width)
    const trackWrapper = document.createElement("div");
    trackWrapper.className = "testimonials-track-wrapper";

    const track = document.createElement("div");
    track.className = "testimonials-track";

    // Duplicate testimonials array for a seamless loop
    const doubledList = [...testimonialsData.list, ...testimonialsData.list];

    doubledList.forEach((testi, index) => {
        const card = document.createElement("div");
        card.className = "card";

        const bg = document.createElement("div");
        bg.className = "bg";

        // Stars
        const starsDiv = document.createElement("div");
        starsDiv.className = "testimonial-stars";
        starsDiv.innerHTML = "★".repeat(testi.stars);
        bg.appendChild(starsDiv);

        // Quote
        const quoteP = document.createElement("p");
        quoteP.className = "testimonial-quote";
        quoteP.textContent = testi.quote;
        bg.appendChild(quoteP);

        // Author
        const authorDiv = document.createElement("div");
        authorDiv.className = "testimonial-author-info";

        const nameSpan = document.createElement("span");
        nameSpan.className = "testimonial-author-name";
        nameSpan.textContent = testi.author;
        authorDiv.appendChild(nameSpan);

        const metaSpan = document.createElement("span");
        metaSpan.className = "testimonial-author-meta";
        metaSpan.textContent = "Verified Client";
        authorDiv.appendChild(metaSpan);

        bg.appendChild(authorDiv);

        const blob = document.createElement("div");
        blob.className = "blob";

        card.appendChild(bg);
        card.appendChild(blob);
        track.appendChild(card);
    });

    trackWrapper.appendChild(track);
    container.appendChild(trackWrapper);
    testimonialsSection.appendChild(container);

    // Insert testimonials section
    mainContent.appendChild(testimonialsSection);

    // Bind interaction logic: JS-based marquee auto-scroll and manual drag-to-scroll
    let currentX = 0;
    let isDragging = false;
    let startX = 0;
    let dragXStart = 0;
    let isPaused = false;
    let clickStartX = 0;
    let clickStartY = 0;

    // Calculate half length of the track
    let halfWidth = track.scrollWidth / 2;

    // Auto-scroll loop
    function animateMarquee() {
        if (!isDragging && !isPaused) {
            currentX -= 0.6; // Auto scroll speed
            if (Math.abs(currentX) >= halfWidth) {
                currentX = 0;
            }
            track.style.transform = `translate3d(${currentX}px, 0, 0)`;
        }
        requestAnimationFrame(animateMarquee);
    }

    // Wait until track layout has rendered to get correct scrollWidth
    setTimeout(() => {
        halfWidth = track.scrollWidth / 2;
        // Start scroll animation loop
        requestAnimationFrame(animateMarquee);
    }, 100);

    // Recalculate halfWidth on resize
    window.addEventListener("resize", () => {
        halfWidth = track.scrollWidth / 2;
    });

    // Mouse drag handlers
    track.addEventListener("mousedown", (e) => {
        isDragging = true;
        isPaused = true;
        startX = e.clientX;
        clickStartX = e.clientX;
        clickStartY = e.clientY;
        dragXStart = currentX;
        track.classList.add("dragging");
        e.preventDefault(); // Prevent text highlight selection
    });

    window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        currentX = dragXStart + deltaX;

        // Loop bounds wrapping while dragging
        if (currentX > 0) {
            currentX -= halfWidth;
            dragXStart -= halfWidth;
        } else if (Math.abs(currentX) >= halfWidth) {
            currentX += halfWidth;
            dragXStart += halfWidth;
        }

        track.style.transform = `translate3d(${currentX}px, 0, 0)`;
    });

    window.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
            const activeCard = track.querySelector(".card.active-focus");
            if (!activeCard) {
                isPaused = false;
            }
            track.classList.remove("dragging");
        }
    });

    // Touch swipe handlers
    track.addEventListener("touchstart", (e) => {
        isDragging = true;
        isPaused = true;
        startX = e.touches[0].clientX;
        clickStartX = e.touches[0].clientX;
        clickStartY = e.touches[0].clientY;
        dragXStart = currentX;
        track.classList.add("dragging");
    });

    window.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - startX;
        currentX = dragXStart + deltaX;

        if (currentX > 0) {
            currentX -= halfWidth;
            dragXStart -= halfWidth;
        } else if (Math.abs(currentX) >= halfWidth) {
            currentX += halfWidth;
            dragXStart += halfWidth;
        }

        track.style.transform = `translate3d(${currentX}px, 0, 0)`;
    });

    window.addEventListener("touchend", () => {
        if (isDragging) {
            isDragging = false;
            const activeCard = track.querySelector(".card.active-focus");
            if (!activeCard) {
                isPaused = false;
            }
            track.classList.remove("dragging");
        }
    });

    // Card click event handler (expand / collapse card)
    document.addEventListener("click", (e) => {
        const clickedCard = e.target.closest(".testimonials-section .card");
        const activeCard = track.querySelector(".card.active-focus");

        if (clickedCard) {
            // Re-verify it wasn't a drag release
            const deltaX = Math.abs(e.clientX - clickStartX);
            const deltaY = Math.abs(e.clientY - clickStartY);
            if (deltaX > 6 || deltaY > 6) {
                return; // Dragging, ignore click toggle
            }

            e.stopPropagation();
            if (clickedCard.classList.contains("active-focus")) {
                clickedCard.classList.remove("active-focus");
                isPaused = false;
                track.classList.remove("paused");
            } else {
                if (activeCard) {
                    activeCard.classList.remove("active-focus");
                }
                clickedCard.classList.add("active-focus");
                isPaused = true;
                track.classList.add("paused");
            }
        } else {
            if (activeCard) {
                activeCard.classList.remove("active-focus");
                isPaused = false;
                track.classList.remove("paused");
            }
        }
    });
}

/**
 * Renders the Interactive Success Gallery Stack Section inside #main-content
 */
function renderGallery() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    const galleryData = websiteContent.gallery;
    const journeyData = websiteContent.journey;
    if (!galleryData || !journeyData) return;

    const section = document.createElement("section");
    section.className = "gallery-grid-section";
    section.id = "journey"; // changed from gallery

    const container = document.createElement("div");
    container.className = "container";

    const stackContainerDiv = document.createElement("div");
    stackContainerDiv.className = "stack-gallery-container";

    // Left Column: Journey Text 
    const textColumn = document.createElement("div");
    textColumn.className = "gallery-text-column";

    const sectionHeader = document.createElement("div");
    sectionHeader.className = "section-header animate-fade-in";

    const heading = document.createElement("h2");
    heading.textContent = journeyData.heading;
    sectionHeader.appendChild(heading);
    textColumn.appendChild(sectionHeader);

    const journeyContent = document.createElement("div");
    journeyContent.className = "journey-content animate-fade-in";
    journeyContent.style.animationDelay = "0.15s";
    
    journeyData.paragraphs.forEach(pText => {
        const p = document.createElement("p");
        p.className = "journey-paragraph";
        p.innerHTML = pText;
        journeyContent.appendChild(p);
    });

    textColumn.appendChild(journeyContent);

    // Right Column: Card Stack Container
    const stackColumn = document.createElement("div");
    stackColumn.className = "gallery-stack-column animate-fade-in";
    stackColumn.style.animationDelay = "0.3s";

    const stackContainer = document.createElement("div");
    stackContainer.className = "stack-container";

    // Render cards backwards so the first item in array (index 0) is appended last (visual top)
    const reversedItems = [...galleryData.items].reverse();
    reversedItems.forEach((item, index) => {
        const originalIndex = galleryData.items.length - index - 1;
        const wrapper = document.createElement("div");
        wrapper.className = "card-rotate-wrapper";
        wrapper.dataset.index = originalIndex;

        const card = document.createElement("div");
        card.className = "stack-card";

        const img = document.createElement("img");
        img.src = item.image;
        img.alt = `Gallery image ${index + 1}`;
        img.loading = "lazy";
        
        card.appendChild(img);
        wrapper.appendChild(card);
        stackContainer.appendChild(wrapper);
    });

    stackColumn.appendChild(stackContainer);
    
    stackContainerDiv.appendChild(textColumn);
    stackContainerDiv.appendChild(stackColumn);

    container.appendChild(stackContainerDiv);
    section.appendChild(container);
    mainContent.appendChild(section);
}

/**
 * Initializes Card Stack dragging, click-to-cycle, and 3D tilts in Vanilla JS
 */
function initGalleryStack() {
    const stackContainer = document.querySelector('.stack-container');
    if (!stackContainer) return;

    // Retrieve cards and sort them by originalIndex (0 = John C., 5 = Jess M.)
    const cards = Array.from(stackContainer.querySelectorAll('.card-rotate-wrapper'))
        .sort((a, b) => parseInt(a.dataset.index) - parseInt(b.dataset.index));
    
    if (cards.length === 0) return;

    const totalCards = cards.length;
    
    // Stack state array: index visual position. cardsOrder[0] is bottom, cardsOrder[5] is top.
    // Initialize cardsOrder to matches index mapping [0, 1, 2, 3, 4, 5]
    let cardsOrder = cards.map((_, i) => i);
    const sensitivity = 140; // Drag threshold to send to back
    const sendToBackOnClick = true;

    // Pre-calculate organic Z-rotation values for visual aesthetics
    const randomRotations = cards.map((_, i) => (i * 2.5) - 6); // slight stair rotation

    function updateCardLayouts() {
        cardsOrder.forEach((cardIdx, visualPos) => {
            const cardEl = cards[cardIdx];
            if (!cardEl) return;

            // Z-index: higher visualPos gets higher Z-index layering
            cardEl.style.zIndex = visualPos;

            // Depth index: top card is 0, below card is 1, etc.
            const depth = totalCards - visualPos - 1;

            // React Bits scale and rotation calculations
            const scale = 1 - depth * 0.05;
            const rotationZ = depth * 4 + randomRotations[cardIdx];

            // If this card is not actively being dragged, snap to baseline stack layout
            if (!cardEl.classList.contains('dragging')) {
                cardEl.style.transform = `translate3d(0, 0, 0) scale(${scale}) rotateZ(${rotationZ}deg)`;
                
                const cardInner = cardEl.querySelector('.stack-card');
                if (cardInner) {
                    cardInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
                }
                
                // Add soft focal blur to deep layers for professional depth of field
                cardEl.style.filter = depth > 2 ? 'blur(1.5px)' : 'none';
            }
        });

    }

    function sendToBack(cardIdx) {
        const pos = cardsOrder.indexOf(cardIdx);
        if (pos > -1) {
            // Remove from current position and shift to bottom
            const [movedIdx] = cardsOrder.splice(pos, 1);
            cardsOrder.unshift(movedIdx);
            updateCardLayouts();
        }
    }

    // Attach dragging physics listeners to each card wrapper
    cards.forEach((cardEl, idx) => {
        let startX = 0;
        let startY = 0;
        let isDragging = false;
        let dragOffset = { x: 0, y: 0 };
        let hasMoved = false;

        function handlePointerDown(e) {
            // Only allow interactions on the top card of the stack
            const topCardIdx = cardsOrder[totalCards - 1];
            if (idx !== topCardIdx) return;

            isDragging = true;
            hasMoved = false;
            startX = e.clientX || (e.touches && e.touches[0].clientX);
            startY = e.clientY || (e.touches && e.touches[0].clientY);
            dragOffset = { x: 0, y: 0 };

            cardEl.classList.add('dragging');
            e.preventDefault();
        }

        function handlePointerMove(e) {
            if (!isDragging) return;

            const currentX = e.clientX || (e.touches && e.touches[0].clientX);
            const currentY = e.clientY || (e.touches && e.touches[0].clientY);

            dragOffset.x = currentX - startX;
            dragOffset.y = currentY - startY;

            if (Math.abs(dragOffset.x) > 6 || Math.abs(dragOffset.y) > 6) {
                hasMoved = true;
            }

            // Tilt calculations based on drag offsets (3D visual response)
            const rotateX = Math.min(Math.max(-(dragOffset.y / 8), -35), 35);
            const rotateY = Math.min(Math.max((dragOffset.x / 8), -35), 35);

            cardEl.style.transform = `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0) scale(1) rotateZ(${randomRotations[idx]}deg)`;
            
            const cardInner = cardEl.querySelector('.stack-card');
            if (cardInner) {
                cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        }

        function handlePointerUp() {
            if (!isDragging) return;
            isDragging = false;
            cardEl.classList.remove('dragging');

            const totalDragDist = Math.sqrt(dragOffset.x * dragOffset.x + dragOffset.y * dragOffset.y);

            if (totalDragDist > sensitivity) {
                // Drag dismiss: throw element off screen
                cardEl.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
                
                const angle = Math.atan2(dragOffset.y, dragOffset.x);
                const throwDist = 380;
                const throwX = Math.cos(angle) * throwDist;
                const throwY = Math.sin(angle) * throwDist;

                cardEl.style.transform = `translate3d(${throwX}px, ${throwY}px, 0) scale(0.85) rotateZ(${randomRotations[idx] * 2}deg)`;

                // Send to bottom and restore stack order
                setTimeout(() => {
                    cardEl.style.transition = '';
                    sendToBack(idx);
                }, 300);
            } else {
                // If clicked/tapped without drag, cycle instantly
                if (!hasMoved && sendToBackOnClick) {
                    sendToBack(idx);
                } else {
                    // Snap back to stack position
                    cardEl.style.transform = `translate3d(0, 0, 0) scale(1) rotateZ(${randomRotations[idx]}deg)`;
                    
                    const cardInner = cardEl.querySelector('.stack-card');
                    if (cardInner) {
                        cardInner.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        cardInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
                        setTimeout(() => {
                            cardInner.style.transition = '';
                        }, 400);
                    }
                }
            }
        }

        // Mouse Events
        cardEl.addEventListener('mousedown', handlePointerDown);
        window.addEventListener('mousemove', handlePointerMove);
        window.addEventListener('mouseup', handlePointerUp);

        // Touch Events
        cardEl.addEventListener('touchstart', handlePointerDown, { passive: false });
        window.addEventListener('touchmove', handlePointerMove, { passive: false });
        window.addEventListener('touchend', handlePointerUp);
    });

    updateCardLayouts();
}

/**
 * Renders the Bio Accent Summary (Mollie's Practice & Principles) - Migrated from Mission Page
 */
function renderPrinciples() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    const data = websiteContent.principles;
    const journeyData = websiteContent.journey;
    if (!data || !journeyData) return;

    // Create section
    const section = document.createElement("section");
    section.className = "bio-accent-section";
    section.id = "principles";

    const container = document.createElement("div");
    container.className = "container";

    // Cards Grid Wrapper
    const cardsContainer = document.createElement("div");
    cardsContainer.className = "bio-cards-container";

    // 1. Text Card: Principles
    const textCard = document.createElement("div");
    textCard.className = "bio-card-text animate-fade-in";
    
    const h2 = document.createElement("h2");
    h2.textContent = data.heading;
    textCard.appendChild(h2);

    data.paragraphs.forEach(pText => {
        const p = document.createElement("p");
        p.innerHTML = pText;
        textCard.appendChild(p);
    });
    cardsContainer.appendChild(textCard);

    // 2. Text Card: Career Journey
    const journeyCard = document.createElement("div");
    journeyCard.className = "bio-card-text animate-fade-in";
    journeyCard.style.animationDelay = "0.2s";

    const journeyH2 = document.createElement("h2");
    journeyH2.textContent = journeyData.heading;
    journeyCard.appendChild(journeyH2);

    journeyData.paragraphs.forEach(pText => {
        const p = document.createElement("p");
        p.innerHTML = pText;
        journeyCard.appendChild(p);
    });
    cardsContainer.appendChild(journeyCard);

    container.appendChild(cardsContainer);

    // Separator spacing for success gallery carousel
    const divider = document.createElement("div");
    divider.className = "principles-divider";
    divider.style.height = "80px";
    container.appendChild(divider);

    // Client success stories carousel (moved here from standalone gallery)
    const showcaseContainer = document.createElement("div");
    showcaseContainer.className = "showcase-container animate-fade-in";

    // Prev Button
    const prevBtn = document.createElement("button");
    prevBtn.className = "carousel-btn prev-btn";
    prevBtn.setAttribute("aria-label", "Previous gallery image");
    prevBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    `;
    showcaseContainer.appendChild(prevBtn);

    // Card Mount Container
    const cardMount = document.createElement("div");
    cardMount.className = "card-mount";
    showcaseContainer.appendChild(cardMount);

    // Next Button
    const nextBtn = document.createElement("button");
    nextBtn.className = "carousel-btn next-btn";
    nextBtn.setAttribute("aria-label", "Next gallery image");
    nextBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    `;
    showcaseContainer.appendChild(nextBtn);

    container.appendChild(showcaseContainer);
    section.appendChild(container);
    mainContent.appendChild(section);

    // Carousel state & rendering methods
    let currentStoryIndex = 0;
    let isFlinging = false;
    const imagesList = websiteContent.successStories.images;

    function renderCard(index, animationClass = "") {
        cardMount.innerHTML = ""; // Clear existing

        const imgSrc = imagesList[index];

        const card = document.createElement("div");
        card.className = `success-card ${animationClass}`;
        card.innerHTML = `
            <div class="gallery-card-image-wrapper">
                <img src="${imgSrc}" alt="Client progress photo ${index + 1}" class="gallery-card-img" loading="lazy">
            </div>
        `;

        cardMount.appendChild(card);
    }

    // Render initial card
    renderCard(currentStoryIndex);

    // Navigation Fling Animation Logic
    function navigate(direction) {
        if (isFlinging) return;
        isFlinging = true;

        const currentCard = cardMount.querySelector(".success-card");
        if (!currentCard) return;

        // Apply fling-out animation class
        if (direction === "next") {
            currentCard.classList.add("fling-out-left");
        } else {
            currentCard.classList.add("fling-out-right");
        }

        // Wait for fling-out transition to complete (350ms)
        setTimeout(() => {
            if (direction === "next") {
                currentStoryIndex = (currentStoryIndex + 1) % imagesList.length;
            } else {
                currentStoryIndex = (currentStoryIndex - 1 + imagesList.length) % imagesList.length;
            }

            // Render new card with fling-in animation class
            const inClass = direction === "next" ? "fling-in-right" : "fling-in-left";
            renderCard(currentStoryIndex, inClass);

            // Wait for fling-in transition to complete (350ms)
            setTimeout(() => {
                const newCard = cardMount.querySelector(".success-card");
                if (newCard) {
                    newCard.classList.remove(inClass);
                }
                isFlinging = false;
            }, 350);

        }, 350);
    }

    prevBtn.addEventListener("click", () => navigate("prev"));
    nextBtn.addEventListener("click", () => navigate("next"));
}

/**
 * Renders the specialties bento grid - Migrated from Mission Page
 */
function renderSpecialties() {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    const section = document.createElement("section");
    section.className = "specialties-section";
    section.id = "specialties";

    const container = document.createElement("div");
    container.className = "container";

    // Section Header
    const sectionHeader = document.createElement("div");
    sectionHeader.className = "section-header animate-fade-in";

    const heading = document.createElement("h2");
    heading.textContent = "Clinical Focus & Specialties";
    sectionHeader.appendChild(heading);

    const subtext = document.createElement("p");
    subtext.className = "section-subtext";
    subtext.textContent = "Discover the evidence-based clinical methodologies, joint recoveries, and custom mobility strategies Mollie uses to safely restore confidence.";
    sectionHeader.appendChild(subtext);

    container.appendChild(sectionHeader);

    const stackInner = document.createElement("div");
    stackInner.className = "scroll-stack-inner";

    websiteContent.specialties.forEach((spec, index) => {
        const card = document.createElement("div");
        card.className = "scroll-stack-card";

        // Text Info Side
        const infoSide = document.createElement("div");
        infoSide.className = "specialty-info-side";
        
        const badge = document.createElement("span");
        badge.className = "specialty-badge";
        badge.textContent = spec.badge;
        infoSide.appendChild(badge);

        const title = document.createElement("h3");
        title.textContent = spec.title;
        infoSide.appendChild(title);

        const desc = document.createElement("p");
        desc.textContent = spec.description;
        infoSide.appendChild(desc);

        card.appendChild(infoSide);

        // Image Side
        const imageSide = document.createElement("div");
        imageSide.className = "specialty-image-side";
        imageSide.innerHTML = `
            <img src="${spec.image}" alt="${spec.title}" class="specialty-img" loading="lazy">
        `;
        card.appendChild(imageSide);

        stackInner.appendChild(card);
    });

    // Spacer so the last pin can release cleanly
    const endSpacer = document.createElement("div");
    endSpacer.className = "scroll-stack-end";
    stackInner.appendChild(endSpacer);

    container.appendChild(stackInner);
    section.appendChild(container);
    mainContent.appendChild(section);
}

let scrollStackOffsetFn = null;

/**
 * ScrollStack transforms logic in Vanilla JS
 */
function initScrollStack() {
    const stackInner = document.querySelector('.scroll-stack-inner');
    if (!stackInner) return;

    const cards = Array.from(document.querySelectorAll('.scroll-stack-card'));
    if (cards.length === 0) return;

    const itemDistance = 120; // Margin distance between cards in flow
    const itemScale = 0.04;    // Scale offset factor per card stacked
    const itemStackDistance = 24; // Visual tab offset when stacked
    const baseScale = 0.88;    // Scale value of first card
    const rotationAmount = 0.6; // Slight rotation offset for organic stacked feel
    const blurAmount = 1.2;      // Focal blur depth offset

    // Set card styles
    cards.forEach((card, i) => {
        if (i < cards.length - 1) {
            card.style.marginBottom = `${itemDistance}px`;
        }
        card.style.willChange = 'transform, filter';
        card.style.transformOrigin = 'top center';
        card.style.backfaceVisibility = 'hidden';
        card.style.transform = 'translateZ(0)';
    });

    const calculateProgress = (scrollTop, start, end) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    };

    const getElementOffset = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
    };

    let initialCardOffsets = [];
    let endElementTop = 0;

    const measureOffsets = () => {
        // Reset styles temporarily to measure clean layouts
        cards.forEach(card => {
            card.style.transform = 'none';
            card.style.filter = 'none';
        });

        // Measure absolute offsets from top of page
        initialCardOffsets = cards.map(card => getElementOffset(card));
        
        const endElement = document.querySelector('.scroll-stack-end');
        endElementTop = endElement ? getElementOffset(endElement) : 0;
    };

    // Initial measurement
    measureOffsets();

    // Re-expose measurement function globally so we can invoke it after preloader vanishes
    scrollStackOffsetFn = () => {
        measureOffsets();
        updateTransforms();
    };

    function updateTransforms() {
        // Stacking disabled on mobile viewports
        if (window.innerWidth <= 900) {
            cards.forEach(card => {
                card.style.transform = 'none';
                card.style.filter = 'none';
            });
            return;
        }

        const scrollTop = window.scrollY;
        const containerHeight = window.innerHeight;

        const stackPositionPx = 0.12 * containerHeight; // starts pinning 12% from top
        const scaleEndPositionPx = 0.05 * containerHeight; // ends scaling 5% from top

        cards.forEach((card, i) => {
            if (!card) return;

            const cardTop = initialCardOffsets[i];
            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
            const triggerEnd = cardTop - scaleEndPositionPx;
            const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
            const pinEnd = endElementTop - containerHeight / 2;

            const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
            const targetScale = baseScale + i * itemScale;
            const scale = 1 - scaleProgress * (1 - targetScale);
            const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

            let blur = 0;
            if (blurAmount) {
                let topCardIndex = 0;
                for (let j = 0; j < cards.length; j++) {
                    const jCardTop = initialCardOffsets[j];
                    const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
                    if (scrollTop >= jTriggerStart) {
                        topCardIndex = j;
                    }
                }

                if (i < topCardIndex) {
                    const depthInStack = topCardIndex - i;
                    blur = Math.max(0, depthInStack * blurAmount);
                }
            }

            let translateY = 0;
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

            if (isPinned) {
                translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
            }

            const transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
            const filter = blur > 0 ? `blur(${blur}px)` : '';

            card.style.transform = transform;
            card.style.filter = filter;
        });
    }

    // Attach to scroll events
    if (window.lenis) {
        window.lenis.on('scroll', updateTransforms);
    } else {
        window.addEventListener('scroll', updateTransforms, { passive: true });
    }

    window.addEventListener('resize', () => {
        measureOffsets();
        updateTransforms();
    });

    updateTransforms();
}

/* 4. APP INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lenis Smooth Scroll
    if (typeof Lenis !== 'undefined') {
        window.lenis = new Lenis({
            duration: 1.2,
            easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.5,
            infinite: false,
        });

        const raf = (time) => {
            window.lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
    }

    // 2. Inject dynamic structures
    renderNavigation();
    renderHero();
    renderSpecialties();
    renderGallery();
    renderTestimonials();
    renderLeaves();
    renderFooter();

    // 3. Bind event animations
    initLeafScrollAnimation();
    initScrollStack();
    initGalleryStack();

    // 4. Dismiss preloader loading screen once loaded
    const loadStartTime = Date.now();
    const hidePreloader = () => {
        const preloader = document.getElementById("preloader");
        if (preloader && !preloader.classList.contains("fade-out")) {
            const elapsed = Date.now() - loadStartTime;
            const remainingDelay = Math.max(0, 1000 - elapsed);
            
            setTimeout(() => {
                preloader.classList.add("fade-out");
                
                // Trigger hero animation once preloader starts fading
                const heroContent = document.querySelector('.hero-content-wrapper');
                if (heroContent) {
                    heroContent.style.opacity = '';
                    heroContent.classList.add('animate-fade-in');
                }

                setTimeout(() => {
                    preloader.remove();
                    // Recalculate ScrollStack card offsets and leaf transforms now that layout has settled
                    if (typeof scrollStackOffsetFn === 'function') {
                        scrollStackOffsetFn();
                    }
                }, 600);
            }, remainingDelay);
        }
    };
    window.addEventListener("load", hidePreloader);
    setTimeout(hidePreloader, 3500); // 3.5s safety fallback
});
