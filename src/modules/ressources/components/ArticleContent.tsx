import type { Article } from "../data/articlesData";

interface Props {
  article: Article;
}

export default function ArticleContent({ article }: Props) {
  return (
    <div className="space-y-8">
      {article.content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="pt-4 text-2xl font-bold text-[#071A3D] sm:text-3xl"
              >
                {block.text}
              </h2>
            );

          case "list":
            return (
              <div key={index}>
                <p className="mb-4 leading-8 text-slate-600">
                  {block.text}
                </p>

                <ul className="space-y-3">
                  {block.items?.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 leading-7 text-slate-600"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="rounded-r-2xl border-l-4 border-blue-500 bg-blue-50 px-6 py-7 text-lg font-medium italic leading-8 text-[#071A3D]"
              >
                « {block.text} »
              </blockquote>
            );

          default:
            return (
              <p
                key={index}
                className="text-base leading-8 text-slate-600"
              >
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}