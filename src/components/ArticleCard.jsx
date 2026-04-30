export default function ArticleCard({ article }) {
  return (
    <article className="rounded-3xl border border-slate-200 p-6 bg-white flex flex-col gap-4">
      
      <div className="flex justify-between text-xs text-slate-500">
        <span>{article.category}</span>
        <time>{article.date}</time>
      </div>

      <h3 className="text-lg font-bold text-slate-950">
        <a
          href="#"
          className="focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 rounded"
        >
          {article.title}
        </a>
      </h3>

      <p className="text-sm text-slate-600">
        {article.excerpt}
      </p>

      <div className="flex justify-between items-center text-sm">
        <span className="text-slate-500">{article.readTime}</span>

        <a
          href="#"
          className="font-semibold text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 rounded"
        >
          Read →
        </a>
      </div>

    </article>
  );
}