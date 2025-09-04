export type BannerProps = {
    title: string;
    subtitle?: string;
    source: string;
    button1?: boolean;
    link1?: string;
    text1?: string;
    button2?: boolean;
    link2?: string;
    text2?: string;
    icon?: boolean;
    social?: boolean;
    classname: string;
}

export type CardProps = {
    title: string;
    subtitle?: string;
    description: string;
    src: string;
    button?: boolean;
    link?: string;
    text?: string;
}