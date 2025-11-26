import Header from "components/Header";
import Footer from "components/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface LegalPageLayoutProps {
  content: string;
  title: string;
}

export default function LegalPageLayout({ content, title }: LegalPageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[rgba(255,247,220,1)]">
      <Header />
      <main className="flex-grow">
        <article className="container mx-auto px-4 py-12 sm:py-16 md:py-24 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl text-gray-900 font-bold mb-8 text-center">
            {title}
          </h1>

          <div className="prose prose-lg prose-gray max-w-none
                          prose-headings:text-gray-900
                          prose-h1:text-3xl prose-h1:sm:text-4xl prose-h1:font-bold prose-h1:mb-6
                          prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
                          prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                          prose-a:text-gray-900 prose-a:underline hover:prose-a:text-gray-700
                          prose-strong:text-gray-900 prose-strong:font-semibold
                          prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4
                          prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-4
                          prose-li:text-gray-700 prose-li:mb-2">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
