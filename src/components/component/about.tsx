/**
 * v0 by Vercel.
 * @see https://v0.dev/t/g811ZwMR7iq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "../ui/button";

export function About() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Meet Acme Chatbot: Your Intelligent Assistant
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Acme Chatbot is an advanced conversational AI that is
                  revolutionizing the way businesses interact with their
                  customers. With its natural language processing capabilities
                  and deep knowledge base, Acme Chatbot can assist with a wide
                  range of tasks, from customer support to sales and marketing.
                </p>
              </div>
              <Button>Learn More</Button>
              {/* <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link> */}
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Acme Chatbot"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="About Acme Chatbot"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The Power of Acme Chatbot
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Chatbot is powered by advanced natural language
                  processing and machine learning algorithms, allowing it to
                  understand and respond to a wide range of queries and
                  requests. Whether your customers need help with product
                  information, order tracking, or technical support, Acme
                  Chatbot is ready to assist them 24/7.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  But Acme Chatbot is more than just a customer service tool. It
                  can also be integrated into your sales and marketing efforts,
                  helping to qualify leads, provide personalized product
                  recommendations, and even assist with scheduling appointments
                  and demos.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With its ability to learn and adapt over time, Acme Chatbot is
                  constantly improving its capabilities, ensuring that it
                  remains a valuable asset for your business. And with our
                  dedicated support team, you can be confident that Acme Chatbot
                  will be seamlessly integrated into your operations and
                  continuously optimized to meet your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[550px_1fr]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Integrating Acme Chatbot
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Integrating Acme Chatbot into your existing systems and
                  workflows is a breeze. Our team of experts will work closely
                  with you to understand your unique business requirements and
                  customize the chatbot to seamlessly fit into your
                  infrastructure.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you need to connect Acme Chatbot to your CRM,
                  e-commerce platform, or any other business system, we've got
                  you covered. Our API-first approach ensures that the
                  integration process is smooth and efficient, allowing you to
                  start reaping the benefits of Acme Chatbot in no time.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  And the best part? Acme Chatbot is constantly evolving and
                  improving, so you can be confident that your investment will
                  continue to pay dividends for years to come. Our team of
                  engineers and data scientists are dedicated to staying on the
                  cutting edge of conversational AI, ensuring that Acme Chatbot
                  remains a powerful and indispensable tool for your business.
                </p>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Integrating Acme Chatbot"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
