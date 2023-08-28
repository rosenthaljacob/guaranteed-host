import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import Container from "@/layout/Container";

const faqs = [
  {
    question: "What is web hosting?",
    answer:
      "Web hosting is a service that allows you to publish your website or web application on the Internet. When you purchase a hosting plan from us, you're essentially renting space on one of our servers where your website files are stored and accessed by visitors.",
  },
  {
    question: "How do I choose the right hosting plan?",
    answer:
      "The right hosting plan depends on your specific needs, such as the type of website you're running, its traffic, and your budget. Our 'Starter Pack' is great for small websites and beginners, while the 'Business Pro' and 'Enterprise Elite' plans offer more resources for larger, more demanding websites.",
  },
  {
    question: "What is bandwidth?",
    answer:
      "Bandwidth refers to the amount of data that can be transferred between your website and its visitors. More bandwidth allows for more visitors and more data transfer, which is especially important for high-traffic websites.",
  },
  {
    question: "What is SSD storage?",
    answer:
      "SSD stands for Solid State Drive. It's a faster type of storage compared to traditional HDD (Hard Disk Drive), which means your website will load quicker and perform better.",
  },
  {
    question: "Do you offer 24/7 customer support?",
    answer:
      "Yes, we offer round-the-clock customer support through live chat and phone. Our team is always available to assist you with any issues or questions you may have.",
  },
  {
    question: "What is a Free SSL Certificate?",
    answer:
      "SSL stands for Secure Sockets Layer. It encrypts the data transferred between your website and your visitors, adding an extra layer of security. We offer free SSL certificates with our 'Business Pro' and 'Enterprise Elite' plans.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Choose the plan that best fits your needs, complete the payment, and you'll receive an email with instructions on how to set up your website.",
  },
  {
    question: "What is your money-back guarantee?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, you can request a full refund, no questions asked.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className=" w-full bg-cyan-50 py-10">
      <Container className=" grid gap-8">
        <h2 className="text-3xl font-bold tracking-tight text-center">
          Need to Know More? You're in the Right Place!
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-lg mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className=" border-gray-400"
            >
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
