import { testimonials } from "../constants";
import GlowCard from "../components/GlowCard";
import TitleHeader from "./TitleHeader";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center md:mt-24 mt-20">
      <div className="w-full h-full md:pr-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold max-sm:text-[16px]">{testimonial.name}</p>
                  <p className="text-white-50 max-sm:text-[16px]">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;