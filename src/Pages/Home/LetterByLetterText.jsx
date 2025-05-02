import { useState, useEffect } from "react";

function LetterByLetterText({ text, delay, time = 0 }) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [startTyping, setStartTyping] = useState(time === 0); // Start immediately if no wait

    // Handle the initial wait (before typing starts)
    useEffect(() => {
        if (time > 0) {
            const wait = setTimeout(() => {
                setStartTyping(true); // Enable typing after the wait
            }, time);

            return () => clearTimeout(wait);
        }
    }, [time]);

    // Handle typing letter by letter
    useEffect(() => {
        if (!startTyping) return; // Don't start typing until wait is over

        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prevText => prevText + text[index]);
                setIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [startTyping, index, text, delay]);

    return <span>{displayedText}</span>;
}

export default LetterByLetterText;
