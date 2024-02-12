import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-8 "
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            All Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Ideas & Concepts{" "}
            </span>
            realised
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            We  build efficient, low cost AI enabled products for your use-case. 
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2 ">
        <a
          href="contact-us@neuring.co"
            // target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
          <Button className="w-full  md:w-auto">Request a Demo</Button>
          </a>
          {/* <a
          href="mailto:your@email.com"
          className={`w-full md:w-auto ${buttonVariants({
            variant: "outline",
          })}`} */}
          
        {/* ></a> */}
          {/* <Button
            variant="outline"
            className="w-full md:w-auto"
          > */}
            {/* View all features */}
          {/* </Button> */}
        </div>
      </div>
    </section>
  );
};
