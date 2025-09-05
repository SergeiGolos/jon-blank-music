import { component$, useStore } from "@builder.io/qwik";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default component$(() => {
  const formData = useStore<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div class="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
      <h3 class="mb-8 text-3xl font-bold text-white">Send a Message</h3>

      <form
        class="space-y-6"
        onSubmit$={(e: Event) => {
          e.preventDefault();

          // Validate all required fields
          if (!formData.name.trim()) {
            alert("Please enter your name");
            document.getElementById("name")?.focus();
            return;
          }

          if (!formData.email.trim()) {
            alert("Please enter your email");
            document.getElementById("email")?.focus();
            return;
          }

          if (!formData.message.trim()) {
            alert("Please enter your message");
            document.getElementById("message")?.focus();
            return;
          }

          // Basic email validation
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address");
            document.getElementById("email")?.focus();
            return;
          }

          // If all validations pass, you can submit the form
          alert(
            "Form submitted successfully! (This is just a demo - in a real app, this would send the data to a server)",
          );

          // Reset form after successful submission
          formData.name = "";
          formData.email = "";
          formData.subject = "";
          formData.message = "";
        }}
      >
        <div>
          <label for="name" class="mb-2 block font-medium text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onInput$={(e) =>
              (formData.name = (e.target as HTMLInputElement).value)
            }
            class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label for="email" class="mb-2 block font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onInput$={(e) =>
              (formData.email = (e.target as HTMLInputElement).value)
            }
            class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label for="subject" class="mb-2 block font-medium text-white">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onInput$={(e) =>
              (formData.subject = (e.target as HTMLInputElement).value)
            }
            class="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label for="message" class="mb-2 block font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onInput$={(e) =>
              (formData.message = (e.target as HTMLTextAreaElement).value)
            }
            class="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
            placeholder="Tell me about your music goals..."
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-lg bg-amber-500 px-8 py-3 font-semibold text-black shadow-lg transition-colors hover:bg-amber-600"
        >
          Send Message
        </button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-sm text-white/70">
          I'll get back to you within 24 hours!
        </p>
      </div>
    </div>
  );
});
