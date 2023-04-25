"use client"

import { Fragment, useState } from "react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Mail } from "lucide-react"

import Map from "@/components/map"
import Accordion from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Dropdown from "@/components/ui/dropdown"
import { Separator } from "@/components/ui/separator"
import SlideOver from "@/components/ui/slide-over"
import Table from "@/components/ui/table"
import Tabs from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const faqs = [
  {
    question: "What's the capital of Australia?",
    answer:
      "The capital of Australia is Canberra. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the tallest mountain in the world?",
    answer:
      "Mount Everest is the tallest mountain in the world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the largest animal in the world?",
    answer:
      "The blue whale is the largest animal in the world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the largest country in the world by land area?",
    answer:
      "Russia is the largest country in the world by land area. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Michael Nguyen",
    title: "Back-end Developer",
    email: "michael.nguyen@example.com",
    role: "Member",
  },
  {
    name: "Sarah Park",
    title: "UX Designer",
    email: "sarah.park@example.com",
    role: "Member",
  },
  {
    name: "Jonathan Lee",
    title: "Product Manager",
    email: "jonathan.lee@example.com",
    role: "Manager",
  },
  {
    name: "Julia Patel",
    title: "Marketing Specialist",
    email: "julia.patel@example.com",
    role: "Member",
  },
  {
    name: "Erica Davis",
    title: "Graphic Designer",
    email: "erica.davis@example.com",
    role: "Member",
  },
  {
    name: "David Lee",
    title: "QA Engineer",
    email: "david.lee@example.com",
    role: "Member",
  },
  {
    name: "Anna Rodriguez",
    title: "Project Manager",
    email: "anna.rodriguez@example.com",
    role: "Manager",
  },
  {
    name: "Aaron Kim",
    title: "Full-stack Developer",
    email: "aaron.kim@example.com",
    role: "Member",
  },
]

function ComponentsPage() {
  const { toast } = useToast()

  const [open, setOpen] = useState(false)

  return (
    <div className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Components
        </h1>
        <p className=" text-lg text-accent-700 sm:text-xl">
          Accessible and customizable components.
        </p>
      </section>

      <Separator className="my-4 " />

      <section className="">
        <div className="body">
          <h2>Buttons</h2>
        </div>
        <div className="mt-10 flex flex-col gap-4 lg:flex-row">
          <Button className="max-w-fit">Button</Button>
          <Button className="max-w-fit" variant="secondary">
            Secondary
          </Button>
          <Button className="max-w-fit">
            <Mail className="mr-2 h-4 w-4" /> Button with Icon
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
        </div>
      </section>

      <section className=" mt-10">
        <div className="body">
          <h2>Accordion</h2>
        </div>
        <Accordion
          className="mt-10 max-w-4xl"
          title="Frequently Asked Questions"
          faqs={faqs}
        />
      </section>
      <section className=" mt-10">
        <div className="body">
          <h2>Table</h2>
        </div>
        <Table className="mt-10" people={people} />
      </section>

      <section className="mt-10 space-y-10">
        <div className="body">
          <h2>Tabs</h2>
        </div>
        <Tabs />
      </section>
      <section className="mt-10 space-y-10">
        <div className="body">
          <h2>Dropdown</h2>
        </div>
        <Dropdown />
      </section>
      <section className="mt-10 space-y-10">
        <div className="body">
          <h2>Map</h2>
        </div>
        <Map />
      </section>
      <section className="mt-10">
        <div className="body">
          <h2>Toast</h2>
        </div>
        <Button
          className="mt-10"
          variant="outline"
          onClick={() => {
            toast({
              title: "Your toast title",
              description: "Your toast description",
              duration: 5000,
            })
          }}
        >
          Show Toast
        </Button>
      </section>

      <section className="mt-10">
        <div className="body">
          <h2>Slide Over</h2>
        </div>
        <Button
          className="mt-10"
          variant="outline"
          onClick={() => setOpen(true)}
        >
          Show Slide Over
        </Button>
        <SlideOver open={open} setOpen={setOpen} onClose={() => setOpen(false)} />
      </section>
    </div>
  )
}

export default ComponentsPage
