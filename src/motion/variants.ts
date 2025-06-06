export const variants1 = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

export const variants2 = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            x: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        x: -500,
        opacity: 0,
        transition: {
            x: { stiffness: 1000 },
        },
    },
};
export const variants3 = {
    open: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 500,
        x: 0,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};