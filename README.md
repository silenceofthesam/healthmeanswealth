# Health Means Wealth — Website

## Adding a new update post

1. Open the folder src/content/updates/
2. Copy any existing .md file and rename it (e.g. summer-bbq-recap-2025.md)
3. Edit the top section between the --- lines:
   - title: the headline
   - date: today's date in format 2025-08-10
   - tag: one of: Event recap, News, Growing season, Community
   - image (optional): a photo path, e.g. /images/gallery/my-photo.jpg
   - image_alt (optional): a short description of the photo for screen readers
4. Write the update text below the second ---
5. Save the file and run: git add . then git commit -m "New update" then git push

## Adding an upcoming event

1. Open src/content/events/
2. Copy an existing .md file and rename it
3. Fill in title, date (2025-09-20), display_date (what visitors see, e.g. Sat 20 Sep 2025), and set recurring to false unless it repeats weekly
4. Write a short description below the ---
5. Save and push as above

## Adding photos

Drag photos into public/images/gallery/
The gallery carousel will show them automatically on the next push.
Use .jpg or .webp format. Keep files under 1MB each.

Captions, order and descriptions live in src/data/gallery.json — one line per photo:

  { "file": "my-photo.jpg", "caption": "What visitors see under the photo", "alt": "Description for screen readers" }

Photos are shown in the order listed. A photo that isn't listed still appears
(at the end, without a caption).

## Founders' photo

Save the photo as public/images/founders.jpg (or .png / .webp). It appears
next to the "What we do" text automatically. Portrait (taller than wide) works best.

## Publishing any change

Open a terminal in the project folder and run these three commands:

git add .
git commit -m "Update"
git push

The site will be live within about 60 seconds.

## Local preview

To see the site on your computer before publishing:

npm run dev

Then open http://localhost:4321 in a browser.
