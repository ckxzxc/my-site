const componentGapClasses = {
  none: '',
  sm: 'mb-item-sm',
  md: 'mb-item',
  lg: 'mb-item-lg',
} as const;

const textColorClasses = {
    inherit: "",
    base: "text-base-content",
    primary: "text-primary",
    secondary: "text-secondary",
    neutral: "text-neutral",
    accent: "text-accent",
    info: "text-info",
    success: "text-success",
    warning: "text-warning", 
    error: "text-error",
    primaryContent: "text-primary-content",
    secondaryContent: "text-secondary-content",
    neutralContent: "text-neutral-content",
    accentContent: "text-accent-content",
    infoContent: "text-info-content",
    successContent: "text-success-content",
    warningContent: "text-warning-content", 
    errorContent: "text-error-content",
    
} as const;

const fontWeightClasses = {
    normal: "font-normal",
    semibold: "font-semibold",
    bold: "font-bold"
} as const;

const bgColorClasses = {
    none: '',
    base: 'bg-base-100',
    base100: 'bg-base-100',
    base200: 'bg-base-200',
    base300: 'bg-base-300',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
    neutral: 'bg-neutral',
    info: 'bg-info',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error'
} as const;

const borderColorClasses = {
    none: '',
    base100: 'border-base-content/50',
    base200: 'border-base-content/50',
    base300: 'border-base-content/50',
    primary: 'border-primary-content/50',
    secondary: 'border-secondary-content/50',
    accent: 'border-accent-content/50',
    neutral: 'border-neutral-content/50',
    info: 'border-info-content/50',
    success: 'border-success-content/50',
    warning: 'border-warning-content/50',
    error: 'border-error-content/50'
} as const;

const buttonClasses = {
    style: {
        default: '',
        soft: 'btn-soft',
        outline: 'btn-outline',
        dash: 'btn-dash',
        ghost: 'btn-ghost',
        link: 'btn-link'
    },
    color: {
        base: '',
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        neutral: 'btn-neutral',
        accent: 'btn-accent',
        info: 'btn-into',
        success: 'btn-success',
        warning: 'btn-warning',
        error: 'btn-error'
    },
    size: {
        md: '',
        sm: 'btn-sm',
    },
    align: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end'
    }
} as const;

export {componentGapClasses, textColorClasses, fontWeightClasses, bgColorClasses, borderColorClasses, buttonClasses};