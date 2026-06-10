# Jagdesh Karran — Personal Portfolio Website

---

## Project Overview

This is a personal portfolio website built from scratch using HTML, CSS, and JavaScript.
The goal is to professionally present my background, skills, and experience to potential
employers in the tech industry. The site is hosted on GitHub Pages.

---

## Part 1: Content

**1. Full name as displayed professionally:**
Jagdesh Karran

**2. Purpose of the portfolio website:**
To professionally present my background, skills, and experience to potential employers in
the tech industry, particularly those seeking software engineers or IT/systems professionals.

**3. Target audience:**
Tech industry employers and recruiters looking for software engineers, systems administrators,
or IT professionals.

**4. Skills highlighted:**
Python, C, C#, C++, Java, JavaScript, CSS, Windows Systems Administration (Active Directory,
GPO, SCCM), Network & Systems Operations, Incident & Ticket Management, Hardware Troubleshooting,
Linux Servers, Security & Compliance, Documentation.

**5. Projects and work showcased:**
- Engineering Technician IV at Parsons Corporation (network monitoring, systems administration,
  command center operations)
- U.S. Marine Corps Reserve (ground electronics and radio systems maintenance)
- Google IT Support Professional Certificate (Coursera, 2023)

**6. Professional bio:**
IT and systems professional with nearly 6 years of experience in mission-critical infrastructure
and a background as a U.S. Marine Corps veteran. Currently pursuing a B.S. in Computer Science
at Queens College. Passionate about problem solving, optimizing processes, and building
reliable systems.

**7. Pages included:**
Single-page site with the following sections: Home, About, Skills, Experience, Contact.

**8. Career goal:**
To transition into a software engineering or systems-focused tech role, applying both
hands-on IT experience and a computer science education.

**9. Technologies and tools with experience:**
Python, C, C#, C++, Java, JavaScript, CSS, Visual Studio, NetBeans, SolarWinds,
Windows Server, Active Directory, SCCM, Linux.

**10. Achievements and experiences worth highlighting:**
- U.S. Marine Corps veteran (Jun 2018 – Jun 2024)
- Academic Achievement Award — Twentynine Palms, CA (2019)
- Certificate of Commendation — Twentynine Palms, CA (2019)
- 100 hours of community service at Hawthorne Community Center
- Google IT Support Professional Certificate (Coursera, 2023)
- Advanced Regents Diploma, Bayside High School (2016)

**11. Call to action for visitors:**
Contact me via email or phone, or view my skills and experience sections.

**12. Resume:**
Yes — available as a downloadable PDF linked in the About section.

**13. Social and professional links:**
- Email: 920jskarran@gmail.com
- Phone: 347-650-1360

---

## Part 2: Design

**1. Overall style:**
Clean and professional. Straightforward and easy to read, matching the structured
nature of IT and systems work.

**2. Color scheme:**
Dark navy blue (#1a2b4a) and white, with light gray accents. Navy conveys professionalism
and trust, which fits a tech and military background.

**3. Fonts:**
Source Sans 3 (Google Fonts) for all text — clean, readable, and professional.

**4. How design reflects personality and field:**
Minimal clutter, organized sections, clear labels — mirrors the structured,
documentation-focused mindset of systems and IT work.

**5. Homepage layout:**
Name and title centered at the top, a short bio below, and a call-to-action button.

**6. How project/experience sections are organized visually:**
Each job is displayed as a card with a colored left border, job title, company/date,
and bullet points of responsibilities.

**7. Mobile-friendly:**
Yes. A CSS media query at max-width 600px stacks the navigation and skill grid
vertically for smaller screens.

**8. Visual hierarchy:**
Name/title is the largest text. Section headings are medium-sized with an underline.
Body text is standard size. Bold is used sparingly for emphasis.

**9. Consistency across pages:**
Same navigation bar, same color variables, same font, and same card styles are
used throughout the entire page.

**10. Accessibility considerations:**
High contrast text (dark on light background), minimum 16px font size, clear
readable labels, and semantic HTML tags (nav, section, footer, h1, h2, h3).

**11. Icons, images, or illustrations:**
None used — the design relies on clean typography and layout for a professional look.

**12. Portfolio websites that inspired this design:**
Simple, text-focused developer portfolios that prioritize clarity and readability
over heavy graphics or animations.

---

## Part 3: Interactivity

**1. Interactive elements:**
- Sticky navigation bar with links that scroll to each section
- Active nav link highlight that updates as you scroll
- Resume download button
- Contact form with submit button
- Email button going directly to users default preferred mail app

**2. Contact form:**
The form has three fields: Name, Email, and Message. JavaScript validates
that all fields are filled before showing a success message. No backend is used —
the form demonstrates front-end validation and user feedback.

**3. JavaScript features implemented:**
- Scroll event listener that detects which section is in view
- Active class toggler that underlines the current nav link
- Form validation function (sendMessage) that checks for empty fields

**4. How users receive feedback from interactions:**
- Nav link underline updates as the user scrolls
- If the contact form is submitted with empty fields, a red error message appears
- If all fields are filled, a green success message appears with the user's name

**5. How interactivity improves the user experience:**
The active nav highlight helps users know where they are on the page. The form
feedback makes it clear whether their submission worked, creating a more polished
and responsive experience.

---

## Information Organization

The site flows in a logical order:
1. **Home** — First impression, name, and title
2. **About** — Background and personal story
3. **Skills** — What I know and can do
4. **Experience** — Where I have applied those skills
5. **Contact** — How to reach me

---

## Technical Overview

| File | Purpose |
|------|---------|
| index.html | Page structure and content |
| style.css | Visual styling, layout, colors, fonts |
| script.js | Navigation highlight and form validation |
| resume.pdf | Downloadable resume |
| README.md | This web design document |

All code is original and commented throughout for readability.

---

## Timeline / Project Milestones

| Step | Task |
|------|------|
| 1 | Answer all planning questions (Parts 1, 2, 3) |
| 2 | Write HTML structure (index.html) |
| 3 | Write CSS styles (style.css) |
| 4 | Write JavaScript interactivity (script.js) |
| 5 | Write README.md web design document |
| 6 | Create GitHub repository |
| 7 | Upload all files to the repository |
| 8 | Enable GitHub Pages and verify live site |

---

## External Resources

- Google Fonts (Source Sans 3): https://fonts.google.com/specimen/Source+Sans+3
- GitHub Pages documentation: https://docs.github.com/en/pages

---

## Wireframe

Below is a text-based wireframe showing the layout of the page:

```
+--------------------------------------------------+
|  Jagdesh Karran    Home | About | Skills | ...   |  <- Nav bar
+--------------------------------------------------+
|                                                  |
|              JAGDESH KARRAN                      |  <- Home section
|       IT & Systems Professional                  |
|       Short intro paragraph                      |
|           [ Get In Touch ]                       |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  About Me                                        |  <- About section
|  Paragraph about work background...              |
|                                                  |
|  [ img ]      [ img ]      [ img ]               |  <- work photos
|                                                  |
|  Paragraph about Marine Corps...                 |
|                                                  |
|  [ img ]      [ img ]      [ img-wide ]          |  <- USMC photos
|                                                  |
|  Paragraph about Queens College...               |
|  [ Download Resume ]                             |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  Skills                                          |  <- Skills section
|  +----------------+  +----------------+          |
|  | Programming    |  | Systems        |          |
|  | Python, C, ... |  | Windows, ...   |          |
|  +----------------+  +----------------+          |
|  +----------------+  +----------------+          |
|  | IT Operations  |  | Other          |          |
|  +----------------+  +----------------+          |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  Experience                                      |  <- Experience section
|  +--------------------------------------------+ |
|  | Engineering Technician IV | Parsons | 2023  | |
|  | - bullet points ...                         | |
|  +--------------------------------------------+ |
|  +--------------------------------------------+ |
|  | Electrician Journeyman | Parsons | 2020      | |
|  +--------------------------------------------+ |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  Contact Me                                      |  <- Contact section
|  Email | Phone                                   |
|  [ Name field     ]                              |
|  [ Email field    ]                              |
|  [ Message field  ]                              |
|  [ Send Message ]                                |
|                                                  |
+--------------------------------------------------+
|     © 2025 Jagdesh Karran. All rights reserved.  |  <- Footer
+--------------------------------------------------+
```
