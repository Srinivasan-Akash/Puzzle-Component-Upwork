const dermal_data = {
    "area1": {
        "title": "What we start with ??",
        "sub-title": "Communication",
        "description": `Life goals: business is one goal
- Listening to each other
- Purposeful conversation
- Any business decision- ie business owner wages
- Timely response to emails (2 days)
- Notice of one-off events i.e Holidays, Capital Purchases, Loans`
    },
    "area2": {
        "title": "What we need from you ??",
        "sub-title": "Documentation",
        "description": `- Supplier Invoices/Credits
- Receipts
- Supplier Statements
- Loan Documents and Amortisation Schedules
- Employee Contracts & Forms
- Timesheets
- Leave Applications`
    },
    "area3": {
        "title": "What we need from you ??",
        "sub-title": "Trust",
        "description": `- PCL holistically
- PCL interprets accounting language
- Proactive not reactive i.e trusting I ask questions for a reason with your goals in mind
- Up to date current information
- Honesty about forth-coming actions`
    },
    "area4": {
        "title": "What we start with ??",
        "sub-title": "Transparency",
        "description": `- Current Situation
- The whole picture- i.e other entities
- If you tell the accountant something, tell us also it is not necessary passed on
- If you think you need to hide something, always discuss it with us
- Onflow effect`
    },
    "area5": {
        "title": "What we start with ??",
        "sub-title": "Regular Contracts",
        "description": `- Monthly Learning Sessions
- Training and development
- Do projections align with goals?`
    },
    "area6": {
        "title": "What we need from you ??",
        "sub-title": "Invest Own Time",
        "description": `- Monthly Learning Sessions
- Supply Documentation
- Set up Authorities
- Communicate regularly`
    },
    "area7": {
        "title": "What we need from you ??",
        "sub-title": "Authorities",
        "description": `- Bank Access - Read Only
- ATO Portal
- STP Annual Authority
- STP Finalisation Authority
- TPAR Annual Lodgement Authorities
- BAS or IAS Authorities
- Software Access - Accounting and related
- Workcover Annual Authorities`
    },
    "area8": {
        "title": "What we start with ??",
        "sub-title": "Identify Roles",
        "description": `- Who does what
- Consistency and commitment
- Expectation of each other
- Accountability
- Ownership`
    },
    "area9": {
        "title": "What we can do for you ??",
        "sub-title": "FYE Services",
        "description": `- EOFY Workpaper Preparation
- Balance Sheet Reconciliations
- Loan Account Reconciliations
- Accountant Journals`
    },
    "area10": {
        "title": "What we can do for you ??",
        "sub-title": "General Bookkeeping",
        "description": `- Accounts Payable
- Accounts Receivable
- Bank Reconciliations
- Fixed Assets
- Records Management
- Expense Management
- Data Entry
- Accounting file setups
- Recovery Jobs`
    },
    "area11": {
        "title": "What we can do for you ??",
        "sub-title": "Bag Agent Services",
        "description": `- IAS Preparation & Lodgement
- BAS Preparation & Lodgement
- Superannuation Preparation & Lodgement
- Superannuation Guarantee Charge Statements
- STP Lodgements and Annual Finalisation
- GST Registration
- PAYGW Registration
- Fuel Tax Credits
- Liaison with ATO
- TPAR`
    },
    "area12": {
        "title": "What we can do for you ??",
        "sub-title": "training Services",
        "description": `- Software Training
- Bookkeeping Training
- Payroll Training`
    },
    "area13": {
        "title": "What we can do for you ??",
        "sub-title": "Payroll & HR",
        "description": `- Employee Onboarding & Offboarding
- Leave Requests
- Policies and Procedures
- Contractor Management
- Labour Hire Registration and Reporting
- Apprenticeship/Trainee Claims
- Payroll Processing & Tax
- Workers Compensation
- Long Service Leave`
    },
    "area14": {
        "title": "What we can do for you ??",
        "sub-title": "Consulting Services",
        "description": `- Cash Flow Management
- Budgeting
- Debtor Management
- Other Advisory Services
- Audit Preparation
- Accounting File Audits`
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
    $("#anti-aging map>area").hover(function () {
        const area_key = $(this).data("key");
        $(`#anti-aging .${area_key}`).css({ "display": "block", "opacity": 1 });
    }, function () {
        const area_key = $(this).data("key");
        $(`#anti-aging .${area_key}`).css({ "opacity": 0 });
    });

    // Click handler for face map areas
    $("#anti-aging map>area").on("click", function (e) {
        e.preventDefault();
        const area_key = $(this).data("key");

        $(".face-area-img").removeClass("is-active").css('opacity', 0);
        $(`#anti-aging .${area_key}`).addClass("is-active").css('opacity', 1);

        const { title, "sub-title": subTitle, description } = dermal_data[area_key];

        $(".instructions").hide();
        $(".area-data").removeClass("is-active");

        $(".area-title").text(title);
        $(".area-sub-title").text(subTitle);
        $(".area-details").html(formatDescription(description));

        setTimeout(() => {
            $(".area-data").addClass("is-active");
        }, 100);
    });

    $(document).ready(function () {
        const firstArea = $("#anti-aging map>area").first(); // Select the first area
        if (firstArea.length) {
            firstArea.trigger("click"); // Simulate a click on the first area
        }
    });
});
