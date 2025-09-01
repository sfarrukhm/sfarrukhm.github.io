import React, { useState } from "react";
import blogs from "../data/blogs";

export default function Blog({ isVisible }) {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section
      id="blog"
      className={`py-20 px-6 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Blog</h2>

      {!selectedBlog ? (
        <div className="grid gap-6 md:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
              onClick={() => setSelectedBlog(blog)}
            >
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
              <p className="text-gray-700 dark:text-gray-300">
                {blog.summary}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <button
            onClick={() => setSelectedBlog(null)}
            className="mb-4 text-primary-600 dark:text-primary-400 hover:underline"
          >
            ← Back to Blogs
          </button>
          <h3 className="text-2xl font-bold mb-2">{selectedBlog.title}</h3>
          <p className="text-sm text-gray-500 mb-6">{selectedBlog.date}</p>
          <div className="prose dark:prose-invert">
            {selectedBlog.content}
          </div>
        </div>
      )}
    </section>
  );
}
