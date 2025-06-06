export default {
    theme: {
        extend: {
            animation: {
                ripple: "ripple 0.6s linear",
            },
            keyframes: {
                ripple: {
                    "0%": { transform: "scale(0)", opacity: 0.6 },
                    "100%": { transform: "scale(2.5)", opacity: 0 },
                },
            },
        },
    }
}
