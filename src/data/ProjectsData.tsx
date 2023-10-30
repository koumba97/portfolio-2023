export interface ProjectInterface {
    id: string;
    title: string;
    stack: Stack[];
    coverImage: string;
    images: string[];
    demo?: string;
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
        images: [
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/biomimicry%2Fbiomime1.jpg?alt=media&token=4dc383a0-c4c3-482e-b374-3caa40be9fc3&_gl=1*1h8cst7*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1ODk1MjMuMzEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/biomimicry%2Fbiomime2.jpg?alt=media&token=e16f1959-f4e5-4fca-a1c4-8106bf0de7af&_gl=1*43xhuh*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1ODk1MzcuMTcuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/biomimicry%2Fdev_affiche.jpg?alt=media&token=6d99723b-cc43-4678-8b81-af1f8e3d82b7&_gl=1*1snqtoe*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1ODk1NDguNi4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/biomimicry%2Fdev_affiche2.jpg?alt=media&token=9bf7789d-2f00-4c44-9a0d-31c97eae62de&_gl=1*c0zcbc*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1ODk1NjQuNjAuMC4w',
        ],
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
        images: [
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/hii%2Fhii2.png?alt=media&token=5237b9d6-c725-4148-9c36-4ed76d3c2e51&_gl=1*66rnhc*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1ODk2MjAuNC4wLjA.',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/hii%2Fhii3.png?alt=media&token=78834500-2461-4729-b61a-bc4c355fdfeb&_gl=1*f00vm7*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1ODk2MzIuNTguMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/hii%2Fhii4.png?alt=media&token=66b8c270-fb35-4311-adee-944989da1254&_gl=1*pxylff*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1ODk2NDkuNDEuMC4w',
        ],
        demo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/hii%2Fhii.mp4?alt=media&token=ec476576-9610-4682-b088-b04378146616&_gl=1*gkewru*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODY4OTU2MC40My4xLjE2OTg2ODk2MDQuMTYuMC4w',
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
        images: [
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/opsdom%2Fospdom.png?alt=media&token=f079f749-b612-4857-bb83-eeb231420bff&_gl=1*few7j3*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1ODk3MjkuNTUuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/opsdom%2Fospdom2.png?alt=media&token=fd18cde1-eb25-41b2-a86a-e00df4fefa1e&_gl=1*1nix1ra*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1ODk3NDMuNDEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/opsdom%2Fospdom22.jpg?alt=media&token=8bde4fda-9c5f-41e7-8ae6-0033b95d58c6&_gl=1*1bclfx2*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1ODk3NjkuMTUuMC4w',
        ],
        demo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/opsdom%2Fospdom.mp4?alt=media&token=5093630b-c690-4cce-bd5e-e0e111c2b006&_gl=1*mjynij*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODY4OTU2MC40My4xLjE2OTg2ODk2NDYuNTIuMC4w',
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
        images: [
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/cookish%2Fcookish2.jpg?alt=media&token=84474fa4-91e7-4396-80be-c9e2dfeeb712&_gl=1*7ia77n*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1ODk4NDkuNTEuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/cookish%2Fcookish3.jpg?alt=media&token=0f17abbe-909b-4765-b326-0b9b1e55c8ec&_gl=1*1nmct8v*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1ODk4NjEuMzkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/cookish%2Fcookish4.png?alt=media&token=87e4be70-01be-4ec3-834f-5469a7d0ae6b&_gl=1*4dsa6d*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1OTA2MzguMzguMC4w',
        ],
        demo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/cookish%2Fcookish.mp4?alt=media&token=d7360e77-73b7-421e-bece-f40ef7c5781d&_gl=1*1asnnul*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODY4OTU2MC40My4xLjE2OTg2ODk3NDIuNTYuMC4w',
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
        demo: '',
    },

    {
        id: '7',
        title: 'Typo',
        stack: [
            {
                name: '',
                image: '',
            },
        ],
        coverImage:
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/typo%2Ftypo.jpg?alt=media&token=f19f64da-8554-4277-ae4f-1259e9fb4086&_gl=1*1823x99*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODUyMTM0MC40MC4xLjE2OTg1MjI0NzcuNDAuMC4w',
        images: [
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/typo%2Ftypo.jpg?alt=media&token=f19f64da-8554-4277-ae4f-1259e9fb4086&_gl=1*1wl2ff5*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1OTA3MzcuNDYuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/typo%2Fhybridation.jpg?alt=media&token=f6746d3d-82de-4272-9c69-99a78639a546&_gl=1*1887e08*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1OTA3NTYuMjcuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/typo%2Fhybridation2.jpg?alt=media&token=b3887dca-b925-444b-a283-f6375e240dd4&_gl=1*yc2lrr*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1OTA3NzMuMTAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/typo%2Fhybridation3.jpg?alt=media&token=d35c15b7-634f-4d95-94fb-6069c82236b8&_gl=1*1m2fw3s*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1OTA3ODQuNjAuMC4w',
        ],
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
        demo: '',
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
        images: [
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/cinema%2Fmy_cinema1.jpg?alt=media&token=c9ca28e1-a037-4f6f-9f6f-fb987a90c8ee&_gl=1*blokle*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1OTA4MjUuMTkuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/cinema%2Fmy_cinema2.jpg?alt=media&token=49717041-1192-42b0-a153-986302d70f8d&_gl=1*bdcbdv*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1OTA4MzQuMTAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/cinema%2Fmy_cinema3.jpg?alt=media&token=6571d4de-8b4b-4362-8458-10256b85a5e1&_gl=1*p1hnmn*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1OTA4NDUuNjAuMC4w',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/cinema%2Fmy_cinema4.jpg?alt=media&token=03a74dd3-8a1d-4b25-ba1b-2a15dc82204e&_gl=1*1px85tt*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODU4OTE3Mi40MS4xLjE2OTg1OTA4NTcuNDguMC4w',
        ],
        demo: 'https://firebasestorage.googleapis.com/v0/b/portfolio-2023-f93d8.appspot.com/o/cinema%2Fmy_cinema.mp4?alt=media&token=7c0193d9-fe23-4d2d-911f-164a973bd050&_gl=1*87ebw2*_ga*OTQ5OTY2Mjk4LjE2ODI5NzExMjM.*_ga_CW55HF8NVT*MTY5ODY4OTU2MC40My4wLjE2OTg2ODk1NjAuNjAuMC4w',
    },
];
