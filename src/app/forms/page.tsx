"use client"

import React from "react"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as z from "zod"

// import { ValidationError, useForm } from "@formspree/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

type FormValues = {
  email: string
  message: string
}

const schema = z.object({
  email: z.string().email(),
  message: z.string().nonempty({ message: "Message is required" }),
})

function FormsPage() {
  const { toast } = useToast()
  // const [handleSubmit] = useFormspree("xqkoywwd")

  const {
    register,
    handleSubmit: handleFormSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const watchAllFields = watch()

  const onSubmit = async (data: any) => {
    try {
      // Add a delay of 2 seconds before submitting the form
      await new Promise((resolve) => setTimeout(resolve, 2500))

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      const responseData = await response.json()
      console.log(responseData)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      toast({
        title: "Form submitted successfully!",
        description: "Thank you for your submission.",
        duration: 5000,
      })
      reset()
      // setTimeout(function () {
      //   location.reload() // reload page after delay
      // }, 5000) // delay in milliseconds (2 seconds in this example)
    }
  }, [isSubmitSuccessful, reset, toast])

  return (
    <div className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="flex  flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Forms
        </h1>
        <p className="text-lg text-accent-700 sm:text-xl">
          Styles for headings, paragraphs, lists, etc. Update/optimize font
          familes by referencing this{" "}
          <a
            target="_blank"
            className="underline underline-offset-2 hover:text-accent-500"
            href="https://nextjs.org/docs/basic-features/font-optimization"
          >
            link
          </a>
          .
        </p>
        <small className="italic text-gray-500">
          * To utlize these typography styles each element must be a child of
          the body class. This can be edited in the global.css file within the
          styles folder.
        </small>
        <div className="flex gap-4 ">
          <a
            className="mt-4 inline-flex h-10 cursor-pointer items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2   "
            href="#section1"
          >
            Anchor Tag to H3
          </a>
          <a
            className="mt-4 inline-flex h-10 cursor-pointer items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2   "
            href="#section2"
          >
            Anchor Tag to H6
          </a>
        </div>
      </section>
      <Separator className="my-4 " />
      <section className="">
        <div className="body">
          <h2>Formspree</h2>
        </div>
      </section>

      <form
        className="max-w-xs space-y-4"
        onSubmit={handleFormSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}

        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="email">Email*</Label>
          <Input id="email" {...register("email")} type="email" name="email" />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email?.message}</p>
          )}
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="message">Your Message*</Label>
          <Textarea
            {...register("message", { required: true })}
            id="message"
            name="message"
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message?.message}</p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
              <span>Submitting</span>
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
      <pre>{JSON.stringify(watchAllFields, null, 4)}</pre>
    </div>
  )
}

export default FormsPage
