module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        scale: {
            '0': '0',
            '10': '.1',
            '15': '.15',
            '20': '.2',
            '25': '.25',
            '30': '.3',
            '40': '.4',
            '45': '.45',
            '50': '.5',
            '60': '.6',
            '75': '.75',
            '80': '.8',
            '90': '.9',
            '95': '.95',
            '100': '1',
            '105': '1.05',
            '110': '1.1',
            '125': '1.25',
            '150': '1.5',
            '200': '2',
        },
        fontSize: {
            's2': '0.2rem',
            's3': '0.3rem',
            's4': '0.4rem',
            's5': '0.5rem',
            's6': '0.625rem',
            'xs': '0.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        maxWidth: {
            '9xl': '110rem',
            '10xl': '120rem'
        },
        extend: {
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
                '97': '28.5rem',
                '98': '31.125rem',

            },
        },
        variants: {
            extend: {},
        },
        plugins: [
            require('@tailwindcss/aspect-ratio'),
        ],
    }
}