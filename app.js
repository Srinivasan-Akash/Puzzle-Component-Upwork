const puzzle_data = {
    "area1": {
        "title": "Where we start ??",
        "sub-title": "Communication",
        "description": `- Clear communication is essential.
- Define life goals, with business being one part of that.
- Active listening on both sides.
- Engage in purposeful conversations.
- Discuss every business decision (e.g., business owner wages).
- Respond to emails within two days.
- Provide notice of significant events (e.g., holidays, capital purchases, loans).`
    },
    "area2": {
        "title": "Your Commitment ??",
        "sub-title": "Documentation",
        "description": `- Provide supplier invoices and credits.
- Submit receipts and supplier statements.
- Share loan documents and amortization schedules.
- Provide employee contracts, forms, timesheets, and leave applications.`
    },
    "area3": {
        "title": "Your Commitment ??",
        "sub-title": "Trust",
        "description": `- Trust us to view your business holistically.
- We interpret the accounting language on your behalf.
- Be proactive, not reactive. We ask questions to help achieve your goals.
- Ensure information is current and up-to-date.
- Be honest about upcoming actions and decisions.`
    },
    "area4": {
        "title": "Where we start ??",
        "sub-title": "Transparency",
        "description": `- Share your current situation with us.
- Provide a complete picture (e.g., include details of other entities).
- If you inform your accountant about something, let us know too—it may not be passed on.
- Always feel comfortable discussing anything; if you’re unsure, it's better to talk it over.
- Understand the onflow effect of your decisions.`
    },
    "area5": {
        "title": "Where we start ??",
        "sub-title": "Regular Contact",
        "description": `- Participate in monthly learning sessions.
- Engage in ongoing training and development.
- Ensure projections align with goals.`
    },
    "area6": {
        "title": "Your Commitment ??",
        "sub-title": "Time Investment",
        "description": `- Participate in monthly learning sessions.
- Ensure timely submission of documents.
- Set up required authorities.
- Maintain regular communication.`
    },
    "area7": {
        "title": "Your Commitment ??",
        "sub-title": "Authorities",
        "description": `- Set up bank access (read-only).
- Grant access to the ATO portal.
- Provide STP annual authority and finalization.
- Set up TPAR and BAS/IAS lodgement authorities.
- Grant software access for accounting and related systems.
- Provide Workcover annual authorities.`
    },
    "area8": {
        "title": "Where we start ??",
        "sub-title": "Roles & Responsibilities",
        "description": `- Clarify who does what.
- Ensure consistency and commitment.
- Define expectations and hold each other accountable.
- Take ownership of tasks and outcomes.`
    },
    "area9": {
        "title": "Our Commitment ??",
        "sub-title": "FYE Services",
        "description": `- Prepare EOFY workpapers.
- Reconcile balance sheets and loan accounts.
- Process accountant journals.`
    },
    "area10": {
        "title": "Our Commitment ??",
        "sub-title": "General Bookkeeping",
        "description": `- Manage accounts payable and receivable.
- Reconcile bank statements.
- Oversee fixed asset records and management.
- Handle expense management and data entry.
- Set up accounting files.
- Conduct recovery jobs where needed.`
    },
    "area11": {
        "title": "Our Commitment ??",
        "sub-title": "BAS Agent Services",
        "description": `- Prepare and lodge IAS/BAS.
- Handle superannuation preparation, lodgement, and guarantee charge statements.
- Manage STP lodgements and annual finalization.
- Assist with GST and PAYGW registration.
- Prepare fuel tax credits and liaise with the ATO.
- Manage TPAR lodgements.`
    },
    "area12": {
        "title": "Our Commitment ??",
        "sub-title": "Training Services",
        "description": `- Offer software, bookkeeping, and payroll training.`
    },
    "area13": {
        "title": "Our Commitment ??",
        "sub-title": "Payroll & HR",
        "description": `- Manage employee onboarding and offboarding.
- Process leave requests.
- Develop policies and procedures.
- Handle contractor management and labour hire registration/reporting.
- Oversee apprenticeship/trainee claims and payroll processing.
- Manage workers' compensation and long service leave.`
    },
    "area14": {
        "title": "Our Commitment ??",
        "sub-title": "Consulting Services",
        "description": `- Assist with cash flow management and budgeting.
- Oversee debtor management and provide other advisory services.
- Prepare for audits and conduct accounting file audits.`
    }
};

jQuery(($) => {
    // Function to format description text into a list
    function formatDescription(description) {
        if (!description) return '';

        const items = description.split('-').filter(item => item.trim() !== '');
        return `<ul>${items.map(item => `<li>${item.trim()}</li>`).join('')}</ul>`;
    }

    // Hover handler for face map areas
    $("#puzzle_data map>area").hover(function () {
        const area_key = $(this).data("key");
        $(`#puzzle_data .${area_key}`).css({ "display": "block", "opacity": 1 });
    }, function () {
        const area_key = $(this).data("key");
        $(`#puzzle_data .${area_key}`).css({ "opacity": 0 });
    });

    // Click handler for face map areas
    $("#puzzle_data map>area").on("click", function (e) {
        e.preventDefault();
        const area_key = $(this).data("key");

        $(".puzzle-area-img").removeClass("is-active").css('opacity', 0);
        $(`#puzzle_data .${area_key}`).addClass("is-active").css('opacity', 1);

        const { title, "sub-title": subTitle, description } = puzzle_data[area_key];

        $(".instructions").hide();
        $(".area-data").removeClass("is-active");
        $(".area-data").addClass("not-active");

        setTimeout(() => {
            $(".area-title").text(title);
            $(".area-sub-title").text(subTitle);
            $(".area-details").html(formatDescription(description));
            $(".area-data").addClass("is-active");
            $(".area-data").removeClass("not-active");
        }, 200);
    });

    $(document).ready(function () {
        const firstArea = $("#puzzle_data map>area").first(); // Select the first area
        if (firstArea.length) {
            firstArea.trigger("click"); // Simulate a click on the first area
        }
    });
});