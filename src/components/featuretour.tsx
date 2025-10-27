// src/components/featuretour.tsx
import FeatureCard from "./featurecard";

export default function FeatureTour() {
  return (
    <section className="my-24 mx-6 text-[#0F1932]">
      {/* Heading */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <i className="ri-map-pin-line text-[18px]" />
        <h3 className="uppercase text-[16px] font-medium tracking-wide">
          Feature Tour
        </h3>
      </div>

      {/* Title & Description */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-[48px] font-semibold mb-6 leading-tight">
          Modules to Automate School Management
        </h2>
        <p className="text-[16px] font-semibold text-[#0F1932] leading-relaxed">
          Simplify every aspect of school operations with powerful, integrated modules
          that handle academics, finance, communication, and administration — all in
          one place.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        <FeatureCard
          icon="ri-book-open-line"
          title="Academics"
          text="Manage classes, timetables, and grading seamlessly with automation that saves educators time and improves consistency."
        />
        <FeatureCard
          icon="ri-bank-card-line"
          title="Finance"
          text="Handle billing, payments, and expense tracking effortlessly with transparent reporting and automated fee management."
        />
        <FeatureCard
          icon="ri-chat-3-line"
          title="Communication"
          text="Unify communication between parents, teachers, and students with announcements, messages, and notifications in one hub."
        />
        <FeatureCard
          icon="ri-admin-line"
          title="Administration"
          text="Digitize attendance, admissions, and staff management to simplify administration and improve productivity."
        />
        <FeatureCard
          icon="ri-bar-chart-2-line"
          title="Analytics"
          text="Visualize key performance metrics and generate reports that guide smarter decision-making across departments."
        />
        <FeatureCard
          icon="ri-folder-user-line"
          title="Student Records"
          text="Maintain accurate academic, personal, and financial records for every student, accessible anytime and securely stored."
        />
      </div>

      {/* Footer Section */}
      <div className="text-center">
        <h3 className="text-[48px] font-bold text-[#0F1932]">+50</h3>
        <p className="text-[20px] font-semibold text-[#0F1932] mb-6">
          Other awesome modules in E-Skolhub Software
        </p>
        <button className="px-8 py-3 border-2 border-[#0F1932] text-[#0F1932] font-semibold rounded-lg hover:bg-[#0F1932] hover:text-white transition">
          See All Features
        </button>
      </div>
    </section>
  );
}
