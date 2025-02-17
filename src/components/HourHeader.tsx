'use client'

import { useEffect, useState } from "react"

export default function HourHeader() {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const getDate = () => {
            const date = new Date();
            const formattedDate = date.toLocaleDateString("es-ES", {
                day: "numeric",
                month: "long", 
                year: "numeric",
            });
            setCurrentDate(formattedDate);
        };

        getDate(); 
    }, []);

    return (
        <p className="text-white text-sm font-medium py-2">{currentDate}</p>
    );
}
