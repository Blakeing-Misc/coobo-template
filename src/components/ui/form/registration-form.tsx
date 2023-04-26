"use client"

import { FC } from "react"
import { useForm } from "react-hook-form"

import { FormInput } from "@/components/ui/form/form-input"
import { FormTextarea } from "@/components/ui/form/form-textarea"

export type RegistrationFormFields = {
  firstName: string
  lastName: string
  email: string
  bio?: string
}

export const emailPattern = {
  value: new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$", "ig"),
  message: "Enter a valid email address.",
}

export const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormFields>()

  const watchAllFields = watch()

  const onSubmit = handleSubmit((data) => {
    console.log("submitting...", data)
  })

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormInput<RegistrationFormFields>
          id="firstName"
          type="text"
          name="firstName"
          label="First Name"
          placeholder="First Name"
          className="mb-2"
          register={register}
          rules={{ required: "You must enter your first name." }}
          errors={errors}
        />

        <FormInput<RegistrationFormFields>
          id="lastName"
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          className="mb-2"
          register={register}
          rules={{ required: "You must enter your last name." }}
          errors={errors}
        />

        <FormInput<RegistrationFormFields>
          id="email"
          type="email"
          name="email"
          label="Email Address"
          placeholder="Email Address"
          className="mb-2"
          register={register}
          rules={{
            required: "You must enter your email address.",
            pattern: emailPattern,
          }}
          errors={errors}
        />

        <FormTextarea<RegistrationFormFields>
          id="bio"
          name="bio"
          label="Bio"
          placeholder="Enter your bio"
          rows={5}
          rules={{ required: "You must enter your bio." }}
          register={register}
          errors={errors}
        />

        <button
          className="mt-4 rounded bg-blue-600 px-4 py-2 font-semibold text-white shadow-md duration-200 hover:-translate-y-1 hover:bg-blue-500 focus:translate-y-1 focus:outline-none disabled:opacity-50"
          type="submit"
        >
          Submit
        </button>
      </form>
      <pre className="mt-10">{JSON.stringify(watchAllFields, null, 4)}</pre>
    </>
  )
}
