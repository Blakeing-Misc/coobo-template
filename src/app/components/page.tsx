"use client"

import { useToast } from "@/hooks/use-toast"
import { Loader2, Mail } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function ComponentsPage() {
  const { toast } = useToast()
  return (
    <div className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Components
        </h1>
        <p className="max-w-[700px] text-lg text-gray-700 sm:text-xl">
          Accessible and customizable components that you can copy and paste
          into your site.
        </p>
      </section>

      <section className="mt-10">
        <div className="coobo">
          <h2>Buttons</h2>
        </div>
        <div className="mt-10 flex flex-col gap-4 lg:flex-row">
          <Button className="max-w-fit">
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
          <Button className="max-w-fit" variant="link">
            Link
          </Button>
          <Button className="max-w-fit" disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
          <Button className="max-w-fit" variant="ghost">
            Ghost
          </Button>
          <Button className="max-w-fit" variant="subtle">
            Subtle
          </Button>
          <Button className="max-w-fit" variant="outline">
            Outline
          </Button>
          <Button className="max-w-fit" variant="destructive">
            Destructive
          </Button>
          <Button className="max-w-fit">Button</Button>
        </div>
      </section>

      <section className=" mt-10">
        <div className="coobo">
          <h2>Accordion</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 w-[450px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components' aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="mt-10">
        <div className="coobo">
          <h2>Form Elements</h2>
        </div>
        <div className="mt-10 grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email-2">Email</Label>
          <Input type="email" id="email-2" placeholder="Email" />
          <p className="text-sm text-slate-500">Enter your email address.</p>
        </div>
      </section>
      <section className="mt-10">
        <div className="coobo">
          <h2>Toast</h2>
        </div>
        <Button
          className="mt-10"
          variant="outline"
          onClick={() => {
            toast({
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
              duration: 5000,
            })
          }}
        >
          Show Toast
        </Button>
      </section>
    </div>
  )
}

export default ComponentsPage
