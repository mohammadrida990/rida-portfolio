"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+961) 71 123 456",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mhmd_rida_990@hotmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lebanon, Beirut",
  },
  {
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    description: "https://wa.me/71163995",
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
    description: "https://www.linkedin.com/in/mohammad-rida-06399163/",
  },
];
const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form
              className="flex flex-col gap-6 bg-[#27272c] p-10 rounded-xl"
              action="https://formsubmit.co/mhmd_rida_990@hotmail.com"
              method="POST"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>

              <p className="text-white/60">Contact me</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstName"
                  name="firstName"
                  required
                  placeholder="First Name"
                />
                <Input
                  required
                  type="lastName"
                  name="lastName"
                  placeholder="Last Name"
                />
                <Input type="email" name="email" placeholder="Email" required />
                <Input type="phone" name="phone" placeholder="Phone" required />
              </div>

              <Select name="service" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Type your message here..."
                className="h-[200px]"
                name="message"
                required
              />

              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>

          <div className="order-1 xl:order-none flex flex-1 items-center xl:justify-start mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div
                    className="
                    w-[52px] h-[52px]  xl:w-[72px] xl:h-[72px] text-accent
                    bg-[#27272c] flex items-center justify-center rounded-md
                  "
                  >
                    <div className="text-[28px]">{item.icon}</div>
                  </div>

                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>

                    {["Whatsapp", "LinkedIn"].includes(item.title) ? (
                      <Link href={item.description} target="_blank">
                        {item.description}
                      </Link>
                    ) : (
                      <h3 className="text-xl">{item.description}</h3>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
