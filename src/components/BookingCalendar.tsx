import React, { useState, useEffect } from 'react';
import { format, addDays, startOfToday, isSameDay } from 'date-fns';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { SERVICES, fetchAvailableSlots } from '../lib/db';
import type { Service, TimeSlot } from '../lib/db';

const BookingCalendar: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date>(startOfToday());
    const [slots, setSlots] = useState<TimeSlot[]>([]);
    const [loadingSlots, setLoadingSlots] = useState(false);
    
    // Generate next 14 days for calendar
    const dates = Array.from({ length: 14 }, (_, i) => addDays(startOfToday(), i));

    useEffect(() => {
        const loadSlots = async () => {
            setLoadingSlots(true);
            try {
                const fetchedSlots = await fetchAvailableSlots(selectedDate);
                setSlots(fetchedSlots);
            } catch (error) {
                console.error("Failed to load slots", error);
            } finally {
                setLoadingSlots(false);
            }
        };
        loadSlots();
    }, [selectedDate]);

    // Logic to filter/group slots based on service duration would go here.
    // For now, simpler implementation: just show available slots.

    return (
        <div className="flex flex-col md:flex-row h-full w-full gap-6">
            
            {/* Left Column: Services */}
            <div className="w-full md:w-1/3 border-r border-white/10 pr-6">
                <h3 className="text-2xl font-light mb-6">Select Service</h3>
                <div className="flex flex-col gap-3">
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => setSelectedService(service)}
                            className={clsx(
                                "p-4 rounded-xl cursor-pointer transition-all duration-300 border",
                                selectedService?.id === service.id
                                    ? "bg-white text-black border-white"
                                    : "bg-white/5 hover:bg-white/10 border-white/10"
                            )}
                        >
                            <div className="font-medium text-lg">{service.name}</div>
                            <div className={clsx(
                                "text-sm mt-1",
                                selectedService?.id === service.id ? "text-gray-600" : "text-gray-400"
                            )}>
                                {service.durationMinutes} mins • \${service.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Calendar & Slots */}
            <div className="w-full md:w-2/3 flex flex-col">
                <h3 className="text-2xl font-light mb-6">Select Time</h3>
                
                {/* Date Strip */}
                <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar mb-6">
                    {dates.map((date) => (
                        <button
                            key={date.toString()}
                            onClick={() => setSelectedDate(date)}
                            className={clsx(
                                "flex-shrink-0 w-16 h-20 rounded-xl flex flex-col items-center justify-center border transition-all",
                                isSameDay(date, selectedDate)
                                    ? "bg-white text-black border-white scale-105 shadow-lg"
                                    : "bg-white/5 border-white/10 hover:bg-white/10"
                            )}
                        >
                            <span className="text-xs font-semibold uppercase opacity-60">{format(date, 'EEE')}</span>
                            <span className="text-xl font-bold">{format(date, 'd')}</span>
                        </button>
                    ))}
                </div>

                {/* Slots Grid */}
                <div className="flex-1 overflow-y-auto pr-2">
                    {loadingSlots ? (
                         <div className="flex items-center justify-center h-40">
                             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                         </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {slots.map((slot) => (
                                <motion.button
                                    key={slot.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    disabled={!slot.isAvailable}
                                    className={clsx(
                                        "py-3 px-2 rounded-lg text-sm font-medium transition-all text-center border",
                                        slot.isAvailable
                                            ? "bg-white/10 hover:bg-white text-white hover:text-black border-white/20 cursor-pointer"
                                            : "opacity-30 cursor-not-allowed border-transparent bg-white/5 text-gray-400"
                                    )}
                                >
                                    {format(slot.start, 'h:mm a')}
                                </motion.button>
                            ))}
                        </div>
                    )}
                </div>
                
                {selectedService && (
                     <div className="mt-6 pt-6 border-t border-white/10">
                         <button className="w-full py-4 bg-white text-black font-bold text-lg rounded-xl hover:scale-[1.02] transition-transform">
                             CONFIRM BOOKING
                         </button>
                     </div>
                )}
            </div>
        </div>
    );
};

export default BookingCalendar;
