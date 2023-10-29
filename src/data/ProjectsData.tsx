export interface ProjectInterface {
    id: string;
    title: string;
    stack: Stack[];
    coverImage: string;
    images: string[];
    demoPath?: string;
}

export interface Stack {
    name: string;
    image: string;
}
export const ProjectsData: ProjectInterface[] = [
    {
        id: '1',
        title: 'Drawings',
        stack: [
            {
                name: '',
                image: '',
            },
        ],
        coverImage:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/illustration%2Feyes.jpg?alt=media&token=e98a3146-0923-4236-9a67-53411c47728c&_gl=1*1jo2qif*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUyMTM0MC40MC4xLjE2OTg1MjE0NDEuNjAuMC4w',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/illustration%2Fsunday.JPG?alt=media&token=8687156a-bf79-4513-8838-bd3c4e5afbbc&_gl=1*bvfnvx*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUxODQwMS4zOS4xLjE2OTg1MTg3NjQuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/illustration%2Fgood-days.PNG?alt=media&token=441f6c67-d1f5-4969-8fde-37af055c7120&_gl=1*107pdhd*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUxODQwMS4zOS4xLjE2OTg1MTg4NDguNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/illustration%2Fblack-swan.JPG?alt=media&token=a8808513-e24a-4878-bce6-afb0b46a3af3&_gl=1*9gxzp1*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUxODQwMS4zOS4xLjE2OTg1MTg3OTQuMzAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/illustration%2Fcry-baby.gif?alt=media&token=0f34c26d-5934-48b0-9b63-ad04f7d51688&_gl=1*9hdw2r*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUxODQwMS4zOS4xLjE2OTg1MTg3ODIuNDIuMC4w',
        ],
    },

    {
        id: '2',
        title: 'Biomimicry',
        stack: [
            {
                name: '',
                image: '',
            },
        ],
        coverImage:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/biomimicry%2Faffiche.jpg?alt=media&token=5cc2b518-38ef-4db1-a031-2c2511886e18&_gl=1*edahdf*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUyMTM0MC40MC4xLjE2OTg1MjM0ODMuNTQuMC4w',
        images: [],
    },
    {
        id: '3',
        title: 'hii.',
        stack: [
            {
                name: '',
                image: '',
            },
        ],
        coverImage:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/hii%2Fhii.png?alt=media&token=ccd2debd-6b3f-408c-af74-c04ad5d31d73&_gl=1*1q6s1gk*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUyMTM0MC40MC4xLjE2OTg1MjUyNzMuNDguMC4w',
        images: [],
    },

    {
        id: '4',
        title: 'Ospdom',
        stack: [
            {
                name: '',
                image: '',
            },
        ],
        coverImage:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/opsdom%2Ficon_dom.png?alt=media&token=7cd349ef-989d-44da-b9ab-371aea03c2a3&_gl=1*hw4o98*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUyMTM0MC40MC4xLjE2OTg1MjQ4NjUuMS4wLjA.',
        images: [],
    },
    {
        id: '5',
        title: 'Cookish',
        stack: [
            {
                name: '',
                image: '',
            },
        ],
        coverImage:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/cookish%2Fphone_mockup.jpg?alt=media&token=6b6ede98-4ee8-423d-9fbc-f2f389cd86d6&_gl=1*7v4hke*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUyMTM0MC40MC4xLjE2OTg1MjM2OTQuNTQuMC4w',
        images: [],
    },
    {
        id: '6',
        title: 'Music Library',
        stack: [
            {
                name: '',
                image: '',
            },
        ],
        coverImage:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/music-library%2Fmusic-library-banner.png?alt=media&token=7fdf10b8-5f4d-4061-95bb-5b096d7e6e76&_gl=1*nzghm6*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUyMTM0MC40MC4xLjE2OTg1MjM5MjYuNDYuMC4w',
        images: [],
    },

    {
        id: '7',
        title: 'Title',
        stack: [
            {
                name: '',
                image: '',
            },
        ],
        coverImage:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/typo%2Ftypo.jpg?alt=media&token=f19f64da-8554-4277-ae4f-1259e9fb4086&_gl=1*1823x99*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUyMTM0MC40MC4xLjE2OTg1MjI0NzcuNDAuMC4w',
        images: [],
    },

    {
        id: '8',
        title: 'KRUSH.',
        stack: [
            {
                name: '',
                image: '',
            },
        ],
        coverImage:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/krush%2Fkrush-banner.png?alt=media&token=25a76fb6-c986-4825-953a-527def062a44&_gl=1*1f9j32x*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUyMTM0MC40MC4xLjE2OTg1MjU1NDAuNTguMC4w',
        images: [],
    },

    {
        id: '9',
        title: 'My cinema',
        stack: [
            {
                name: '',
                image: '',
            },
        ],
        coverImage:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/cinema%2Fmy_cinema.jpg?alt=media&token=ecd4159e-d204-434a-8215-be3fb9c60d97&_gl=1*17l5b7*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUyMTM0MC40MC4xLjE2OTg1MjQxNzguNDYuMC4w',
        images: [],
    },
];
