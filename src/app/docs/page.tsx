/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xYj5594kd9T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Documentation() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold sm:text-base"
            prefetch={false}
          >
            <FrameIcon className="w-6 h-6" />
            <span>Chatbot</span>
          </Link>
          <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              Usage
            </Link>
            <Link href="#" className="text-muted-foreground" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" className="font-bold" prefetch={false}>
              Settings
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-10 xl:space-y-16">
              <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
                <div>
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Unleash the Power of Conversational AI
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Integrate our cutting-edge chatbot into your application and
                    provide your users with a seamless, personalized support
                    experience.
                  </p>
                  <div className="mt-6 space-x-4">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Try the Chatbot
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <img
                    src="/placeholder.svg"
                    width="600"
                    height="400"
                    alt="Chatbot"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Features
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our chatbot offers a wide range of features to enhance your
                    customer support experience.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">
                    Natural Language Processing
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our chatbot understands natural language and can engage in
                    human-like conversations.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Personalized Responses</h3>
                  <p className="text-sm text-muted-foreground">
                    The chatbot adapts its responses based on user input and
                    context to provide a personalized experience.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Seamless Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Easily integrate the chatbot into your existing application
                    with our developer-friendly API.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Multilingual Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Our chatbot can communicate in multiple languages, catering
                    to a diverse user base.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Real-time Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor the performance and usage of your chatbot with
                    detailed analytics and reporting.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    The chatbot continuously learns and improves its responses
                    based on user interactions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Usage
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Integrating our chatbot into your application is a breeze.
                    Follow these simple steps to get started.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">1. Sign Up</h3>
                  <p className="text-sm text-muted-foreground">
                    Create an account on our platform and get your API key to
                    start integrating the chatbot.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">2. Customize</h3>
                  <p className="text-sm text-muted-foreground">
                    Customize the chatbot's appearance, tone, and behavior to
                    match your brand and user preferences.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">3. Integrate</h3>
                  <p className="text-sm text-muted-foreground">
                    Use our simple and well-documented API to integrate the
                    chatbot into your application.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">4. Monitor</h3>
                  <p className="text-sm text-muted-foreground">
                    Track the performance and usage of your chatbot using our
                    real-time analytics dashboard.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">5. Optimize</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuously optimize the chatbot\'s responses and
                    functionality based on user feedback and analytics.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold">6. Scale</h3>
                  <p className="text-sm text-muted-foreground">
                    As your business grows, easily scale the chatbot to handle
                    increased user traffic and support requests.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    FAQs
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Got questions about our chatbot? Check out our frequently
                    asked questions.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-is-the-chatbot">
                    <AccordionTrigger>
                      <h3 className="text-lg font-bold">
                        What is the chatbot?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Our chatbot is an AI-powered conversational assistant
                        that can engage in natural language interactions with
                        your users. It is designed to provide personalized
                        support, answer questions, and help users accomplish
                        their tasks.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="how-does-the-chatbot-work">
                    <AccordionTrigger>
                      <h3 className="text-lg font-bold">
                        How does the chatbot work?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        The chatbot uses advanced natural language processing
                        and machine learning algorithms to understand user
                        inputs, interpret their intent, and provide relevant
                        responses. It continuously learns and improves its
                        conversational abilities based on user interactions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="what-are-the-key-features">
                    <AccordionTrigger>
                      <h3 className="text-lg font-bold">
                        What are the key features of the chatbot?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        The key features of our chatbot include natural language
                        processing, personalized responses, seamless
                        integration, multilingual support, real-time analytics,
                        and continuous learning. These features enable the
                        chatbot to provide a highly engaging and effective
                        customer support experience.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="how-much-does-the-chatbot-cost">
                    <AccordionTrigger>
                      <h3 className="text-lg font-bold">
                        How much does the chatbot cost?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        We offer flexible pricing plans to fit the needs of
                        businesses of all sizes. The cost of the chatbot depends
                        on factors such as the number of users, the level of
                        customization, and the features required. Our sales team
                        can provide you with a custom quote based on your
                        specific requirements.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="how-secure-is-the-chatbot">
                    <AccordionTrigger>
                      <h3 className="text-lg font-bold">
                        How secure is the chatbot?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        We take security very seriously. Our chatbot is built
                        with robust security measures, including end-to-end
                        encryption, data protection, and compliance with
                        industry standards. Your users' data is safe with us.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="how-do-i-get-started">
                    <AccordionTrigger>
                      <h3 className="text-lg font-bold">
                        How do I get started with the chatbot?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Getting started with our chatbot is easy. Simply sign up
                        for an account, obtain your API key, and follow our
                        step-by-step integration guide. Our team is also
                        available to provide support and assistance throughout
                        the process.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="what-kind-of-support-is-available">
                    <AccordionTrigger>
                      <h3 className="text-lg font-bold">
                        What kind of support is available?
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        We offer comprehensive support to our customers,
                        including documentation, tutorials, and a dedicated
                        support team. If you have any questions or need
                        assistance, you can reach out to us via email, chat, or
                        our support portal, and we'll be happy to help.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function FrameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
