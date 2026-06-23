function Contact() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Contact Us
          </h2>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Get in touch with us for inquiries
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Contact Form */}
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg ring-1 ring-gray-900/5">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1.5 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold text-gray-900"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1.5 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-1.5 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all resize-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-500/40"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-4">
            {[
              {
                title: "Address",
                content: "Industrial Area, Kolkata, India",
                icon: "📍",
              },
              {
                title: "Phone",
                content: "+91 00000 00000",
                link: "tel:+910000000000",
                icon: "📞",
              },
              {
                title: "Email",
                content: "info@a2zseals.com",
                link: "mailto:info@a2zseals.com",
                icon: "✉️",
              },
              {
                title: "Business Hours",
                content: "Mon - Sat: 9:00 AM - 6:00 PM",
                icon: "🕐",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-brand-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="mt-1 block text-xs text-brand-600 hover:text-brand-700 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="mt-1 text-xs text-gray-600">{item.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
