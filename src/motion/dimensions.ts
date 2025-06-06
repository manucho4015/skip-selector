import { useEffect, useRef } from "react";

export const useDimensions = (ref: React.RefObject<null>) => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        if (ref.current) {

            dimensions.current.width = ref.current['offsetWidth'];
            dimensions.current.height = ref.current['offsetWidth'];
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return dimensions.current;
};
