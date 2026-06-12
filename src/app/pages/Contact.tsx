import { Mail, Phone, MapPin, Send, Handshake, GraduationCap, ExternalLink, Info, MessageSquare } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <PageHeader
          title="Contact Us"
          description="Get in touch with us for research collaborations, lab visits, course inquiries, or any questions about DeF Lab."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF6600]/10 rounded-lg">
                    <Mail className="w-6 h-6 text-[#FF6600]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#003153] mb-2">Email</h3>
                    <a
                      href="mailto:mobilityvehicledesigniitb@gmail.com"
                      className="text-sm text-[#666666] hover:text-[#FF6600] transition-colors break-all"
                    >
                      mobilityvehicledesigniitb@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF6600]/10 rounded-lg">
                    <Phone className="w-6 h-6 text-[#FF6600]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#003153] mb-2">Phone</h3>
                    <a
                      href="tel:+919864801504"
                      className="text-sm text-[#666666] hover:text-[#FF6600] transition-colors"
                    >
                      +91 98648 01504
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-6 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF6600]/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#FF6600]" />
                  </div>
                  <div>
                    <h3 className="text-lg text-[#003153] mb-2">Location</h3>
                    <p className="text-sm text-[#666666]">
                      DeF Lab - Design for Future Lab<br />
                      Innovation Centre, IDC School of Design<br />
                      Ground Floor, Lab No. G 006, IIT Bombay<br />
                      Powai, Mumbai, Maharashtra 400076
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-[#003153] rounded-xl p-8 text-white">
              <h3 className="text-2xl mb-4">Lab Hours</h3>
              <div className="space-y-2 text-gray-200">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-[#FF6600]">Closed</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 mt-4">
                <Info className="w-4 h-4 flex-shrink-0 text-[#FF6600]" />
                <span>Please schedule an appointment for lab visits</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#FF6600]/10 rounded-lg flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-[#FF6600]" />
              </div>
              <h2 className="text-2xl text-[#003153]">Send us a Message</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-[#666666] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-[#666666] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm text-[#666666] mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="research">Research Collaboration</option>
                  <option value="visit">Lab Visit Request</option>
                  <option value="course">Course Inquiry</option>
                  <option value="workshop">Workshop Registration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-[#666666] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/90 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="aspect-video rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <iframe
              title="DeF Lab, IIT Bombay location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5443496540224!2d72.91375497594!3d19.133914150090217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f5e1e5b0c1%3A0x2f4b6e5f9a0c4d7e!2sRahul%20Bajaj%20Technology%20Innovation%20Centre%2C%20IDC%20School%20of%20Design%2C%20IIT%20Bombay!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-sm text-[#666666] mt-4">Innovation Centre, IDC School of Design, Ground Floor, Lab No. G 006, IIT Bombay, Powai, Mumbai 400076</p>
        </div>

        {/* Work with Us + Internship */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Work with Us */}
          <div className="flex flex-col h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 flex items-center justify-center bg-[#FF6600]/10 rounded-lg flex-shrink-0">
                <Handshake className="w-6 h-6 text-[#FF6600]" />
              </div>
              <h2 className="text-2xl text-[#003153]">Work with Us</h2>
            </div>
            <div className="w-12 h-0.5 bg-[#FF6600] mb-4" />
            <p className="text-sm text-[#666666] leading-relaxed flex-1">
              For queries related to potential collaborations or research opportunities, drop an email to us directly.
            </p>
            <a
              href="mailto:mobilityvehicledesigniitb@gmail.com"
              className="mt-auto self-start inline-flex items-center gap-2 px-4 py-2.5 bg-[#FF6600]/10 text-[#FF6600] text-sm rounded-lg hover:bg-[#FF6600]/20 transition-colors whitespace-nowrap"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              mobilityvehicledesigniitb@gmail.com
            </a>
          </div>

          {/* Internship */}
          <div className="flex flex-col h-full bg-gradient-to-br from-[#003153] to-[#003153]/90 rounded-2xl p-8 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 flex items-center justify-center bg-[#FF6600] rounded-lg flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl text-white">Internship at DeF Lab</h2>
            </div>
            <div className="w-12 h-0.5 bg-[#FF6600] mb-4" />
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm flex-1 mb-6">
              <p>
                Each year, we accept a select number of intern students based on the ongoing projects in the lab. Prospective intern students may reach out to us through email.
              </p>
              <p>
                One of the options to apply is through the <span className="text-white">IIT Bombay Research Internship Awards</span> program. Interns get the opportunity to work with us during the Spring Semester (January to July). Applications typically open around August to September.
              </p>
            </div>
            <a
              href="https://rnd.iitb.ac.in/internship_ircc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto self-start inline-flex items-center gap-2 px-4 py-2.5 bg-[#FF6600] text-white rounded-lg hover:bg-[#FF6600]/80 transition-colors text-sm whitespace-nowrap"
            >
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
              Internship Programmes at IITB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}