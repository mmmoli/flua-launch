export const slugify = (text: string) => {
  const slug = text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

  // Generate a random string to append to the slug
  const randomString = Math.random().toString(36).substring(2, 7);

  // Return the slug with the appended random string
  return `${slug}-${randomString}`;
};
