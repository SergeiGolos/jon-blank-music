export interface LessonData {
  day: string;
  time: string;
  available: boolean;
}

export const lessonsData: LessonData[] = [
  { "day": "Monday", "time": "9:00 AM", "available": true },
  { "day": "Monday", "time": "11:00 AM", "available": true },
  { "day": "Monday", "time": "2:00 PM", "available": true },
  { "day": "Monday", "time": "6:00 PM", "available": false },
  { "day": "Tuesday", "time": "10:00 AM", "available": true },
  { "day": "Tuesday", "time": "4:00 PM", "available": false },
  { "day": "Wednesday", "time": "8:00 AM", "available": true },
  { "day": "Wednesday", "time": "12:00 PM", "available": false },
  { "day": "Wednesday", "time": "3:00 PM", "available": true },
  { "day": "Wednesday", "time": "5:00 PM", "available": false },
  { "day": "Wednesday", "time": "7:00 PM", "available": false },
  { "day": "Thursday", "time": "1:00 PM", "available": true },
  { "day": "Friday", "time": "9:00 AM", "available": true },
  { "day": "Friday", "time": "11:00 AM", "available": true },
  { "day": "Friday", "time": "3:00 PM", "available": true },
  { "day": "Saturday", "time": "8:00 AM", "available": true },
  { "day": "Saturday", "time": "10:00 AM", "available": true },
  { "day": "Saturday", "time": "12:00 PM", "available": true },
  { "day": "Saturday", "time": "2:00 PM", "available": false },
  { "day": "Saturday", "time": "4:00 PM", "available": true },
  { "day": "Saturday", "time": "6:00 PM", "available": false },
  { "day": "Sunday", "time": "1:00 PM", "available": false },
  { "day": "Sunday", "time": "5:00 PM", "available": false }
];
