import React from "react";
// Layout
import Container from "@/layout/Container";
// Components
import { Card } from "@/components/ui/card";
// Icons
import { Icon } from "@iconify/react";

export default function Features() {
  return (
    <section id="features" className="w-full flex flex-col">
      <Container className="py-12 relative">
        <div className="grid sm:grid-cols-3 gap-3 absolute -top-8 left-5 right-5">
          <Card className="p-5">
            <div className="grid gap-3">
              <div className="flex items-center text-primary font-medium">
                <Icon icon="fa6-solid:headset" className="h-5 w-5 mr-2" />
                <h6>24/7 Live Chat & Phone Support</h6>
              </div>
              <p>
                Our dedicated support team is just a click or a call away, 24/7.
                Whether it's live chat or phone, we've got you covered!
              </p>
            </div>
          </Card>
          <Card className="p-5">
            <div className="grid gap-3">
              <div className="flex items-center text-primary font-medium">
                <Icon
                  icon="fa6-solid:bolt-lightning"
                  className="h-5 w-5 mr-2"
                />
                <h6>Next-Gen Performance</h6>
              </div>
              <p>
                Leverage the power of our ultra-low latency, SSD-accelerated
                servers. Experience scalability and high availability like never
                before!
              </p>
            </div>
          </Card>
          <Card className="p-5">
            <div className="grid gap-3">
              <div className="flex items-center text-primary font-medium">
                <Icon icon="fa6-solid:shield-heart" className="h-5 w-5 mr-2" />
                <h6>100% Money-Back Guarantee</h6>
              </div>
              <p>
                Your satisfaction is our mission. That's why we offer a
                no-questions-asked money-back guarantee.
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
