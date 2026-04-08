# Health Means Wealth — Website

## Adding a new update post

1. Open the folder src/content/updates/
2. Copy any existing .md file and rename it (e.g. summer-bbq-recap-2025.md)
3. Edit the top section between the --- lines:
   - title: the headline
   - date: today's date in format 2025-08-10
   - tag: one of: Event recap, News, Growing season, Community
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
The gallery will show them automatically on the next push.
Use .jpg or .webp format. Keep files under 1MB each.

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
