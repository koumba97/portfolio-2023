export interface Stack {
    name: string;
    image: string;
}

export const StackList: Record<string, Stack> = {
    php: {
        name: 'PHP',
        image: '../images/logos/php.png',
    },
    javascript: {
        name: 'Javascript',
        image: '../images/logos/js.png',
    },
    typescript: {
        name: 'Typescript',
        image: '../images/logos/ts.png',
    },
    html: {
        name: 'HTML',
        image: '../images/logos/html.png',
    },
    css: {
        name: 'CSS',
        image: '../images/logos/css.png',
    },
    react_js: {
        name: 'React Js',
        image: '../images/logos/react_js.png',
    },
    react_native: {
        name: 'React Native',
        image: '/images/logos/react_native.png',
    },
    node_js: {
        name: 'Node Js',
        image: '../images/logos/node_js.png',
    },
    symfony: {
        name: 'Symfony',
        image: '../images/logos/symfony.png',
    },
    laravel: {
        name: 'Laravel',
        image: '../images/logos/laravel.png',
    },
    jquery: {
        name: 'Jquery',
        image: '../images/logos/jquery.gif',
    },
    php_my_admin: {
        name: 'PhpMyAdmin',
        image: '../images/logos/phpmyadmin.png',
    },
    firebase: {
        name: 'Firebase',
        image: '../images/logos/firebase.png',
    },
    sass: {
        name: 'Sass',
        image: '../images/logos/sass.png',
    },

    procreate: {
        name: 'Procreate',
        image: '../images/logos/procreate.png',
    },
    clip_studio_paint: {
        name: 'Clip Studio Paint',
        image: '../images/logos/clip_studio_paint.png',
    },
    photoshop: {
        name: 'Photoshop',
        image: '../images/logos/photoshop.png',
    },
    illustrator: {
        name: 'Illustrator',
        image: '/images/logos/illustrator.png',
    },
    in_design: {
        name: 'InDesign',
        image: '../images/logos/indesign.png',
    },
};
