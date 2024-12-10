const posts = [
  {
    id: 1,
    title: "Being in Alignment with Your Interests (Part 3)",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Nov 16, 2024",
    datetime: "2020-03-16",
    category: { title: "Mentor Wisdom", href: "#" },
    author: {
      name: "Herb Hancock",
      role: "Mentor",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "My Challenges, and Victories as A New Apprentice",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Oct 25, 2024",
    datetime: "2020-03-16",
    category: { title: "Apprentice Stories", href: "#" },
    author: {
      name: "Herb Hancock",
      role: "Mentor",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Skill, or Passion, or Both?",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Sep 5, 2024",
    datetime: "2020-03-16",
    category: { title: "Mentor Wisdom", href: "#" },
    author: {
      name: "Yebba Aimes",
      role: "Mentor",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1571170733941-e17a2a00083b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHwy",
    },
  },
  {
    id: 4,
    title: "Ways to View Your Holland Code Result",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Aug, 2024",
    datetime: "2020-03-16",
    category: { title: "Mentor Wisdom", href: "#" },
    author: {
      name: "Mercy Mandle",
      role: "Mentor",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww",
    },
  },

  {
    id: 5,
    title: "Being in Alignment with you interests (Part 2)",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Aug, 2024",
    datetime: "2020-03-16",
    category: { title: "Mentor Wisdom", href: "#" },
    author: {
      name: "Peter Schlack",
      role: "Apprentice",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1615105113716-63952cd0cba8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDI%3D",
    },
  },

  {
    id: 6,
    title: "Being in Alignment with you interests (Part 1)",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Aug, 2024",
    datetime: "2020-03-16",
    category: { title: "Mentor Wisdom", href: "#" },
    author: {
      name: "Herb Hancock",
      role: "Mentor",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function BlogSection() {
  return (
    <div className="bg-gray-50 py-24 mb-6 rounded-xl border bg-card text-card-foreground shadow sm:py-32 container mx-auto">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Skill-Builder Perspectives
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Helpful hints for your apprenticeship journey.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-rose-400 px-3 py-1.5 font-medium text-gray-800 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
