"use client";

import { useState, useRef } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  if (!isOpen) return null;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    setSelectedSlot(null); // Reset slot on date change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSlot) {
      alert("Please select a time slot");
      return;
    }

    if (!formRef.current) return;

    setLoading(true);

    const formData = new FormData(formRef.current);
    
    // Construct data object matching the template parameters
    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: selectedDate,
      time: selectedSlot,
      service: formData.get("service"),
    };

    try {
      await emailjs.send(
        "service_7quctin", 
        "template_e80zpbp", 
        templateParams,
        { publicKey: "e7R7kSAq67Y8B2FZ4" }
      );
      
      alert(`✅ Appointment booked!\n\nDate: ${selectedDate}\nTime: ${selectedSlot}`);
      formRef.current.reset();
      setSelectedDate("");
      setSelectedSlot(null);
      onClose();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-[420px] bg-card rounded-3xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200 border border-border"
      >
        <button
          onClick={onClose}
          aria-label="Close booking modal"
          className="absolute top-5 right-5 text-muted-foreground hover:text-red-500 transition-colors"
        >
          <X size={24} />
        </button>

        <h3 id="modal-title" className="text-xl font-bold mb-6 text-foreground pr-8">
          Book Your Free Strategy Call
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full p-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
          />

          <input
            type="date"
            required
            value={selectedDate}
            onChange={handleDateChange}
            className="w-full p-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
          />

          {selectedDate && (
            <div className="grid grid-cols-3 gap-2 animate-in slide-in-from-top-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={cn(
                    "p-2 text-xs md:text-sm border rounded-xl transition-all",
                    selectedSlot === slot
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-muted/10 text-foreground border-border hover:bg-muted/20"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          )}

          <select
            name="service"
            required
            className="w-full p-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            <option value="">Select Goal</option>
            <option>Fat Loss</option>
            <option>Muscle Building</option>
            <option>General Fitness</option>
          </select>

          <Button 
            variant="large" 
            type="submit" 
            className="w-full text-lg mt-2" 
            disabled={loading}
          >
            {loading ? "Booking..." : "Reserve My Spot"}
          </Button>
        </form>
      </div>
    </div>
  );
}
