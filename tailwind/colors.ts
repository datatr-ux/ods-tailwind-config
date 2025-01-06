const getPalette = (color:string) => ({
    DEFAULT: `var(--ods-color-${color}-500)`,
    '0': `var(--ods-color-${color}-000)`,
    '50': `var(--ods-color-${color}-050)`,
    '100': `var(--ods-color-${color}-100)`,
    '200': `var(--ods-color-${color}-200)`,
    '300': `var(--ods-color-${color}-300)`,
    '400': `var(--ods-color-${color}-400)`,
    '500': `var(--ods-color-${color}-500)`,
    '600': `var(--ods-color-${color}-600)`,
    '700': `var(--ods-color-${color}-700)`,
    '800': `var(--ods-color-${color}-800)`,
    '900': `var(--ods-color-${color}-900)`,
});

const paletteNames = [
    { name: 'critical', odsVar: 'critical' },
    { name: 'information', odsVar: 'information' },
    { name: 'neutral', odsVar: 'neutral' },
    { name: 'primary', odsVar: 'primary' },
    { name: 'success', odsVar: 'success' },
    { name: 'warning', odsVar: 'warning' },
    // color equivalent
    { name: 'gray', odsVar: 'neutral' },
    { name: 'blue', odsVar: 'primary' },
    { name: 'red', odsVar: 'critical' },
    { name: 'orange', odsVar: 'warning' },
    { name: 'green', odsVar: 'success' },
];

const palettes = paletteNames.reduce((acc: any, color) => {
    acc[color.name] = getPalette(color.odsVar);
    return acc;
}, {});

export default {
    new: { DEFAULT: 'var(--ods-color-new)' },
    alpha: { DEFAULT: 'var(--ods-color-alpha)' },
    beta: { DEFAULT: 'var(--ods-color-beta)' },
    promotion: { DEFAULT: 'var(--ods-color-promotion)' },
    pink: { DEFAULT: 'var(--ods-color-promotion)' },
    text: { DEFAULT: 'var(--ods-color-text)' },
    heading: { DEFAULT: 'var(--ods-color-heading)' },
    ...palettes,

};
