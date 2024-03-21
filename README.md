# Blogify

Blogify is a simple blog website built with Next.js. It allows users to view a list of blog posts , read individual posts in detail , search for a particular blog post also and a contact form to send message to the Website Owner.

## Project Structure

The project follows a standard Next.js structure:

- `app/`: This directory contains all the page components. Each file corresponds to a route on the website.
- `components/`: This directory contains reusable React components that are used across different pages.
- `public/`: This directory contains static files like images.
- `lib/`: This directory contains the reuslable functions and instances.
- `zodSchemas/`: This directory contains zod Schemas/Types used for Contact Form.
- `actions/`: This directory contains function to call backend api and sending response.

## Development Choices

The project uses Next.js 14.1.4 version for its support for server-side rendering, static site generation and incremental site regeneration which is great for SEO.

The blog posts are fetched from a JSON placeholder API and displayed on the website. The website also includes dynamic routing to display individual blog posts.

## Running the Application Locally

Follow these steps to run the application locally:

1. Clone the repository:

```bash
git clone https://github.com/bipinemp/intern_blog_website.git
```

2. Navigate to the project directory:

```bash
cd intern_blog_website
```

3. Install all the required dependencies:

```bash
npm install
```

4. Make a .env file in the root of the project and put these values:

```bash
BACKEND_BASE_URL=Your_Backend_URL
NEXT_PUBLIC_BACKEND_BASE_URL=Your_Backend_URL
```

5. Run the Dev Server:

```bash
npm run dev
```

6. Go to the [http://localhost:3000/](http://localhost:3000/) in the Browser
