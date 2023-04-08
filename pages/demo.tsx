/* eslint-disable jsx-a11y/role-supports-aria-props */
import * as React from "react"
import { useMemo } from "react"
import { useForm } from "react-hook-form"

export default function Demo() {
  const fruits = useMemo(
    () => [
      { label: "Apple", value: "Apple" },
      { label: "Banana", value: "Banana" },
      { label: "Orange", value: "Orange" },
    ],
    []
  )

  const {
    register,
    handleSubmit,
    control,
    watch,
    submissionId,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      message: "",
      location: [],
      fruits: [],
      "does-this-work": "",
    },
  })

  const watchAllFields = watch()

  const onSubmit = (data) => alert(JSON.stringify(data))

  if (submissionId) {
    return <p>Thank you! Submission Id: {submissionId}</p>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Test</h1>

      <div>
        <label>
          <span>Email</span>
          <input {...register("email")} type="email" />
        </label>
      </div>

      <div>
        <label>
          <span>Message</span>
          <textarea {...register("message")} type="textarea" />
        </label>
      </div>

      <div>
        <label>
          <span>Location</span>
          <select {...register("location")} multiple>
            <option value="United States">United States</option>
            <option value="Mexico">Mexico</option>
            <option value="Canada">Canada</option>
          </select>
        </label>
      </div>

      <div>
        <p>Fruits</p>
        {fruits.map(({ label, value }, index) => {
          return (
            <label key={value + index}>
              <span>{label}</span>
              <input
                {...register("fruits")}
                aria-invalid={errors["fruits"] ? "true" : "false"}
                value={value}
                type="checkbox"
              />
            </label>
          )
        })}
        {errors["fruits"] && <p role="alert">{errors["fruits"]?.message}</p>}
      </div>

      <div>
        <p>Does this work?</p>
        {[
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
        ].map(({ label, value }, index) => {
          return (
            <label key={value + index}>
              <span>{label}</span>
              <input
                {...register("does-this-work")}
                aria-invalid={errors["does-this-work"] ? "true" : "false"}
                value={value}
                type="radio"
              />
            </label>
          )
        })}
        {errors["does-this-work"] && (
          <p role="alert">{errors["does-this-work"]?.message}</p>
        )}
      </div>

      <button disabled={isSubmitting}>Submit</button>
      <pre className="mt-10">{JSON.stringify(watchAllFields, null, 4)}</pre>
    </form>
  )
}
