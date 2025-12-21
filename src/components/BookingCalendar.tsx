import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

interface BookingCalendarProps {
    initialServiceId?: string | null;
}

const CAL_LINK = import.meta.env.VITE_CAL_LINK || "sysca"; // Detailed config in .env

const BookingCalendar: React.FC<BookingCalendarProps> = ({ initialServiceId: _initialServiceId }) => {
    
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"30min"});
            cal("ui", {"styles":{"branding":{"brandColor":"#ffffff"}},"hideEventTypeDetails":false,"layout":"column_view"});
        })();
    }, []);

    return (
        <div className="flex flex-col h-full w-full bg-black/20 rounded-2xl overflow-hidden">
             {/* 
                NOTE: The calLink prop expects the username/event-type.
                If initialServiceId was provided, we could map it to specific event types here.
                For now, we default to the user's general booking page or a specific event.
             */}
             <Cal 
                namespace="30min"
                calLink={CAL_LINK}
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{layout: 'column_view'}}
            />
        </div>
    );
};

export default BookingCalendar;
