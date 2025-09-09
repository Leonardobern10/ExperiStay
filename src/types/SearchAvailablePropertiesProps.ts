import type { Moment } from 'moment';

export type SearchPropertiesProps = {
     arrival: Moment | null;
     exit: Moment | null;
     location: string;
};
