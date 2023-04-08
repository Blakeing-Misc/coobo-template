"use client"

import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Mail, Settings2 } from "lucide-react"

import Accordion from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import Table from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
          <Button className="max-w-fit">Button</Button>
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
        <Table className="mt-10  " people={people} />
      </section>
      <section className="mt-10 space-y-10">
        <div className="body">
          <h2>Popover</h2>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-10 rounded-full p-0">
              <Settings2 className="h-4 w-4" />
              <span className="sr-only">Open popover</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input
                    id="maxWidth"
                    defaultValue="300px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <Input
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </section>

      <section className="mt-10 space-y-10">
        <div className="body">
          <h2>Tabs</h2>
        </div>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Make changes to your account here. Click save when you&apos;re
              done.
            </p>
          </TabsContent>
          <TabsContent value="password">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Change your password here. After saving, you&apos;ll be logged
              out.
            </p>
          </TabsContent>
        </Tabs>
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
    </div>
  )
}

export default ComponentsPage
