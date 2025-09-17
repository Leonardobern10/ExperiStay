import type { Moment } from 'moment';

export type BookingProperty = {
     arrival: Moment | null;
     exit: Moment | null;
     person: string;
};
