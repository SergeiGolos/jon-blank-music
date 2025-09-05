import { component$, useSignal } from "@builder.io/qwik";
import LessonTypes from "./lessons/lesson-types";
import LessonOptions from "./lessons/lesson-options";

interface LessonData {
  day: string;
  time: string;
  available: boolean;
}

const lessonsData: LessonData[] = [
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

export default component$(() => {
  const selectedSlot = useSignal<string>('');

  return (
    <section id="lessons" class="py-16">
      <div class="text-center mb-12">
        <h2 class="text-5xl font-bold text-white mb-4 drop-shadow-lg">
          Music Lessons
        </h2>
        <p class="text-xl text-amber-200">
          Comprehensive instruction for all ages and skill levels
        </p>
      </div>

      <LessonTypes />

      <LessonOptions />

      <div class="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
        <h3 class="text-3xl font-bold text-white mb-8 text-center">Available Time Slots</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => {
            const dayLessons = lessonsData.filter(lesson => lesson.day === day && lesson.available);
            return (
              <div key={day} class="bg-white/5 rounded-xl p-4">
                <h4 class="text-lg font-semibold text-white mb-4 text-center">{day}</h4>
                <div class="space-y-2">
                  {dayLessons.length > 0 ? (
                    dayLessons.map(lesson => (
                      <button
                        key={lesson.time}
                        onClick$={async () => {
                          selectedSlot.value = `${lesson.day} ${lesson.time}`;
                          
                          // Scroll to contact section
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                          
                          // Pre-populate message in contact form
                          const messageTextarea = document.getElementById('message') as HTMLTextAreaElement;
                          if (messageTextarea) {
                            const message = `I am interested in the ${lesson.day} ${lesson.time} slot to study [Fill in your interest here..]`;
                            messageTextarea.value = message;
                            
                            // Trigger input event to update the store
                            const event = new Event('input', { bubbles: true });
                            messageTextarea.dispatchEvent(event);
                          }
                          
                          // Focus on name field for proper form flow
                          const nameInput = document.getElementById('name') as HTMLInputElement;
                          if (nameInput) {
                            nameInput.focus();
                          }
                        }}
                        class="w-full text-center bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-lg p-3 transition-all duration-200 cursor-pointer border border-white/20 hover:border-amber-400/50 hover:shadow-lg hover:scale-105 active:scale-95"
                      >
                        <div class="text-amber-300 font-medium">{lesson.time}</div>
                        <div class="text-green-400 text-sm">Available</div>
                      </button>
                    ))
                  ) : (
                    <div class="text-white/60 text-center py-3">No slots</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
