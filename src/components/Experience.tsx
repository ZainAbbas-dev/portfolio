import { Award, GraduationCap, UsersRound } from "lucide-react";
import { MotionItem, MotionReveal, MotionStagger } from "@/components/Motion";

const educationHighlights = [
  "BS Computer Science",
  "COMSATS University Islamabad",
  "Expected Graduation: 2027",
  "CGPA: 3.40 / 4.00",
];

export function Experience() {
  return (
    <section
      className="site-container section-space scroll-mt-20"
      id="experience"
    >
      <MotionReveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Learning & Growth</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Education & Experience
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
          Building a strong academic foundation while applying it through
          shipped products, professional certificates, and developer community
          involvement.
        </p>
      </MotionReveal>

      <MotionStagger className="mt-10 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
        <MotionItem className="experience-card">
          <div className="experience-icon">
            <GraduationCap aria-hidden="true" size={22} />
          </div>
          <div>
            <p className="eyebrow text-[0.62rem]">2023 / 2027</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
              BS Computer Science
            </h3>
            <p className="mt-1 text-sm font-medium text-violet-200">
              COMSATS University Islamabad
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">
              Currently in the sixth semester, focused on full-stack software
              engineering and practical AI integration alongside coursework in
              algorithms, databases, networks, and computer vision.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {educationHighlights.map((item) => (
                <span className="experience-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </MotionItem>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <MotionItem className="experience-card compact">
            <div className="experience-icon">
              <Award aria-hidden="true" size={21} />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">
                Professional Certificates
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Meta Front-End Developer and Google IT Automation with Python
                professional certificates through Coursera.
              </p>
            </div>
          </MotionItem>

          <MotionItem className="experience-card compact">
            <div className="experience-icon">
              <UsersRound aria-hidden="true" size={21} />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">
                Developer Community
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Active volunteer with GDGoC COMSATS and IEEE Society, supporting
                technical workshops, developer sessions, and student events.
              </p>
            </div>
          </MotionItem>
        </div>
      </MotionStagger>
    </section>
  );
}
