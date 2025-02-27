import { useState, useEffect } from 'react';

const useCounter = (start, end, duration) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        const increment = (end - start) / (duration / 1000); 
        let currentCount = start;
        const interval = setInterval(() => {
            currentCount = Math.min(currentCount + increment, end); 
            setCount(Math.round(currentCount)); 
            if (currentCount === end) clearInterval(interval); 
        }, 1000 / 60); 

        return () => clearInterval(interval); 
    }, [start, end, duration]);

    return count;
};

export default useCounter;
