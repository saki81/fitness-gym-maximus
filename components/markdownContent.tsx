import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface PostContentProps {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose prose-lg max-w-none mb-12">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h1 className="text-3xl font-bold mb-6">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold mb-4 mt-8">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-medium mb-3 mt-6">{children}</h3>,
          p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          code: ({ children }) => <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">{children}</code>,
          pre: ({ children }) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
