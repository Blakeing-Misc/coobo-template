"use client"

import { useToast } from "@/hooks/use-toast"
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

  // const tailwindColors = Object.keys(colors).slice(5)

  const tailwindColors = Object.keys(colors)
    .filter(
      (color) =>
        !["warmGray", "trueGray", "coolGray", "blueGray", "lightBlue"].includes(
          color
        )
    )
    .slice(5)

  // Create a copy function that copies a string to the clipboard
  const copyToClipboard = (str) => {
    const el = document.createElement("textarea")
    el.value = str
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  }

  const { toast } = useToast()

  return (
    <div className="container mx-auto grid items-center gap-6 pb-8 pt-6 md:py-10">
      <section className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Colors
        </h1>
        <p className="text-lg text-accent-700 sm:text-xl">
          Customizing the default color palette for your project. Edit these
          colors in the tailwind.config.js file.
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
                <div className=" flex flex-col" key={key}>
                  <button
                    onClick={() => {
                      try {
                        copyToClipboard(hexValue)
                        toast({
                          title: "Copied to clipboard",
                          description: `The color code ${hexValue} has been copied to your clipboard.`,
                          duration: 3000,
                        })
                      } catch (err) {
                        toast({
                          title: "Uh oh! Something went wrong.",
                          description: "There was a problem with your request.",
                          duration: 5000,
                        })
                      }
                    }}
                    className=" h-10 w-10 rounded  sm:w-full"
                    style={{ backgroundColor: hexValue }}
                  />
                  <p className="mt-1 text-sm text-accent-900">{key}</p>
                  <p className="text-xs lowercase text-accent-500">
                    {hexValue}
                  </p>
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
                <div className="flex flex-col " key={key}>
                  <button
                    onClick={() => {
                      try {
                        copyToClipboard(hexValue)
                        toast({
                          title: "Copied to clipboard",
                          description: `The color code ${hexValue} has been copied to your clipboard.`,
                          duration: 3000,
                        })
                      } catch (err) {
                        toast({
                          title: "Uh oh! Something went wrong.",
                          description: "There was a problem with your request.",
                          duration: 5000,
                        })
                      }
                    }}
                    className=" h-10 w-10 rounded  sm:w-full"
                    style={{ backgroundColor: hexValue }}
                  />
                  <p className="mt-1 text-sm text-accent-900">{key}</p>
                  <p className="text-xs lowercase text-accent-500">
                    {hexValue}
                  </p>
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
                <div className="flex flex-col " key={key}>
                  <button
                    onClick={() => {
                      try {
                        copyToClipboard(hexValue)
                        toast({
                          title: "Copied to clipboard",
                          description: `The color code ${hexValue} has been copied to your clipboard.`,
                          duration: 3000,
                        })
                      } catch (err) {
                        toast({
                          title: "Uh oh! Something went wrong.",
                          description: "There was a problem with your request.",
                          duration: 5000,
                        })
                      }
                    }}
                    className=" h-10 w-10 rounded  sm:w-full"
                    style={{ backgroundColor: hexValue }}
                  />
                  <p className="mt-1 text-sm text-accent-900">{key}</p>
                  <p className="text-xs text-accent-500">{hexValue}</p>
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
