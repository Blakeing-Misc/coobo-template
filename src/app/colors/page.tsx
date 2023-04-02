"use client"

import { theme } from "tailwind.config.js"
import * as colors from "tailwindcss/colors"

import { Separator } from "@/components/ui/separator"

function ColorsPage() {
  const themeColors = theme.extend.colors

  const brandColors = Object.keys(themeColors).filter((name) =>
    name.startsWith("brand")
  )
  const accentColors = Object.keys(themeColors).filter((name) =>
    name.startsWith("accent")
  )

  const tailwindColors = Object.keys(colors).slice(5)

  // Create a copy function that copies a string to the clipboard
  // const copyToClipboard = (str) => {
  //   const el = document.createElement("textarea")
  //   el.value = str
  //   document.body.appendChild(el)
  //   el.select()
  //   document.execCommand("copy")
  //   document.body.removeChild(el)
  // }

  return (
    <div className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Colors
        </h1>
        <p className="text-lg text-accent-700 sm:text-xl">
          Customizing the default color palette for your project.
        </p>
      </section>
      <Separator className="my-4 " />

      <section>
        <div className="body">
          <h2>Brand Pallete</h2>
        </div>
        <div className="mx-auto mt-3 grid grid-cols-3 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
          {brandColors.map((colorName) => {
            // Get the shade object for the current color
            const shades = themeColors[colorName]

            // Generate a JSX element for each shade of the current color
            return Object.keys(shades).map((shadeName) => {
              // Get the hex value for the current shade
              const hexValue = shades[shadeName]

              // Generate a unique key for this JSX element
              const key = `${colorName}-${shadeName}`

              // Generate a JSX element for the current shade
              return (
                <div key={key}>
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: hexValue }}
                  />
                  <small className="text-accent-900">{key}</small>
                </div>
              )
            })
          })}
        </div>
      </section>

      <section className=" mt-10">
        <div className="body">
          <h2>Accent Pallete</h2>
        </div>
        <div className="mx-auto mt-3 grid grid-cols-3 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
          {accentColors.map((colorName) => {
            // Get the shade object for the current color
            const shades = themeColors[colorName]

            // Generate a JSX element for each shade of the current color
            return Object.keys(shades).map((shadeName) => {
              // Get the hex value for the current shade
              const hexValue = shades[shadeName]

              // Generate a unique key for this JSX element
              const key = `${colorName}-${shadeName}`

              // Generate a JSX element for the current shade
              return (
                <div key={key}>
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: hexValue }}
                  />
                  <small className="text-accent-900">{key}</small>
                </div>
              )
            })
          })}
        </div>
      </section>

      <section className=" mt-10">
        <div className="body">
          <h2>Tailwind Pallete</h2>
        </div>
        <div className="mx-auto mt-3 grid grid-cols-3 gap-x-2 gap-y-3 sm:mt-2 sm:grid-cols-11 2xl:mt-0">
          {/* Map over the color names and generate a JSX element for each color */}
          {tailwindColors.map((colorName) => {
            // Get the shade object for the current color
            const shades = colors[colorName]

            // Generate a JSX element for each shade of the current color
            return Object.keys(shades).map((shadeName) => {
              // Get the hex value for the current shade
              const hexValue = shades[shadeName]

              // Generate a unique key for this JSX element
              const key = `${colorName}-${shadeName}`

              // Generate a JSX element for the current shade
              return (
                <div key={key}>
                  <div
                    className="h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"
                    style={{ backgroundColor: hexValue }}
                  />
                  <small className="text-accent-900">{key}</small>
                </div>
              )
            })
          })}
        </div>
      </section>
    </div>
  )
}

export default ColorsPage
