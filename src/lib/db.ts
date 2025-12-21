import { db } from './firebase';
// import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';

export type ServiceType = 'VA' | 'HR' | 'TEACHING' | 'TATTOO' | 'NAILS';

export interface Service {
  id: string;
  name: string;
  durationMinutes: number; // e.g., 60 for VA, 180 for Tattoo
  price: number;
  type: ServiceType;
}

export interface TimeSlot {
  id: string;
  start: Date;
  end: Date;
  isAvailable: boolean;
}

export interface UserBooking {
  name: string;
  email: string;
  serviceId: string;
  date: Date;
  slotId: string;
}

// MOCK SERVICES
export const SERVICES: Service[] = [
  { id: '1', name: 'Virtual Assistant Consultation', durationMinutes: 60, price: 50, type: 'VA' },
  { id: '2', name: 'HR Strategy Session', durationMinutes: 90, price: 120, type: 'HR' },
  { id: '3', name: 'English Class', durationMinutes: 60, price: 40, type: 'TEACHING' },
  { id: '4', name: 'Tattoo Session (Small)', durationMinutes: 180, price: 200, type: 'TATTOO' },
  { id: '5', name: 'Nail Art Appointment', durationMinutes: 90, price: 60, type: 'NAILS' },
];

/**
 * Fetch available slots for a given date.
 * MOCK IMPLEMENTATION: Returns 9 AM - 5 PM slots for the given date.
 */
export const fetchAvailableSlots = async (date: Date): Promise<TimeSlot[]> => {
  // Simulate network delay using db instance to avoid unused warning
  // In real implementation this would query Firestore
  // @ts-ignore
  console.log("Fetching from", db); 
  await new Promise(resolve => setTimeout(resolve, 500));

  const slots: TimeSlot[] = [];
  const startHour = 9;
  const endHour = 17;

  for (let i = startHour; i < endHour; i++) {
    const slotStart = new Date(date);
    slotStart.setHours(i, 0, 0, 0);
    
    const slotEnd = new Date(date);
    slotEnd.setHours(i + 1, 0, 0, 0);

    // Randomly mark some as unavailable for realism
    const isAvailable = Math.random() > 0.3; 

    slots.push({
      id: `slot-${i}`,
      start: slotStart,
      end: slotEnd,
      isAvailable
    });
  }

  return slots;
};

/**
 * Book a slot.
 * MOCK IMPLEMENTATION: Logs to console.
 */
export const bookSlot = async (slotId: string, bookingData: UserBooking): Promise<boolean> => {
  console.log("Mock Booking Request:", { slotId, bookingData });
  await new Promise(resolve => setTimeout(resolve, 1000));
  return true;
};
