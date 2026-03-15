import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { Title, Meta } from '@solidjs/meta';
import { Check } from 'lucide-solid';

const Quote: Component = () => {
  const [submitted, setSubmitted] = createSignal(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    fetch("https://formsubmit.co/ajax/your-email@example.com", {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: new FormData(form)
    })
      .then(response => response.json())
      .then(() => setSubmitted(true))
      .catch(error => console.error("Error submitting form:", error));
  };

  const inputClass = "py-3.5 px-4 rounded border border-gray-300 bg-white text-gray-900 text-base w-full box-border font-sans";
  const labelClass = "font-medium text-sm text-gray-600 mb-2 block";

  return (
    <>
      <Title>Get an Estimate | Auric Lapis Flooring</Title>
      <Meta name="description" content="Start your project with Auric Lapis. Share your vision with us and request a free, no-obligation premium flooring estimate today." />
      <div class="bg-gray-50 text-gray-900 px-6 py-16 md:px-8 md:py-24 min-h-[calc(100vh-81px)] flex items-center justify-center box-border">
        <div class="max-w-lg w-full bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-100 box-border">
          <h1 class="text-3xl md:text-4xl font-extrabold mb-2 text-center tracking-tighter">
            Start a Project
          </h1>
          <p class="text-center text-gray-500 mb-10">
            Share your vision, and we will provide an estimate.
          </p>
          {submitted() ? (
            <div class="bg-gray-50 p-12 rounded text-center border border-gray-200">
              <div class="text-gray-900 mb-6 flex justify-center">
                <Check size={48} />
              </div>
              <h2 class="text-2xl font-bold mb-2 text-gray-900 tracking-tight">Received</h2>
              <p class="text-gray-600 leading-relaxed">Thank you. Our team will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} class="flex flex-col gap-6">
              <div>
                <label for="name" class={labelClass}>Full Name</label>
                <input type="text" id="name" name="name" required class={inputClass} />
              </div>
              <div>
                <label for="email" class={labelClass}>Email Address</label>
                <input type="email" id="email" name="email" required class={inputClass} />
              </div>
              <div>
                <label for="service" class={labelClass}>Service of Interest</label>
                <select id="service" name="service" required class={`${inputClass} appearance-none`}>
                  <option value="" disabled selected>Select</option>
                  <option value="hybrid">Hybrid Flooring</option>
                  <option value="engineered">Engineered Hardwood</option>
                  <option value="hardwood">Hardwood Flooring</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <div>
                <label for="message" class={labelClass}>Project Details</label>
                <textarea id="message" name="message" rows="4" required class={`${inputClass} resize-y`}></textarea>
              </div>
              <button type="submit" class="bg-gray-900 py-4 rounded text-white font-medium text-sm tracking-widest uppercase border-none cursor-pointer mt-4">
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Quote;