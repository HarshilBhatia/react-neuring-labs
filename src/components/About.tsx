import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-8"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Us
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              We are a bunch of research nerds and builders. 
              Our mission is to increase the accessibility and impact of the fast paced research in vision and language. 
              </p>
              <p className="text-xl text-muted-foreground mt-4">

              Currently, we are building to transform how user perceive, navigate and interact with the web. 
              Our full-stack products will enable faster and efficient consumption of content. 
              In the times of a compute bottleneck, we are building to support our infrastructure on consumer grade CPU’s with minimal to no gpus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
