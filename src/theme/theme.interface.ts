export interface CustomPalette {
    mode:              string;
    primary:           Error;
    secondary:         Error;
    background:        Background;
    common:            Common;
    // error:             Error;
    // warning:           Error;
    // info:              Error;
    // success:           Error;
    // grey:              Grey;
    // contrastThreshold: number;
    // tonalOffset:       number;
    // text:              Text;
    // divider:           string;
    // action:            Action;
}

export interface Action {
    active:             string;
    hover:              string;
    hoverOpacity:       number;
    selected:           string;
    selectedOpacity:    number;
    disabled:           string;
    disabledBackground: string;
    disabledOpacity:    number;
    focus:              string;
    focusOpacity:       number;
    activatedOpacity:   number;
}

export interface Background {
    default: string;
    paper:   string;
}

export interface Common {
    black: string;
    white: string;
}

export interface Error {
    main:         string;
    light:        string;
    dark:         string;
    contrastText: string;
    transparent?: string;
}

export interface Grey {
    "50":  string;
    "100": string;
    "200": string;
    "300": string;
    "400": string;
    "500": string;
    "600": string;
    "700": string;
    "800": string;
    "900": string;
    A100:  string;
    A200:  string;
    A400:  string;
    A700:  string;
}

export interface Text {
    primary:   string;
    secondary: string;
    disabled:  string;
    icon:      string;
}