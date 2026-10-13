const usingAIAsAStudent = {
    metadata: {
        slug: "using-ai-as-a-student",
        title: "Using AI as a Student Without Outsourcing Your Thinking",
        publishedAt: "2026-10-12",
        excerpt: "How I use AI to save time, review code, and explore ideas without letting it replace the struggle that makes learning possible.",
        tags: ["AI-Assisted Learning", "Critical Thinking", "Responsible AI"],
        readingTime: "5 min read",
        featured: true,
    },
    content: [
        {
            "paragraphs": [
                "Using AI as a student can feel backwards. A student is supposed to learn by experimenting, failing, and trying again. In my opinion, that loop is immensely important. Avoiding AI might therefore seem like a no-brainer, yet I still use it in my day-to-day work."
            ]
        },
        {
            "heading": "My introduction to AI",
            "paragraphs": [
                "I first tried AI during my first year. I had heard about something called ChatGPT that you could talk to, and it felt magical. You can imagine my shock when I saw that it could write code that sort of worked. At the same time, it felt threatening because writing code was what I was studying to do.",
                "AI has progressively improved since then. Problems that used to take me hours can now be solved by AI in almost no time. Not using it can feel like falling behind while your peers use it to gain an advantage."
            ]
        },
        {
            "heading": "Assignments serve a purpose",
            "paragraphs": [
                "Let's make one thing clear: I don't use AI to complete homework or programming assignments for my courses. Whether AI use is permitted depends on the course and the instructor’s rules; [UBC’s guidance](https://genai.ubc.ca/guidance/teaching-learning-guidelines/learning-with-genai/) explains that unauthorized use in submitted work may be considered academic misconduct. My personal rule is stricter: I want to do the work that an assignment is designed to teach me.",
                "Instructors create assignments for a reason. They are not meant to be completed in one shot by GPT-5.5 an hour before the deadline; they are meant to make you think.",
                "When writing code is the skill I am trying to learn, I try not to hand the implementation over to AI. Suppose you are learning Rust and ask AI to write the code while you merely review it. Reviewing generated code can help you learn, but it does not give you the same practice as working through an implementation yourself. If independent programming is the skill you want to develop, you need to practise making those decisions too. The same principle applies when learning mathematics, such as differential equations, or physics."
            ]
        },
        {
            "heading": "Where AI helps me",
            "paragraphs": [
                "So, when should you use AI, and how?",
                "Honestly, I don't know the definitive answer. However, a few ideas come to mind:",
                "Outsourcing your thinking is not a good idea. If you stop doing algebra, you lose some of your ability to do it. I am not as good at algebra as I was when I attended [Kumon](https://www.kumon.com/), which, if you are unfamiliar with it, is a tutoring program. At university, I used algebra less often as my math courses began to focus on new concepts.",
                "I realized how much my algebra skills had deteriorated when I took [MATH 316: Elementary Differential Equations II](https://vancouver.calendar.ubc.ca/course-descriptions/courses/mathv-316-elementary-differential-equations-ii). The course involved a ton of algebra, and I had to practise extensively to regain my intuition.",
                "Similarly, completely outsourcing your programming is a bad idea; you will almost certainly lose some of your ability. You might ask whether that skill will even matter in the future. I honestly don't know.",
                "A lot of programming involves refactoring, typing, and moving code from one place to another. Much of it also involves satisfying a language's requirements and working with its standard and community libraries. In these situations, you already know what you want to do and how you want to do it, so using AI may be reasonable.",
                "Sometimes, for example, you need to update documentation to reflect changes you have already made to the source code and don't want to rewrite everything by hand. I believe that is a good use of AI too.",
                "AI is useful for reviewing code. Your brain can hold only so much context at once, your eyes can scan only so quickly, and you can analyze only so many files before overlooking a related change. AI can often flag those omissions and help you address them. I believe this is another good use of the technology.",
                "I regularly ask AI to explain complex ideas or introduce me to an unfamiliar codebase. Once I have some context, I articulate my own ideas and use the conversation to explore what others have tried, what tradeoffs they encountered, and how likely my approach is to work.",
                "I treat those answers as starting points: I still need to read the relevant code, check the original sources, and test the assumptions before making a decision."
            ]
        },
        {
            "heading": "Who owns the decisions?",
            "paragraphs": [
                "Many students I talk to now ask a bigger question: \"If coding is not what we do in the future, what will software engineers do?\"",
                "That is a good question, and it took me a long time to arrive at an answer. Designing software is just as difficult as it has always been, especially for mission-critical systems. If the design is poor, AI is more likely to produce incorrect output, and the codebase will progressively deteriorate. Engineers still need to take ownership and be held accountable.",
                "Software can fail in spectacular and unexpected ways, so engineers must ensure that their systems are correct. Search for software failures and you will find many examples, including the [Therac-25 accidents](https://ocw.mit.edu/courses/16-355j-software-engineering-concepts-fall-2005/resources/therac/) and [Ariane 5 Flight 501](https://www.esa.int/esapub/bulletin/bullet89/dalma89.htm). New vulnerabilities are still discovered every day, and new failures must be investigated, verified, and fixed.",
                "Moving fast with AI also comes with its own problems. If you move too fast, you can lose track of the codebase and become less able to evaluate earlier decisions or make new ones independently. A poorly structured codebase can also mean sending more context and spending more input tokens than necessary.",
                "I like a line from a 1979 IBM training manual, quoted on [IBM’s website](https://www.ibm.com/think/insights/ai-decision-making-where-do-businesses-draw-the-line):",
                "> A computer can never be held accountable, therefore a computer must never make a management decision.",
                "**Recommended reading:** IBM’s [AI decision-making: Where do businesses draw the line?](https://www.ibm.com/think/insights/ai-decision-making-where-do-businesses-draw-the-line) includes this quote and revisits it in the context of modern AI. The article considers where AI can make decisions and how human oversight should reflect the risks and consequences, while keeping accountability with people.",
                "Learning how to make decisions requires critical thinking. Do not outsource that.",
                "I have also realized that human ambition, or perhaps greed, ensures that when we become more productive, we build more, not less. We begin tackling problems that we had never considered before. Computers and networks, for example, made new forms of social interaction possible, from [early online communities](https://www.computerhistory.org/revolution/the-web/20/377) to today’s social media. Increased capability gives us room to pursue new kinds of projects. There is always something bigger to achieve, and that desire is limitless."
            ]
        },
        {
            "heading": "Keeping the learning yours",
            "paragraphs": [
                "For computer science students to succeed, I believe we should use AI tools such as Codex to experiment, discuss ideas, and solve problems that we already know how to solve but do not want to spend time typing out. For coursework, follow your instructor’s rules and keep the learning goal in mind. Even when AI assistance is permitted, my rule is to use it to support my thinking rather than replace it.",
                "When working on personal projects, you should also practise traditional programming from time to time. Until we have a clear answer about which skills will matter in the future, keeping them sharp is the safest choice."
            ]
        }
    ],
};

export default usingAIAsAStudent;
