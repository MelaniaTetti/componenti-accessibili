import Button from "./components/Button";
import SkipLink from "./components/SkipLink";
import SearchBar from "./components/SearchBar";
import DropdownMenu from "./components/DropdownMenu";
import ArticleCard from "./components/ArticleCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const article = {
  category: "Accessibility",
  title: "Designing interfaces that work beyond aesthetics",
  excerpt: "A simple example of how structure and clarity improve usability.",
  date: "30 Apr 2026",
  readTime: "4 min read",
};

export default function App() {
  return (
    <>
      <SkipLink />
      <Navbar />

      <main id="main-content" className="p-10 flex flex-col gap-8">
        <div className="flex gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>

        <SearchBar />

        <DropdownMenu />

        <ArticleCard article={article} />
      </main>

      <Footer />
    </>
  );
}