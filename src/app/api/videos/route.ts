import { NextResponse } from "next/server";

export async function GET() {
    const videos = [
            // University Reviews

            {
                id: 34,  // next sequential ID
                title: "D.Y. Patil University Online MBA - Best Career Options in 2025 | Fees, Placements & ROI",
                description: "In this video, we bring you a detailed overview of the program to help you decide if it’s the right step for your career",
                channel: "College Manch",
                baseViews: 2840,  // placeholder, update if actual views known  
                postDate: new Date(2025, 9, 1), // Example: September 30, 2025 (adjust if actual upload date differs)  
                duration: "07:01",  // placeholder, replace with actual video duration if known  
                thumbnail: "https://img.youtube.com/vi/N6kO28J8eK8/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/N6kO28J8eK8",
                categories: ["all", "program-guides", "career-advice"],
                youtubeLink: "https://www.youtube.com/watch?v=N6kO28J8eK8",
                instagramLink: "https://www.instagram.com/p/DOqmsGDCG_G/"  // placeholder, update with actual IG if available  
            },
            {
                id: 33,  // next sequential ID
                title: "NMIMS Online MBA 2025: Good Choice for Working Professionals? Fees, Jobs & ROI",
                description: "Thinking about pursuing an Online MBA from NMIMS in 2025? In this video, we provide a comprehensive breakdown of the program, enabling you to make an informed decision.",
                channel: "College Manch",
                baseViews: 2970,  // update with actual views if known
                postDate: new Date(2025, 8, 29), // adjust to the actual upload date
                duration: "08:45",  // replace with the real duration
                thumbnail: "https://img.youtube.com/vi/1Efm_Sozlj0/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/1Efm_Sozlj0",
                categories: ["all", "program-guides", "career-advice"],
                youtubeLink: "https://www.youtube.com/watch?v=1Efm_Sozlj0",
                instagramLink: "https://www.instagram.com/p/DN8dBv6EbVi/"  // replace with actual IG link if available
            }
            ,
            {
                id: 32,  // next sequential ID
                title: "Best Online MBA Under ₹1 Lakh? NIU Admission & Career Scope 2025",
                description: "We’ll break down the admission procedure, fee structure, eligibility requirements, and the range of specialisations offered in NIU’s online MBA program. Along with that, you’ll understand how credible NIU’s degree is in the job market, its UGC recognition, industry acceptance, and career scope.",
                channel: "College Manch",
                baseViews: 3564,  // update with actual views if known
                postDate: new Date(2025, 8, 26), // adjust to the actual upload date
                duration: "07:30",  // replace with the real duration
                thumbnail: "https://img.youtube.com/vi/Auz0SjPmxHI/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/Auz0SjPmxHI",
                categories: ["all", "program-guides", "career-advice"],
                youtubeLink: "https://www.youtube.com/watch?v=Auz0SjPmxHI",
                instagramLink: "https://www.instagram.com/p/DOqmsGDCG_G/"  // replace if IG post exists
            }

            , {
                id: 31,  // next sequential ID
                title: "Lovely Professional University Online MBA Review 2025 | Fees, Admission, Credibility",
                description: "Thinking about doing an Online MBA from Lovely Professional University (LPU)? In this video, we will discuss whether you should pursue an online MBA or an online degree from LPU and how credible it is in the job market.",
                channel: "College Manch",
                baseViews: 2187,  // placeholder (update with actual if known)
                postDate: new Date(2025, 8, 24), // Example: September 25, 2025 (adjust if actual upload date differs)
                duration: "08:19",  // placeholder, update if exact duration known
                thumbnail: "https://img.youtube.com/vi/AgTwTs94bqs/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/AgTwTs94bqs",
                categories: ["all", "program-guides", "career-advice"],
                youtubeLink: "https://www.youtube.com/watch?v=AgTwTs94bqs",
                instagramLink: "https://www.instagram.com/p/DKeG0j-x_0t/"  // placeholder, replace with actual IG if available
            }

            , {
                id: 30,  // next sequential ID
                title: "Manipal University Jaipur Online MBA: Worth Your Time & Money in 2025?",  // need to be filled manually
                description: " We compare MUJ with NMIMS, Symbiosis, Amity, and other online MBA universities in India to help you make the right decision. We also discuss pros, cons, drawbacks, and career growth opportunities of this program.",
                channel: "College Manch",
                baseViews: 2345,
                postDate: new Date(2025, 8, 22),
                duration: "09:43",  // unknown duration
                thumbnail: "https://img.youtube.com/vi/jDlNR4IMgQo/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/jDlNR4IMgQo",
                categories: ["all", "program-guides", "career-advice"],
                youtubeLink: "https://www.youtube.com/watch?v=jDlNR4IMgQo",
                instagramLink: "https://www.instagram.com/p/DOk9DT3CMcm/"
            },

            {
                id: 29,  // New, sequential ID
                title: "Why Choose NIU for Online MBA? Fees, Syllabus, Placements & Salary Explained",
                description: "Unlike a traditional MBA, which often demands high tuition fees, relocation, and strict schedules, an Online MBA provides greater flexibility, affordability, and convenience. You can continue your job, manage studies at your own pace, and still develop the leadership skills needed for career growth.",
                channel: "College Manch",
                baseViews: 3221,  // unknown view count
                postDate: new Date(2025, 8, 9), // Month = September (8), day unknown
                duration: "10:19",
                thumbnail: "https://img.youtube.com/vi/C1uYnq_FBHM/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/C1uYnq_FBHM",
                categories: ["all", "program-guides", "career-advice"],  // Defaults, adjust as needed
                youtubeLink: "https://www.youtube.com/watch?v=C1uYnq_FBHM",
                instagramLink: "https://www.instagram.com/p/DOBrLaSkbSb/" // Unknown
            },
            {
                id: 28,  // You may adjust this ID to fit your existing structure
                title: "Are Online Degrees the Next Big Thing in India's Job Market?",
                description: "Compare Online Colleges & Universities here: https://collegemanch.com/ Ask your queries in chat – Our mentor will guide you on WhatsApp: ...",
                channel: "College Manch",
                baseViews: 4342,        // Not visible via search—set to 0 or leave null if unknown
                postDate: new Date(2025, 8, 6),  // Estimating June 2025; actual date not specified
                duration: "46:09",
                thumbnail: "https://img.youtube.com/vi/OBI1ngiEX3M/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/OBI1ngiEX3M",
                categories: ["all", "program-guides", "career-advice"],
                youtubeLink: "https://www.youtube.com/watch?v=OBI1ngiEX3M",
                instagramLink: "https://www.instagram.com/p/DN-_b-ckYKA/"
            },

            {
                id: 27,
                title: "Jain University Online: Complete Review – Fees, Placements & More",
                description: " The truth is, any university recognised by UGC and approved to offer online programs has the same value as a regular degree, and Jain University is one of them. ",
                channel: "College Manch",
                baseViews: 3243,
                postDate: new Date(2025, 8, 2), // the actual day isn't specified
                duration: "10:32", // duration isn't directly visible via search results
                thumbnail: "https://i.ytimg.com/vi/J6LtehOhw8M/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/J6LtehOhw8M",
                categories: ["all", "program-guides", "career-advice", 'university-reviews'],
                youtubeLink: "https://www.youtube.com/watch?v=J6LtehOhw8M",
                instagramLink: "https://www.instagram.com/p/DNxVNrDYjMP/"
            },

            {
                id: 26,
                title: "Amity University Online Degree Honest Review 2025 – Too Expensive??",
                description: "I’ll share details about placements, average salary packages, and the kind of return on investment you can expect. By the end of this video, you’ll have a clear idea of whether Amity’s online MBA or other online degrees are the right choice for you or just overhyped.",
                channel: "College Manch",
                baseViews: 6543,
                postDate: new Date(2025, 7, 24),
                duration: "07:36",
                thumbnail: "https://i.ytimg.com/vi/FHKE2UqwdQQ/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/FHKE2UqwdQQ",
                categories: ['all', 'program-guides', 'career-advice', 'university-reviews'],
                youtubeLink: "https://www.youtube.com/watch?v=FHKE2UqwdQQ",
                instagramLink: "https://www.instagram.com/p/DNN2smoRw_j/"
            }
            , {
                id: 25,
                title: "IGNOU Scam or Real? - Honest Review | Indira Gandhi National Open University Exposed",
                description: "IGNOU is the world’s largest open university, with over 3 million students enrolled every year. It is a government-recognised university with NAAC A++ accreditation and UGC-DEB approval, ensuring that its degrees are 100% valid for jobs, government exams, and higher education. ",
                channel: "College Manch",
                baseViews: 6543,
                postDate: new Date(2025, 7, 19),
                duration: "10:31",
                thumbnail: "https://i.ytimg.com/vi/lxnQdc1lF28/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/lxnQdc1lF28",
                categories: ['all', 'program-guides', 'career-advice', 'university-reviews'],
                youtubeLink: "https://www.youtube.com/watch?v=lxnQdc1lF28",
                instagramLink: "https://www.instagram.com/p/DNiqzDSyc-y/"
            }
            , {
                id: 24,
                title: "Best Skills to Learn for High-Paying Jobs in 2025-26",
                description: "Whether you are a student, working professional, or planning to change careers, this video will guide you step-by-step to prepare for the future and succeed.",
                channel: "College Manch",
                baseViews: 8850,
                postDate: new Date(2025, 7, 15), // August 15, 2025 (month is 0-indexed)
                duration: "14:42",
                thumbnail: "https://i.ytimg.com/vi/gi_OxpsHlSQ/hqdefault.jpg",
                embedCode: "https://www.youtube.com/embed/gi_OxpsHlSQ",
                categories: ['all', 'program-guides', 'career-advice'],
                youtubeLink: "https://www.youtube.com/watch?v=gi_OxpsHlSQ",
                instagramLink: "https://www.instagram.com/p/DNA4EPRxgff/"
            }
            , {
                id: 23,
                title: "Noida International University (NIU): Full Campus Tour | Honest Reviews | Placement Truths",
                description: "You’ll also hear from current BBA students about their experience with the faculty, placements, college life, and fests and industrial visits. The university offers both offline and UGC-approved online courses, such as BBA and MBA, with affordable fees.",
                channel: "College Manch",
                baseViews: 4212,
                postDate: new Date(2025, 6, 30), // August 5, 2025 (month is 0-indexed)
                duration: "14:44",
                thumbnail: "https://i.ytimg.com/vi/TuuBWdedlr4/hqdefault.jpg",
                embedCode: "https://www.youtube.com/embed/TuuBWdedlr4",
                categories: ['all', 'program-guides', 'career-advice'],
                youtubeLink: "https://www.youtube.com/watch?v=TuuBWdedlr4",
                instagramLink: "https://www.instagram.com/p/DMvD-r9RwwR/"
            }
            ,
            {
                id: 22,
                title: "College Selection Mistakes Can Ruin Your Career Forever - Don’t Ignore Them!",
                description: "One wrong college decision can cost you 5 valuable years of your life. Every year, lakhs of students make the same mistake: they blindly trust brand names, fall for shiny Instagram reels, follow what their friends are doing, or ignore whether the college is actually approved by UGC, AICTE, or NAAC. And by the time they realise the truth, it’s too late.",
                channel: "College Manch",
                baseViews: 5743,
                postDate: new Date(2025, 6, 29), // July 23, 2025 (month is 0-indexed)
                duration: "14:15",
                thumbnail: "https://i.ytimg.com/vi/zYoCT3nsAwQ/hqdefault.jpg", // Updated thumbnail
                embedCode: "https://www.youtube.com/embed/zYoCT3nsAwQ", // Updated embed URL
                categories: ['all', 'program-guides', 'career-advice'],
                youtubeLink: "https://www.youtube.com/watch?v=zYoCT3nsAwQ", // Updated YouTube link
                instagramLink: "https://www.instagram.com/p/DMaczLGxhhR/" // (Kept the same; check if needed)
            }
            ,
            {
                id: 21,
                title: "Online MBA Exposed? Real Talk - CAT Exam, Placements & Professional Journey!",
                description: "In this video, I will be talking with Ankit Gupta Sir, a senior manager with an engineering background, who chose to pursue an online MBA from NMIMS (Narsee Monjee Institute of Management Studies) while working full-time.",
                channel: "College Manch",
                baseViews: 4443,
                postDate: new Date(2025, 6, 23), // July is month 6 (zero-indexed)
                duration: "46:29",
                thumbnail: "https://i.ytimg.com/vi/aKbWUxlbd_4/hqdefault.jpg",
                embedCode: "https://www.youtube.com/embed/aKbWUxlbd_4",
                categories: ['all', 'program-guides', 'career-advice'],
                youtubeLink: "https://www.youtube.com/watch?v=aKbWUxlbd_4",
                instagramLink: "https://www.instagram.com/p/DMaczLGxhhR/"
            }
            ,
            {
                id: 20,
                title: "Top-Ranked UNIVERSITIES Offering Affordable ONLINE Degrees - REVEALED!",
                description: "Many students make the mistake of choosing unapproved universities. So in this video, I will guide you through the best options where you can do your online MBA, MCA, BBA, BCA, MA, or MCom at a very low cost, starting. ",
                channel: "College Manch",
                baseViews: 8765, // update with actual view count
                postDate: new Date(2025, 6, 15), // July 15, 2025
                duration: "08:28", // update with actual duration
                thumbnail: "https://i.ytimg.com/vi/nyNPjRhkfmY/hqdefault.jpg",
                embedCode: "https://www.youtube.com/embed/nyNPjRhkfmY",
                categories: ['all', 'program-guides', 'career-advice'],
                youtubeLink: "https://www.youtube.com/watch?v=nyNPjRhkfmY",
                instagramLink: "https://www.instagram.com/p/DMSlHiqRoU2/"
            }
            ,
            {
                id: 19,
                title: "Noida International University Online Degree EXPOSED! - Fees, Courses, Placements & More!",
                description: "I will discuss the online degree courses offered by NIU, which are becoming increasingly popular for students looking for flexibility and affordability in higher education.",
                channel: "College Manch",
                baseViews: 4423, // update with actual view count
                postDate: new Date(2025, 6, 6), // July 7, 2025
                duration: "09:51", // update with actual duration
                thumbnail: "https://i.ytimg.com/vi/RmYmVIcEhB8/hqdefault.jpg",
                embedCode: "https://www.youtube.com/embed/RmYmVIcEhB8",
                categories: ['university-reviews', 'all', 'program-guides', 'career-advice'],
                youtubeLink: "https://www.youtube.com/watch?v=RmYmVIcEhB8",
                instagramLink: "https://www.instagram.com/p/DKeG0j-x_0t/"
            }
            ,
            {
                id: 18,
                title: "Preparing for the Govt. Exams after 12th? - These Degree Options will help you!",
                description: "If you're aiming for Group A or Group B government posts such as IAS, IPS, IFS, or any officer-level job, having a valid undergraduate degree is mandatory. ",
                channel: "College Manch",
                baseViews: 5338,
                postDate: new Date(2025, 6, 4), // July 4, 2025
                duration: "10:44", // update with actual duration
                thumbnail: "https://i.ytimg.com/vi/I7zC5NF1hIo/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/I7zC5NF1hIo",
                categories: ['program-guides', 'all', 'career-advice'],
                youtubeLink: "https://www.youtube.com/watch?v=I7zC5NF1hIo",
                instagramLink: "https://www.instagram.com/p/DKCA7mRRC8X/" // not found / update if available
            }
            ,

            {
                id: 17,
                title: "Best MBA Streams for High-Paying Jobs in 2025!",
                description: "I will help you identify the best MBA courses in India for 2025. Choosing the right MBA stream is crucial for your career, and I will help you navigate the options to find those with better job prospects, higher salaries, and strong growth potential.",
                channel: "College Manch",
                baseViews: 3420, // Update with actual view count
                postDate: new Date(2025, 5, 29), // July 29, 2025 (month is 0-indexed)
                duration: "14:17", // Update with actual duration
                thumbnail: "https://i.ytimg.com/vi/bTh2wTxVMJU/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/bTh2wTxVMJU",
                categories: ['university-reviews', 'career-advice', 'all', 'program-guides'],
                youtubeLink: "https://www.youtube.com/watch?v=bTh2wTxVMJU",
                instagramLink: "https://www.instagram.com/p/DJ6IwUox5nh/" // Update if available
            },
            {
                id: 16,
                title: "Uttaranchal University EXPOSED 😱 | Complete Review!",
                description: "I will share with the admissions the type of placement/job opportunity available, the quality of professors, the curriculum, and the way online programs are run. I will be sharing feedback from the students' experience, and the pros and cons of choosing Uttaranchal University for your higher education.",
                channel: "College Manch",
                baseViews: 3420, // You may want to update this with actual view count
                postDate: new Date(2025, 5, 19), // Current date or actual upload date
                duration: "10:07", // Update with actual video duration
                thumbnail: "https://i.ytimg.com/vi/d4Ph7H3loic/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/d4Ph7H3loic",
                categories: ['university-review', 'higher-education', 'all', 'career-advice', 'program-guides'],
                youtubeLink: "https://www.youtube.com/watch?v=d4Ph7H3loic",
                instagramLink: "https://www.instagram.com/p/DLFcizxxZIu/", // Add Instagram link if available
            },
            {

                id: 15,
                title: "Top 5 Affordable Online MBA Programs in India (With Fees & Details)",
                description: "I'm sharing the most affordable and recognised online MBA programs in India that you can complete under ₹1 lakh.\nIf you're planning to do an MBA but are held back by high fees at IIMs or top private colleges, this guide is for you.",
                channel: "College Manch",
                baseViews: 4670,
                postDate: new Date(2025, 5, 13), // June 13, 2025 (month is 0-indexed, so 5 = June)
                duration: "11:20",
                thumbnail: "https://i.ytimg.com/vi/8E0S_3JnaQM/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/8E0S_3JnaQM",
                categories: ['online-education', 'program-guides', 'career-advice', 'all'],
                youtubeLink: "https://www.youtube.com/watch?v=8E0S_3JnaQM",
                instagramLink: "https://www.instagram.com/p/DKzTrwrxrHm/"

            },


            {
                id: 14,
                title: "Vivekananda Global University Jaipur | Hidden Gem College with Record-Breaking Placements!",
                description: "I will tell you something different from IITs or IIMs colleges...",
                channel: "College Manch",
                baseViews: 16300,
                postDate: new Date(2025, 5, 7), // 5 days ago   
                duration: "07:52",
                thumbnail: "https://i.ytimg.com/vi/CnIn6LpRZwo/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/CnIn6LpRZwo",
                categories: ['online-education', 'career-advice', 'all'],
                youtubeLink: "https://www.youtube.com/watch?v=CnIn6LpRZwo",
                instagramLink: "https://www.instagram.com/p/DKuSx-vRjgb/",
            },

            {
                id: 1,
                title: "DY Patil University Review 2025 | Really Worth It Or Just Hype?",
                description: "We visited DY Patil University campus to give you an honest review about placements, faculty and infrastructure.",
                channel: "College Manch",
                baseViews: 13300,
                postDate: new Date(2025, 4, 10), // May 10, 2025
                duration: "13:00",
                thumbnail: "https://i.ytimg.com/vi/ZFo2vJf4Mp0/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/ZFo2vJf4Mp0",
                categories: ['university-reviews', 'all', 'program-guides'],
                youtubeLink: "https://www.youtube.com/watch?v=ZFo2vJf4Mp0&t=2s",
                instagramLink: "https://www.instagram.com/p/DKhUKgJxmxu/",
            },
            {
                id: 2,
                title: "Is AMITY University Truly a Scam? Full Honest Review",
                description: "We investigate the truth behind Amity University's reputation. Are the placements really that bad?",
                channel: "College Manch",
                baseViews: 26300,
                postDate: new Date(2025, 4, 14), // May 14, 2025
                duration: "11:01",
                thumbnail: "https://i.ytimg.com/vi/c55R9hmzxZM/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/c55R9hmzxZM",
                categories: ['university-reviews', 'career-advice', 'all'],
                youtubeLink: "https://www.youtube.com/watch?v=c55R9hmzxZM&t=4s",
                instagramLink: "https://www.instagram.com/p/DKeG0j-x_0t/",
            },
            {
                id: 3,
                title: "NMIMS Mumbai - Is It Really Worth Your Money in 2025?",
                description: "Is NMIMS Mumbai worth the high fees? We break down placements, ROI and campus life.",
                channel: "College Manch",
                baseViews: 49300,
                postDate: new Date(2025, 4, 12), // May 12, 2025
                duration: "09:23",
                thumbnail: "https://i.ytimg.com/vi/YCAvbU32lag/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/YCAvbU32lag",
                categories: ['university-reviews', 'all', 'career-advice', 'trending'],
                youtubeLink: "https://www.youtube.com/watch?v=YCAvbU32lag&t=3s",
                instagramLink: "https://www.instagram.com/p/DKHQ6y2RfxE/",
            },
            {
                id: 4,
                title: "Best MBA Streams for High-Paying Jobs in 2025!",
                description: "You will also know which MBA course is most aligned to your personality type, the work you could do with them, and the top colleges to study them online & offline.",
                channel: "College Manch",
                baseViews: 18900,
                postDate: new Date(2025, 4, 1), // May 1, 2025
                duration: "14:18",
                thumbnail: "https://i.ytimg.com/vi/Xuf_8vqmDg0/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/Xuf_8vqmDg0",
                categories: ['university-reviews', 'career-advice', 'all'],
                youtubeLink: "https://www.youtube.com/watch?v=Xuf_8vqmDg0&t=1s",
                instagramLink: "https://www.instagram.com/p/DKCA7mRRC8X/",
            },
            {
                id: 5,
                title: "20 LPA Is Easy Now | Top 9 Online MBA Colleges in 2025 #college",
                description: "There are a few universities that are not even approved by the UGC or AICTE, and students just take admission to such courses",
                channel: "College Manch",
                baseViews: 15020,
                postDate: new Date(2025, 3, 27), // April 27, 2025
                duration: "20:15",
                thumbnail: "https://i.ytimg.com/vi/qIuYoXh3o5M/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/qIuYoXh3o5M",
                categories: ['university-reviews', 'career-advice', 'all'],
                youtubeLink: "https://www.youtube.com/watch?v=qIuYoXh3o5M",
                instagramLink: "https://www.instagram.com/p/DJ6IwUox5nh/",
            },
            {
                id: 6,
                title: "MIT-WPU Review 2025 | Placement, Campus & Value",
                description: "MIT World Peace University review covering all important aspects for students.",
                channel: "College Manch",
                baseViews: 13900,
                postDate: new Date(2025, 3, 18), // April 18, 2025
                duration: "11:33",
                thumbnail: "https://i.ytimg.com/vi/gaMnp6tT-Kw/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/gaMnp6tT-Kw",
                categories: ['university-reviews', 'career-advice', 'all'],
                youtubeLink: "https://www.youtube.com/watch?v=gaMnp6tT-Kw&t=5s",
                instagramLink: "https://www.instagram.com/p/DJ1aO5DxoHF/",
            },

            // Program Guides
            {
                id: 7,
                title: "The Smartest Way to Choose a Course After Class 12 | Best Career Option #Class12th",
                description: "Deciding what to do after Class 12 can be really confusing with so many people giving different advice.",
                channel: "College Manch",
                baseViews: 12300,
                postDate: new Date(2025, 4, 28), // May 28, 2025
                duration: "12:45",
                thumbnail: "https://i.ytimg.com/vi/HdBLjVdgSes/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/HdBLjVdgSes",
                categories: ['program-guides', 'career-advice', 'all', 'trending'],
                youtubeLink: "https://www.youtube.com/watch?v=HdBLjVdgSes",
                instagramLink: "https://www.instagram.com/p/DJwOQppRYhw/",
            },

            // Online Education
            {
                id: 8,
                title: "Top Online MBA Colleges with the Best Placements in 2025 - You Can't Miss! #mba",
                description: "We rank the best online MBA programs in India based on placement records and ROI.",
                channel: "College Manch",
                baseViews: 26700,
                postDate: new Date(2025, 4, 9), // May 9, 2025
                duration: "13:03",
                thumbnail: "/assets/cxp-assets/imgs/collage-manch/top-online-mba.jpg",
                embedCode: "https://www.youtube.com/embed/pp458GNdHYg",
                categories: ['online-education', 'all', 'trending'],
                youtubeLink: "https://www.youtube.com/watch?v=pp458GNdHYg&t=3s",
                instagramLink: "https://www.instagram.com/p/DJojSeQRqCT/",
            },
            {
                id: 9,
                title: "Manipal University Jaipur Review 2025 | Worth the Fees or Overhyped?",
                description: "If you’re considering Manipal for its online courses, I’ll break down who it’s best for, especially working professionals looking for flexibility.",
                channel: "College Manch",
                baseViews: 16300,
                postDate: new Date(2025, 3, 28), // April 28, 2025
                duration: "18:15",
                thumbnail: "https://i.ytimg.com/vi/CCtE6TIJlWE/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/CCtE6TIJlWE",
                categories: ['online-education', 'all'],
                youtubeLink: "https://www.youtube.com/watch?v=CCtE6TIJlWE&t=4s",
                instagramLink: "https://www.instagram.com/p/DJebLMpp6Tz/",
            },
            {
                id: 10,
                title: "NMIMS vs IIM Udaipur: Which Executive MBA Is Better? #mba",
                description: "The MBAs at both IIM Udaipur and NMIMS Mumbai are probably creating some deliberation, with some people saying IIM Udaipur is the best, while others say for NMIMS. This shows some confusion about the direction to move next.",
                channel: "College Manch",
                baseViews: 11600,
                postDate: new Date(2025, 3, 20), // April 20, 2025
                duration: "22:30",
                thumbnail: "https://i.ytimg.com/vi/xKF5oJS04P4/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/xKF5oJS04P4",
                categories: ['online-education', 'all'],
                youtubeLink: "https://www.youtube.com/watch?v=xKF5oJS04P4&t=43s",
                instagramLink: "https://www.instagram.com/p/DJZGk2UJyYq/",
            },
            {
                id: 11,
                title: "Best Career Options After 12th? BBA vs BCom Full Comparison #bba #mba",
                description: "Most commerce students are confused about what to opt for after Class 12 – BBA or BCom. There are so many questions, such as: Which one is better? Which course offers more job opportunities? What about placements and future scope?",
                channel: "College Manch",
                baseViews: 17700,
                postDate: new Date(2025, 3, 10), // April 10, 2025
                duration: "19:11",
                thumbnail: "https://i.ytimg.com/vi/21Laar-oS6Q/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/21Laar-oS6Q",
                categories: ['online-education', 'all', 'career-advice'],
                youtubeLink: "https://www.youtube.com/watch?v=21Laar-oS6Q",
                instagramLink: "https://www.instagram.com/p/DI6Ti-tz_Jn/",
            },
            {
                id: 12,
                title: "Jain University Online Program Review | Worth It in 2025?",
                description: "Are you confused between pursuing a full-time MBA and an online MBA? In this video, I will help you decide which one is more suitable for you depending on your career aspirations and profile. ",
                channel: "College Manch",
                baseViews: 2300,
                postDate: new Date(2025, 2, 22),
                duration: "11:28",
                thumbnail: "https://i.ytimg.com/vi/kYoDgeocAD8/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/kYoDgeocAD8",
                categories: ['online-education', 'all'],
                youtubeLink: "https://www.youtube.com/watch?v=kYoDgeocAD8",
                instagramLink: "https://www.instagram.com/p/DIy4XxxIRmv/",
            },
            {
                id: 13,
                title: "Highest-Paying Online Degrees to Pursue After 12th - Don't Miss!",
                description: "Many students are confused after taking the 12th board exam about what to choose, what is best for their growth, and which degree will give them high-paying jobs in the market.",
                channel: "College Manch",
                baseViews: 16300,
                postDate: new Date(2025, 2, 14), // March 14, 2025
                duration: "12:45",
                thumbnail: "https://i.ytimg.com/vi/rS_IC_wbTEU/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/rS_IC_wbTEU",
                categories: ['online-education', 'all'],
                youtubeLink: "https://www.youtube.com/watch?v=rS_IC_wbTEU&t=1s",
                instagramLink: "https://www.instagram.com/p/DIwKohEoqjb/",
            },


    ];
    return NextResponse.json(videos);
}
