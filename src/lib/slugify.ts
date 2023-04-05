// slugify the title

export function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
}
