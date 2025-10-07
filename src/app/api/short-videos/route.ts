import { NextResponse } from "next/server";

export async function GET() {
     const shorts = [


            {
                id: "short75",
                thumbnail: "https://img.youtube.com/vi/X66YD58QKFI/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/X66YD58QKFI"
            }, 
            {
                id: "short74",
                thumbnail: "https://img.youtube.com/vi/dmZYlJWrhf4/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/dmZYlJWrhf4"
            },
            {
                id: "short73",
                thumbnail: "https://img.youtube.com/vi/BWtV-yE5Itk/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/BWtV-yE5Itk"
            },
            {
                id: "short72",  // adjust if needed
                thumbnail: "https://img.youtube.com/vi/U0zgIcspjpE/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/U0zgIcspjpE"
            },

            {
                id: "short71",  // adjust if needed
                thumbnail: "https://img.youtube.com/vi/xKdP8eusDWo/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/xKdP8eusDWo"
            },

            {
                id: "short70",  // adjust if needed
                thumbnail: "https://img.youtube.com/vi/g_M29P6QOqo/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/g_M29P6QOqo"
            },
            {
                id: "short69",  // new ID (you can adjust)
                thumbnail: "https://img.youtube.com/vi/Qqey2NP3OYY/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/Qqey2NP3OYY"
            },
            {
                id: "short68",
                thumbnail: "https://img.youtube.com/vi/7mDFS_A_9ew/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/7mDFS_A_9ew"
            },

            {
                id: "short67",
                thumbnail: "https://img.youtube.com/vi/WaJMzE4ls4U/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/WaJMzE4ls4U"
            },

            {
                id: "short66",
                thumbnail: "https://img.youtube.com/vi/qJdsxI1AOdw/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/qJdsxI1AOdw"
            },
            {
                id: "short65",
                thumbnail: "https://img.youtube.com/vi/uCmUrw9DqYs/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/uCmUrw9DqYs"
            },
            {
                id: "short64",
                thumbnail: "https://img.youtube.com/vi/qJpfOlh4Aeg/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/qJpfOlh4Aeg"
            },
            {
                id: "short63",
                thumbnail: "https://img.youtube.com/vi/MB2UwuiRGrI/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/MB2UwuiRGrI"
            },
            {
                id: "short62",
                thumbnail: "https://img.youtube.com/vi/Ahw1ntTqxPg/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/Ahw1ntTqxPg"
            },
            {
                id: "short61",
                thumbnail: "https://img.youtube.com/vi/RFQ0XWfpfNc/maxresdefault.jpg",
                embedCode: " https://www.youtube.com/embed/RFQ0XWfpfNc"
            },
            {
                id: "short60",
                thumbnail: "https://img.youtube.com/vi/VvpBcyj0mtQ/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/VvpBcyj0mtQ"
            },
            {
                id: 'short59',
                thumbnail: 'https://i.ytimg.com/vi/bYdbvLP36M8/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/bYdbvLP36M8'
            },
            {
                id: 'short58',
                title: "Online Degrees Are Fake? (Truth Will Shock You) #onlinedegrees #education #ugc",
                views: '52k',
                thumbnail: 'https://i.ytimg.com/vi/khVsZ2ZGd-s/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/khVsZ2ZGd-s'
            },
            {
                id: 'short57',
                title: "5 Study Hacks That Actually Work",
                views: '52k',
                thumbnail: 'https://i.ytimg.com/vi/JgzN06lnz3w/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/JgzN06lnz3w'
            },
            {
                id: 'short56',
                title: "Online Education: Pros and Cons",
                views: '45k',
                thumbnail: 'https://i.ytimg.com/vi/_6c2RHsOMxM/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/_6c2RHsOMxM'
            },
            {
                id: 'short55',
                title: "How to Get Hired Before Graduation",
                views: '38k',
                thumbnail: 'https://i.ytimg.com/vi/4G0XAR2Ib48/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/4G0XAR2Ib48'
            },
            {
                id: 'short54',
                title: "Highest Paying Jobs Without a Degree",
                views: '42k',
                thumbnail: 'https://i.ytimg.com/vi/OR85dmTMrXc/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/OR85dmTMrXc'
            },
            {
                id: 'short53',
                title: "Time Management Secrets for Students",
                views: '35k',
                thumbnail: 'https://i.ytimg.com/vi/JgzN06lnz3w/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/JgzN06lnz3w'
            },
            {
                id: 'short52',
                title: "5 College Majors That Will Make You Rich",
                views: '28k',
                thumbnail: 'https://i.ytimg.com/vi/3d_BEPtwrO4/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/3d_BEPtwrO4'
            },
            {
                id: 'short51',
                title: "The Shocking Truth About College Degrees in 2025",
                views: '28k',
                thumbnail: 'https://i.ytimg.com/vi/gDRY7ufSahc/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/gDRY7ufSahc',

            },
            {
                id: 'short50',
                title: "Online Degrees Are a Scam? - The TRUTH Explained!",
                views: '11k',
                thumbnail: 'https://i.ytimg.com/vi/8f-fmcoRH8c/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/8f-fmcoRH8c'
            }
            ,
            {
                id: 'short49',
                title: "UGC Approved vs. UGC Entitled: What's The Difference?",
                views: '11k',
                thumbnail: 'https://i.ytimg.com/vi/iIGLyWsxRe8/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/iIGLyWsxRe8'

            }
            ,
            {
                id: 'short48',
                title: 'Career Paths After Engineering 🛠️ | Best Options for Engineers',
                views: '11k',
                thumbnail: 'https://i.ytimg.com/vi/Iia3PdaGHK0/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/Iia3PdaGHK0'

            }
            ,
            {
                id: 'short47',
                title: 'Online MBA Vs Regular MBA 🎓- Which is Best for You?',
                views: '12k',
                thumbnail: 'https://i.ytimg.com/vi/UnBo50mQW54/maxresdefault.jpg',
                embedCode: 'https://www.youtube.com/embed/UnBo50mQW54'

            },

            {
                id: 'short46',
                title: "Online MBA Vs Regular MBA 🎓- Which is Best for You ??",
                views: "12k",
                thumbnail: "https://i.ytimg.com/vi/R-pGMYsnVDw/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/R-pGMYsnVDw"
            }
            ,
            {
                id: 'short45',
                title: "Online Degree का Future: Scam या Success?",        // title not retrieved
                views: "11k",        // view count not retrieved
                thumbnail: "https://i.ytimg.com/vi/NEc7rlFGrL0/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/NEc7rlFGrL0"
            },

            {
                id: 'short44',
                title: "3 Signs of a REAL International UNIVERSITY",
                views: "7k",
                thumbnail: "https://i.ytimg.com/vi/bgXjQhBC6OA/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/bgXjQhBC6OA"
            }
            ,
            {
                id: 'short43',
                title: "University Accreditation EXPLAINED in 60 Seconds! ",
                views: "11k",
                thumbnail: "https://i.ytimg.com/vi/vxyLETeOb58/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/vxyLETeOb58"
            }
            ,
            {
                id: 'short42',
                title: "Top 5 Online MBA Colleges Under ₹1 Lakh! ",
                views: "9k",
                thumbnail: "https://i.ytimg.com/vi/jzzqSkiN0Mg/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/jzzqSkiN0Mg"
            }

            ,
            {
                id: 'short41',
                title: "NAAC A+ University Giving Online MBA Below ₹90k!",
                views: "13k",
                thumbnail: "https://i.ytimg.com/vi/nPA4CwbKpdg/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/nPA4CwbKpdg"
            }
            ,
            {
                id: 'short40',
                title: "Online Learning: Why You Must CHOOSE Wisely! ",
                views: "12k",
                thumbnail: "https://i.ytimg.com/vi/nDHcyliNKrU/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/nDHcyliNKrU"
            }
            ,
            {
                id: 'short39',
                title: "Manipal University: Worth the Hype?",
                views: "8k",
                thumbnail: "https://i.ytimg.com/vi/eug4mhbNtfU/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/eug4mhbNtfU"
            },
            {
                id: 'short38',
                title: "Smart Students CHOOSE Online Degrees in 2025!", // Actual title from video
                views: "10k", // Current view count
                thumbnail: "https://i.ytimg.com/vi/l7_snLeDifA/maxresdefault.jpg", // WebP format
                embedCode: "https://www.youtube.com/embed/l7_snLeDifA"
            },
            {
                id: 'short37',
                title: "Watch This Before You CHOOSE Online Education!", // Actual title from video
                views: "10k", // Current view count
                thumbnail: "https://i.ytimg.com/vi/ZenbvlTIYjU/maxresdefault.jpg", // WebP format
                embedCode: "https://www.youtube.com/embed/ZenbvlTIYjU"
            },
            {
                id: 'short36',
                title: "Online Learning (OL) or Open and Distance Learning (ODL) - What Should You Choose?", // Actual title from video
                views: "10k", // Current view count
                thumbnail: "https://i.ytimg.com/vi/KchndSNL-A8/maxresdefault.jpg", // WebP format
                embedCode: "https://www.youtube.com/embed/KchndSNL-A8"
            },
            {
                id: 'short35',
                title: "Don’t CHOOSE Any COLLEGE Without Watching This Video !", // Actual title from video
                views: "10k", // Current view count
                thumbnail: "https://i.ytimg.com/vi/cZeoCGAqigE/maxresdefault.jpg", // WebP format
                embedCode: "https://www.youtube.com/embed/cZeoCGAqigE"
            },
            {
                id: 'short34',
                title: "Don’t CHOOSE Any COLLEGE Without Watching This Video !", // Actual title from video
                views: "10k", // Current view count
                thumbnail: "https://i.ytimg.com/vi_webp/Kwnq6nnqoHM/maxresdefault.webp", // WebP format
                embedCode: "https://www.youtube.com/embed/Kwnq6nnqoHM"
            },
            {
                id: 'short33',
                title: "Uttaranchal University Campus Life | Hostel, Canteen & More!", // Actual title from video
                views: "20k", // Current view count
                thumbnail: "https://i.ytimg.com/vi/ZIirfoDDOdU/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/ZIirfoDDOdU"
            },

            {
                id: 'short1',
                title: "Short 1", // Replace with actual title
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/Od8VYhaUULA/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/Od8VYhaUULA"
            },
            {
                id: 'short2',
                title: "Short 2",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/BZjuRBfmKRE/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/BZjuRBfmKRE"
            },
            {
                id: 'short3',
                title: "Short 3",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/Ix5JLK7Nt4c/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/Ix5JLK7Nt4c"
            },
            {
                id: 'short4',
                title: "Short 4",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/80x8U020fsA/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/80x8U020fsA"
            },
            {
                id: 'short5',
                title: "Short 5",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/WoesXuOVVWo/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/WoesXuOVVWo"
            },
            {
                id: 'short6',
                title: "Short 6",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/QY31i3I21p0/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/QY31i3I21p0"
            },
            {
                id: 'short7',
                title: "Short 7",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/YlrxSHNhwnE/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/YlrxSHNhwnE"
            },
            {
                id: 'short8',
                title: "Short 8",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/qtcPC3iy5y4/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/qtcPC3iy5y4"
            },
            {
                id: 'short9',
                title: "Short 9",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/Xok_X3ltfdo/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/Xok_X3ltfdo"
            },
            {
                id: 'short10',
                title: "Short 10",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/aiFoWdfyklc/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/aiFoWdfyklc"
            },
            {
                id: 'short11',
                title: "Short 11",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/_AZjbjqQIRM/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/_AZjbjqQIRM"
            },
            {
                id: 'short12',
                title: "Short 12",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/UmCGS-4Z-vI/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/UmCGS-4Z-vI"
            },
            {
                id: 'short13',
                title: "Short 13",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/65yscHe6-Uo/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/65yscHe6-Uo"
            },
            {
                id: 'short14',
                title: "Short 14",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/sYfru56zm6c/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/sYfru56zm6c"
            },
            {
                id: 'short15',
                title: "Short 15",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/ZTWtJ8eiZXQ/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/ZTWtJ8eiZXQ"
            },
            {
                id: 'short16',
                title: "Short 16",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/kq2V7ZhJidI/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/kq2V7ZhJidI"
            },
            {
                id: 'short17',
                title: "Short 17",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/tewq4GxdNzc/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/tewq4GxdNzc"
            },
            {
                id: 'short18',
                title: "Short 18",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/HnID3xBtnJU/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/HnID3xBtnJU"
            },
            {
                id: 'short19',
                title: "Short 19",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/tzasR3-Sr-o/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/tzasR3-Sr-o"
            },
            {
                id: 'short20',
                title: "Short 20",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/LoCdWkMWv0U/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/LoCdWkMWv0U"
            },
            {
                id: 'short21',
                title: "Short 21",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/HjyKnqCBR0w/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/HjyKnqCBR0w"
            },
            {
                id: 'short22',
                title: "Short 22",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/7w-Uj1_TP3c/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/7w-Uj1_TP3c"
            },
            {
                id: 'short23',
                title: "Short 23",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/apLi6NItv58/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/apLi6NItv58"
            },
            {
                id: 'short24',
                title: "Short 24",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/GxI1e_uiQHU/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/GxI1e_uiQHU"
            },
            {
                id: 'short25',
                title: "Short 25",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/aaVF8wA3JtE/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/aaVF8wA3JtE"
            },
            {
                id: 'short26',
                title: "Short 26",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/laHEMFKn2ik/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/laHEMFKn2ik"
            },
            {
                id: 'short27',
                title: "Short 27",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/754khI89voE/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/754khI89voE"
            },
            {
                id: 'short28',
                title: "Short 28",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/9pn46MjxFow/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/9pn46MjxFow"
            },
            {
                id: 'short29',
                title: "Short 29",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/zDdzqII-aPI/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/zDdzqII-aPI"
            },
            {
                id: 'short30',
                title: "Short 30",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/FJW6wVdEipc/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/FJW6wVdEipc"
            },
            {
                id: 'short31',
                title: "Short 31",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/_pBXh1bCGNo/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/_pBXh1bCGNo"
            },
            {
                id: 'short32',
                title: "Short 32",
                views: "500K",
                thumbnail: "https://i.ytimg.com/vi/gSIJzxeEJXo/maxresdefault.jpg",
                embedCode: "https://www.youtube.com/embed/gSIJzxeEJXo"
            }
        ];

  return NextResponse.json(shorts);
}
