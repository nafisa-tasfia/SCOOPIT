# SCOOPIT
### Uncover. Verify. Trust.

**A Lightweight (Rule based) Prototype for Fake News Detection and Fact Verification**


## Project Overview

SCOOPIT is an introductory web based prototype that demonstrates the fundamental concept of identifying misinformation and evaluating the reliability of information.

The project provides a simple interface for submitting claims(inputs) and receiving preliminary verification results through predefined text matching rules. It explores the basic workflow of a fact-verification platform while highlighting the importance of critical thinking and responsible information consumption.

Developed with HTML, CSS, and JavaScript, SCOOPIT serves as an initial implementation that can be extended into a more comprehensive verification platform.

## Key Features

 **Claim Input:** Submit statements or claims for preliminary checking.
 **Rule-Based Evaluation:** Match submitted text against a limited set of predefined conditions.
 **Verification Classification:** Categorize results as Supported, Contradicted, or Needs Verification.
 **Verification Dashboard:** Display total checks and counts of supported and contradicted claims.
 **Simple User Interface:** Provide an accessible and straightforward user experience.

## Technology Stack

Application 

 HTML for Structure and content 
 CSS for Styling and responsive layout 
 JavaScript for Rule-based evaluation and dashboard updates 

## Project Structure

```text
SCOOPIT/
├── index.html      # Main webpage
├── style.css       # Visual design and styling
├── script.js       # Claim evaluation logic
└── README.md       # Project documentation
```

## Workflow

1. **Input:** The user submits a claim through the input interface.
2. **Evaluation:** JavaScript checks the submitted text against predefined rules.
3. **Classification:** The system assigns a preliminary verification status.
4. **Output:** The result and corresponding message are displayed.
5. **Dashboard Update:** Verification counters are updated based on the result.

## Technical Scope and Limitations

SCOOPIT is currently an early stage demonstration prototype with a deliberately limited implementation.

- Uses predefined text-matching conditions rather than machine learning or AI-based analysis.
- Supports only a limited set of recognized claims.
- Does not perform real-time web searches or retrieve external evidence.
- Does not integrate with third-party fact-checking services or APIs.
- Cannot independently establish the accuracy of unfamiliar claims.
- Dashboard statistics are maintained temporarily and reset upon page reload.

## Future Development

Potential improvements to expand the platform include:

- AI-powered claim analysis and misinformation detection.
- Integration with trusted fact-checking databases and APIs.
- Automated source credibility and reference verification.
- Detection of misleading content, hallucinations, and potential bias.
- Evidence-based verification reports.
- Persistent data storage and enhanced dashboard analytics.


