module.exports = {

"[project]/src/app/components/assessment/questions.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "questions": (()=>questions),
    "scaleLabels": (()=>scaleLabels)
});
const questions = [
    // Section 1: Mindset & Personality
    {
        id: 'resilience_1',
        section: 'Mindset & Personality',
        category: 'Resilience & Grit',
        text: 'When faced with a significant setback, I quickly find a way to bounce back.'
    },
    {
        id: 'resilience_2',
        section: 'Mindset & Personality',
        category: 'Resilience & Grit',
        text: 'I am comfortable with long periods of sustained effort to achieve a goal.'
    },
    {
        id: 'resilience_3',
        section: 'Mindset & Personality',
        category: 'Resilience & Grit',
        text: 'Criticism, even harsh, helps me learn and improve rather than discouraging me.'
    },
    {
        id: 'resilience_4',
        section: 'Mindset & Personality',
        category: 'Resilience & Grit',
        text: 'I rarely give up on a project, even when it becomes very difficult.'
    },
    {
        id: 'risk_1',
        section: 'Mindset & Personality',
        category: 'Risk Tolerance',
        text: 'I am comfortable making decisions with incomplete information.'
    },
    {
        id: 'risk_2',
        section: 'Mindset & Personality',
        category: 'Risk Tolerance',
        text: 'The idea of financial uncertainty for a greater reward does not unduly stress me.'
    },
    {
        id: 'risk_3',
        section: 'Mindset & Personality',
        category: 'Risk Tolerance',
        text: 'I am willing to take calculated risks to achieve my aspirations.'
    },
    {
        id: 'risk_4',
        section: 'Mindset & Personality',
        category: 'Risk Tolerance',
        text: 'I am more concerned with the potential upside of an opportunity than the potential downside.'
    },
    {
        id: 'proactivity_1',
        section: 'Mindset & Personality',
        category: 'Proactivity & Initiative',
        text: 'I often take the lead in projects or situations, even without being asked.'
    },
    {
        id: 'proactivity_2',
        section: 'Mindset & Personality',
        category: 'Proactivity & Initiative',
        text: 'When I see a problem, I immediately think about solutions and how to implement them.'
    },
    {
        id: 'proactivity_3',
        section: 'Mindset & Personality',
        category: 'Proactivity & Initiative',
        text: 'I prefer to create opportunities rather than waiting for them to appear.'
    },
    {
        id: 'proactivity_4',
        section: 'Mindset & Personality',
        category: 'Proactivity & Initiative',
        text: 'I am self-motivated and don\'t need external pressure to start tasks.'
    },
    {
        id: 'adaptability_1',
        section: 'Mindset & Personality',
        category: 'Adaptability & Learning Agility',
        text: 'I enjoy learning new skills and readily adapt to new technologies or methods.'
    },
    {
        id: 'adaptability_2',
        section: 'Mindset & Personality',
        category: 'Adaptability & Learning Agility',
        text: 'Changes in plans or unexpected challenges don\'t usually derail me.'
    },
    {
        id: 'adaptability_3',
        section: 'Mindset & Personality',
        category: 'Adaptability & Learning Agility',
        text: 'I am open to revising my ideas or strategies based on new information or feedback.'
    },
    {
        id: 'adaptability_4',
        section: 'Mindset & Personality',
        category: 'Adaptability & Learning Agility',
        text: 'I actively seek out feedback, even if it means admitting I was wrong.'
    },
    {
        id: 'creativity_1',
        section: 'Mindset & Personality',
        category: 'Creativity & Problem-Solving',
        text: 'I often come up with innovative or unconventional solutions to problems.'
    },
    {
        id: 'creativity_2',
        section: 'Mindset & Personality',
        category: 'Creativity & Problem-Solving',
        text: 'I enjoy brainstorming and exploring multiple possibilities for a challenge.'
    },
    {
        id: 'creativity_3',
        section: 'Mindset & Personality',
        category: 'Creativity & Problem-Solving',
        text: 'I see problems as opportunities for invention rather than obstacles.'
    },
    {
        id: 'creativity_4',
        section: 'Mindset & Personality',
        category: 'Creativity & Problem-Solving',
        text: 'I can connect seemingly unrelated ideas to form new concepts.'
    },
    // Section 2: Knowledge & Skills
    {
        id: 'acumen_1',
        section: 'Knowledge & Skills',
        category: 'Business Acumen & Market Awareness',
        text: 'I have a basic understanding of how businesses generate revenue and profit.'
    },
    {
        id: 'acumen_2',
        section: 'Knowledge & Skills',
        category: 'Business Acumen & Market Awareness',
        text: 'I pay attention to market trends and consumer needs.'
    },
    {
        id: 'acumen_3',
        section: 'Knowledge & Skills',
        category: 'Business Acumen & Market Awareness',
        text: 'I can identify a potential target audience for a product or service.'
    },
    {
        id: 'acumen_4',
        section: 'Knowledge & Skills',
        category: 'Business Acumen & Market Awareness',
        text: 'I understand the importance of validating a business idea before building it.'
    },
    {
        id: 'product_1',
        section: 'Knowledge & Skills',
        category: 'Product & Technology Understanding',
        text: 'I have a general understanding of how digital products (apps, websites, software) are built.'
    },
    {
        id: 'product_2',
        section: 'Knowledge & Skills',
        category: 'Product & Technology Understanding',
        text: 'I am comfortable learning about new technologies relevant to product development.'
    },
    {
        id: 'product_3',
        section: 'Knowledge & Skills',
        category: 'Product & Technology Understanding',
        text: 'I can articulate a problem that a digital product could solve.'
    },
    {
        id: 'product_4',
        section: 'Knowledge & Skills',
        category: 'Product & Technology Understanding',
        text: 'I am familiar with the concept of a Minimum Viable Product (MVP).'
    },
    {
        id: 'marketing_1',
        section: 'Knowledge & Skills',
        category: 'Marketing & Sales Awareness',
        text: 'I understand the basics of how products are promoted and sold online.'
    },
    {
        id: 'marketing_2',
        section: 'Knowledge & Skills',
        category: 'Marketing & Sales Awareness',
        text: 'I am comfortable communicating the value of an idea or product to others.'
    },
    {
        id: 'marketing_3',
        section: 'Knowledge & Skills',
        category: 'Marketing & Sales Awareness',
        text: 'I know what \'user acquisition\' or \'customer retention\' means.'
    },
    {
        id: 'marketing_4',
        section: 'Knowledge & Skills',
        category: 'Marketing & Sales Awareness',
        text: 'I am willing to put myself out there to get initial users or customers.'
    },
    // Section 3: Motivation & Vision
    {
        id: 'motivation_1',
        section: 'Motivation & Vision',
        category: 'Drive',
        text: 'My primary motivation for starting a business is to solve a meaningful problem.'
    },
    {
        id: 'motivation_2',
        section: 'Motivation & Vision',
        category: 'Drive',
        text: 'I am driven by the desire for autonomy and control over my work.'
    },
    {
        id: 'motivation_3',
        section: 'Motivation & Vision',
        category: 'Drive',
        text: 'I am excited by the prospect of building something from scratch that has an impact.'
    },
    {
        id: 'motivation_4',
        section: 'Motivation & Vision',
        category: 'Drive',
        text: 'I am prepared to potentially earn less or work longer hours initially for future rewards.'
    },
    {
        id: 'motivation_5',
        section: 'Motivation & Vision',
        category: 'Drive',
        text: 'I have a clear vision for the kind of impact I want to make through my work.'
    }
];
const scaleLabels = [
    'Rarely/Never',
    'Sometimes',
    'Often',
    'Almost Always'
];
}}),
"[project]/src/lib/assessmentUtils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "calculateScores": (()=>calculateScores),
    "getArchetype": (()=>getArchetype)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$assessment$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/assessment/questions.ts [app-ssr] (ecmascript)");
;
const calculateScores = (answers)=>{
    const sections = {};
    // Group questions by section and category
    for (const question of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$assessment$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"]){
        if (!sections[question.section]) {
            sections[question.section] = {
                questions: [],
                categories: {}
            };
        }
        sections[question.section].questions.push(question);
        if (!sections[question.section].categories[question.category]) {
            sections[question.section].categories[question.category] = [];
        }
        sections[question.section].categories[question.category].push(question);
    }
    let totalScore = 0;
    const maxTotalScore = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$assessment$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"].length * 4;
    const calculatedSections = Object.entries(sections).map(([sectionName, sectionData])=>{
        let sectionScore = 0;
        const sectionMaxScore = sectionData.questions.length * 4;
        const calculatedCategories = Object.entries(sectionData.categories).map(([categoryName, categoryQuestions])=>{
            const categoryMaxScore = categoryQuestions.length * 4;
            const categoryScore = categoryQuestions.reduce((sum, q)=>sum + (answers[q.id] || 0), 0);
            sectionScore += categoryScore;
            return {
                name: categoryName,
                score: categoryScore,
                maxScore: categoryMaxScore,
                percentage: Math.round(categoryScore / categoryMaxScore * 100)
            };
        });
        totalScore += sectionScore;
        return {
            name: sectionName,
            score: sectionScore,
            maxScore: sectionMaxScore,
            percentage: Math.round(sectionScore / sectionMaxScore * 100),
            categories: calculatedCategories
        };
    });
    return {
        totalScore,
        maxTotalScore,
        totalPercentage: Math.round(totalScore / maxTotalScore * 100),
        sections: calculatedSections
    };
};
const getArchetype = (percentage)=>{
    if (percentage >= 80) {
        return {
            title: "High Potential Entrepreneur",
            description: "You possess many of the core traits and a solid foundation for entrepreneurial success. Launcherpad will help you channel your strengths into actionable plans."
        };
    }
    if (percentage >= 55) {
        return {
            title: "Aspiring Entrepreneur",
            description: "You have strong potential and a clear desire to build. Launcherpad will help you identify and develop key areas to maximize your chances of success."
        };
    }
    return {
        title: "Explorer / Growth Seeker",
        description: "You're clearly curious about entrepreneurship! Your results suggest some areas where focused learning and mindset shifts could significantly boost your readiness. Launcherpad will guide you through these foundational steps."
    };
};
}}),
"[project]/src/app/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/components/ui/card.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/components/ui/card.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/components/ui/card.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/components/ui/card.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/components/ui/card.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/components/ui/card.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/app/result/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assessmentUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assessmentUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Result = ()=>{
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLocation"])();
    const assessmentData = location.state?.assessmentData;
    const scores = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!assessmentData) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assessmentUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateScores"])(assessmentData);
    }, [
        assessmentData
    ]);
    if (!scores) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-50 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                    className: "text-center p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "No Assessment Data Found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/result/page.tsx",
                                lineNumber: 32,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/result/page.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600 mb-4",
                                    children: "Please complete the assessment to view your profile."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/result/page.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Link"], {
                                        to: "/assessment",
                                        children: "Take Assessment"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/result/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/result/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/result/page.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/result/page.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/result/page.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/result/page.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 pb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto p-4 pt-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultDisplay, {
                scores: scores
            }, void 0, false, {
                fileName: "[project]/src/app/result/page.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/result/page.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/result/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Result;
}}),

};

//# sourceMappingURL=src_75206332._.js.map