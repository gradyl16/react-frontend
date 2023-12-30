import { PaletteColorOptions, Theme, createTheme } from '@mui/material/styles';

type NvisiaMuiTheme = Theme & {
    nvisiaRedOrange: PaletteColorOptions;
    nvisiaNavyBlue: PaletteColorOptions;
    nvisiaMarigoldYellow: PaletteColorOptions;
    nvisiaSteelBlue: PaletteColorOptions;
    nvisiaPowderBlue: PaletteColorOptions;
    nvisiaGrayscale: PaletteColorOptions;
};

const nvisiaPalette = {
    nvisiaRedOrange: {
        main: '#e56529',
        50: '#ffede0',
        100: ' #ffdbb7',
        200: ' #ffc88a',
        300: ' #ffb65d',
        400: ' #ffa33c',
        500: ' #ff8f1b',
        600: ' #f27b11',
        700: ' #e56529',
        800: ' #d2501d',
        900: ' #b93c10',
    },
    nvisiaNavyBlue: {
        main: '#2d3361',
        50: '#e6e7f2',
        100: ' #c2c5de',
        200: ' #9da2ca',
        300: ' #787fb6',
        400: ' #545ca2',
        500: ' #30398e',
        600: ' #2c347f',
        700: ' #2d3361',
        800: ' #292d53',
        900: ' #242745',
    },
    nvisiaMarigoldYellow: {
        main: '#f9991c',
        50: '#fef3e0',
        100: ' #fde6c1',
        200: ' #fcd89e',
        300: ' #fbc97b',
        400: ' #fabd5c',
        500: ' #f9b03d',
        600: ' #f8a31e',
        700: ' #f9991c',
        800: ' #df8919',
        900: ' #c57916',
    },
    nvisiaSteelBlue: {
        main: '#425d93',
        50: '#e6e9f3',
        100: ' #c1c8e1',
        200: ' #99a5ce',
        300: ' #7283bb',
        400: ' #4c60a8',
        500: ' #264295',
        600: ' #23408a',
        700: ' #425d93',
        800: ' #3b547f',
        900: ' #344b6b',
    },
    nvisiaPowderBlue: {
        main: '#a9cfee',
        50: '#f3f8fc',
        100: ' #e2f1fa',
        200: ' #d0e9f7',
        300: ' #bfe2f5',
        400: ' #aedbf2',
        500: ' #9dd3f0',
        600: ' #8cccee',
        700: ' #a9cfee',
        800: ' #93c2e6',
        900: ' #7db5de',
    },
    nvisiaGrayscale: {
        main: '#e0e1e2',
        50: '#ffffff',
        100: '#f8f8f9',
        200: '#f1f1f2',
        300: '#e9e9ec',
        400: '#e0e1e2',
        500: '#d4d4d8',
        600: '#a6a7a9',
        700: '#6d6d6d',
        800: '#3c3e3e',
        900: '#000000',
    },
};

const mui = createTheme({
    palette: {
        primary: {
            // Equivalent to Red Orange 700 in the SCSS color palette.
            main: nvisiaPalette.nvisiaRedOrange.main,
        },
        secondary: {
            // Equivalent to Navy Blue 700 in the SCSS color palette.
            main: nvisiaPalette.nvisiaNavyBlue.main,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    // Height adjusted to a taller button due to UX requirements.
                    height: '56px',
                },
            },
        },
    },
});

export const theme: NvisiaMuiTheme = {
    ...mui,
    palette: {
        ...mui.palette,
        ...nvisiaPalette,
    },
};
