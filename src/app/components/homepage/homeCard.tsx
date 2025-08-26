"use client";
import React, { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "6LdcCaUrAAAAAMoVryNXEaZxzMeZ9e-UECLDWrfq";

async function sendQuote(data: FormData) {
  const response = await fetch("/api/send-quote", {
    method: "POST",
    body: data,
  });
  return response.json();
}

const HomeCard: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim();
    const details = (form.elements.namedItem("details") as HTMLTextAreaElement)?.value.trim();
    const file = (form.elements.namedItem("file") as HTMLInputElement)?.files?.[0];
    const token = recaptchaRef.current?.getValue();

    if (!name || !email || !phone) {
      alert("Please fill in Name, Email, and Phone.");
      return;
    }
    if (!token) {
      alert("Please verify that you are not a robot.");
      return;
    }

    setSubmitting(true);

    const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("details", details);
  formData.append("recaptchaToken", token);
  if (file) formData.append("image", file);

    try {
      const result = await sendQuote(formData);
      if (result.success) {
        alert("Quote request sent successfully!");
        form.reset();
        recaptchaRef.current?.reset();
      } else {
        alert("Failed to send quote request. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <aside style={{ flex: 1, maxWidth: 400, backgroundColor: '#f8f8f8e9' }} className="shadow-xl">
      <div className="rounded-xl shadow-lg p-4 flex flex-col gap-4">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {children}
          <input type="text" name="name" placeholder="Name" className="w-full px-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="email" name="email" placeholder="Email" className="w-full px-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="tel" name="phone" placeholder="Phone" className="w-full px-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <textarea name="details" placeholder="Project Details" rows={3} className="w-full px-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <label htmlFor="file-upload" className="mb-1 font-medium">
            Upload Drawing/Image
          </label>
          <div className="flex items-center gap-2 mb-2">
            <input
              id="file-upload"
              type="file"
              name="file"
              className="hidden"
              accept="image/*,.pdf,.dwg"
              onChange={e => {
                const fileName = e.target.files?.[0]?.name;
                setFileName(fileName || "");
              }}
            />
            <label
              htmlFor="file-upload"
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 transition"
            >
              Choose File
            </label>
            <span className="text-sm text-gray-600 truncate">
              {fileName ? fileName : "No file chosen"}
            </span>
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={SITE_KEY}
          />

          <button
            type="submit"
            className="bg-blue-700 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </aside>
  );
};

export default HomeCard;