"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const CONTACT_EMAIL = "hennyfeliz34@gmail.com"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
})

const DIRECT = [
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: "Phone", value: "+1 (849) 455-9629", href: "tel:+18494559629" },
  {
    label: "LinkedIn",
    value: "henny-m-feliz-ferreras",
    href: "https://www.linkedin.com/in/henny-m-feliz-ferreras-392a61202",
  },
  {
    label: "GitHub",
    value: "@hennyfeliz",
    href: "https://github.com/hennyfeliz",
  },
  { label: "Location", value: "Santo Domingo, DR", href: undefined },
] as const

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: integrate with Resend/Formspree. Mailto fallback for now.
    const subject = encodeURIComponent(`Portfolio contact from ${values.name}`)
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} <${values.email}>`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact"
      className="relative h-screen snap-center flex items-center justify-center overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-6 w-full max-w-6xl">
        <div className="grid gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[hsl(var(--accent-red))]">
              Let&apos;s talk
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mb-8 text-zinc-300">
              Open to remote software development opportunities. Visa
              sponsorship is welcome but not required. Let&apos;s build
              something together.
            </p>

            <ul className="space-y-3">
              {DIRECT.map((d) => (
                <li
                  key={d.label}
                  className="flex items-baseline gap-4 border-b border-white/5 pb-3"
                >
                  <span className="w-20 shrink-0 text-[10px] uppercase tracking-widest text-zinc-500">
                    {d.label}
                  </span>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        d.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-white transition-colors hover:text-[hsl(var(--accent-red))]"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <span className="text-sm text-white">{d.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* <motion.div */}
          {/*   className="glass w-full max-w-xl p-6 sm:p-8" */}
          {/*   initial={{ opacity: 0, y: 30 }} */}
          {/*   whileInView={{ opacity: 1, y: 0 }} */}
          {/*   viewport={{ once: false, amount: 0.3 }} */}
          {/*   transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }} */}
          {/* > */}
          {/*   <Form {...form}> */}
          {/*     <form */}
          {/*       onSubmit={form.handleSubmit(onSubmit)} */}
          {/*       className="space-y-5" */}
          {/*     > */}
          {/*       <FormField */}
          {/*         control={form.control} */}
          {/*         name="name" */}
          {/*         render={({ field }) => ( */}
          {/*           <FormItem> */}
          {/*             <FormLabel>Name</FormLabel> */}
          {/*             <FormControl> */}
          {/*               <Input */}
          {/*                 placeholder="Your name" */}
          {/*                 className="rounded-none border border-white/15 bg-black/40 focus-visible:ring-[hsl(var(--accent-red))]" */}
          {/*                 {...field} */}
          {/*               /> */}
          {/*             </FormControl> */}
          {/*             <FormMessage /> */}
          {/*           </FormItem> */}
          {/*         )} */}
          {/*       /> */}
          {/*       <FormField */}
          {/*         control={form.control} */}
          {/*         name="email" */}
          {/*         render={({ field }) => ( */}
          {/*           <FormItem> */}
          {/*             <FormLabel>Email</FormLabel> */}
          {/*             <FormControl> */}
          {/*               <Input */}
          {/*                 placeholder="your@email.com" */}
          {/*                 className="rounded-none border border-white/15 bg-black/40 focus-visible:ring-[hsl(var(--accent-red))]" */}
          {/*                 {...field} */}
          {/*               /> */}
          {/*             </FormControl> */}
          {/*             <FormMessage /> */}
          {/*           </FormItem> */}
          {/*         )} */}
          {/*       /> */}
          {/*       <FormField */}
          {/*         control={form.control} */}
          {/*         name="message" */}
          {/*         render={({ field }) => ( */}
          {/*           <FormItem> */}
          {/*             <FormLabel>Message</FormLabel> */}
          {/*             <FormControl> */}
          {/*               <Textarea */}
          {/*                 placeholder="Tell me about your project..." */}
          {/*                 className="min-h-[120px] rounded-none border border-white/15 bg-black/40 focus-visible:ring-[hsl(var(--accent-red))]" */}
          {/*                 {...field} */}
          {/*               /> */}
          {/*             </FormControl> */}
          {/*             <FormMessage /> */}
          {/*           </FormItem> */}
          {/*         )} */}
          {/*       /> */}
          {/*       <Button */}
          {/*         type="submit" */}
          {/*         className="w-full rounded-none bg-[hsl(var(--accent-red))] uppercase tracking-widest text-white hover:bg-[hsl(var(--accent-red)/0.85)]" */}
          {/*       > */}
          {/*         Send Message */}
          {/*       </Button> */}
          {/*     </form> */}
          {/*   </Form> */}
          {/* </motion.div> */}
        </div>
      </div>
    </section>
  )
}
