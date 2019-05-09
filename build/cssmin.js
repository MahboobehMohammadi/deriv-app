module.exports = function (grunt) {
    const files = {
        app: [],
        app_2: [
            { src: `${global.dist_app_2}/css/app_2.css`, dest: `${global.dist_app_2}/css/app_2.min.css` },
        ],
        get all() {
            return [
                ...this.app,
                ...this.app_2,
            ];
        },
    };

    return {
        [global.section]: {
            options: {
                inline: ['none'],
            },
            files: files[global.section],
        },
    };
};