import { useSearchParams } from "react-router-dom";
import { categories } from "../data/products";

export default function CategoryFilter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get("category") || ""
  // const onSelect
  return (
    <div className="filter-row">
      {categories.map(cat => (
        <button
          key={cat.id || 'all'}
          type="button"
          className={'filter-chip' + (cat.id === activeCategory ? ' active' : '')}
          onClick={() => setSearchParams(cat.id ? {category: cat.id} : "")}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
