import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
// import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    {/* <Layout>*/}
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-80 bg-gradient-primary flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us today.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
                <p className="text-muted-foreground text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input placeholder="How can we help you?" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <Textarea 
                        placeholder="Tell us about your inquiry..." 
                        className="min-h-32"
                      />
                    </div>

                    <Button className="w-full btn-hero">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
                <p className="text-muted-foreground text-lg">
                  Visit our store, call us, or send an email. We're here to help!
                </p>
              </div>

              <div className="grid gap-6">
                {/* Store Location */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Visit Our Store</h3>
                        <p className="text-muted-foreground">
                          123 Fashion Avenue<br />
                          New York, NY 10001<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                        <p className="text-muted-foreground">
                          +1 (555) 123-4567<br />
                          Monday - Friday: 9AM - 8PM<br />
                          Saturday - Sunday: 10AM - 6PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                        <p className="text-muted-foreground">
                          support@fashionstore.com<br />
                          info@fashionstore.com<br />
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Hours */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Store Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                          <p>Saturday: 10:00 AM - 6:00 PM</p>
                          <p>Sunday: 12:00 PM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about our products and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">What is your return policy?</h3>
                  <p className="text-muted-foreground">
                    We offer a 30-day return policy for all items in original condition with tags attached. 
                    Returns are free for online orders.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">How long does shipping take?</h3>
                  <p className="text-muted-foreground">
                    Standard shipping takes 3-5 business days. Express shipping (1-2 days) and 
                    overnight shipping are also available.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Do you offer international shipping?</h3>
                  <p className="text-muted-foreground">
                    Yes, we ship worldwide! International shipping rates and times vary by location. 
                    Check our shipping page for details.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">How can I track my order?</h3>
                  <p className="text-muted-foreground">
                    Once your order ships, you'll receive a tracking number via email. 
                    You can also track orders in your account dashboard.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
  {/* </Layout>*/}
  );
};

export default Contact;
