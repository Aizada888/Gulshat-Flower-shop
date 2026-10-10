import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { CategoryType, OccasionType } from '../types/flower';
import { useLanguage } from '../i18n/LanguageContext';

interface Props {
  selectedCategory: CategoryType;
  onSelectCategory: (cat: CategoryType) => void;
  selectedOccasion: OccasionType;
  onSelectOccasion: (occ: OccasionType) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  sortBy: 'popular' | 'price_asc' | 'price_desc';
  onSortChange: (sort: 'popular' | 'price_asc' | 'price_desc') => void;
  totalFound: number;
}

export const CatalogFilters: React.FC<Props> = ({
  selectedCategory,
  onSelectCategory,
  selectedOccasion,
  onSelectOccasion,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalFound,
}) => {
  const { t } = useLanguage();

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: t.filters.allFlowers },
    { id: 'peonies', label: t.filters.peonies },
    { id: 'roses', label: t.filters.frenchRoses },
    { id: 'hydrangeas', label: t.filters.hydrangeas },
    { id: 'boxes', label: t.filters.hatBoxes },
    { id: 'mix', label: t.filters.mixes },
    { id: 'mono', label: t.filters.mono },
  ];

  const occasions: { id: OccasionType; label: string }[] = [
    { id: 'all', label: t.filters.occAll },
    { id: 'birthday', label: t.filters.occBirthday },
    { id: 'love', label: t.filters.occLove },
    { id: 'anniversary', label: t.filters.occAnniversary },
    { id: 'march8', label: t.filters.occMarch8 },
    { id: 'gratitude', label: t.filters.occGratitude },
    { id: 'wedding', label: t.filters.occWedding },
  ];

  return (
    <div className="space-y-6 pt-4 pb-8">
      {/* Search & Sort Row */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            id="catalog-search"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.filters.searchPlaceholder}
            className="w-full pl-10 pr-9 py-2.5 bg-white border border-stone-300/80 rounded-xl text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#2C3E2D]/20 focus:border-[#2C3E2D] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort and Count */}
        <div className="flex items-center gap-3 justify-between md:justify-end">
          <span className="text-xs text-stone-500 tabular-nums">
            {t.filters.found} <strong className="text-stone-800 font-medium">{totalFound}</strong>
          </span>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400 hidden sm:inline" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as any)}
              className="bg-white border border-stone-300/80 rounded-xl px-3 py-2 text-xs font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-[#2C3E2D]/20 focus:border-[#2C3E2D] cursor-pointer"
            >
              <option value="popular">{t.filters.sortPopular}</option>
              <option value="price_asc">{t.filters.sortPriceAsc}</option>
              <option value="price_desc">{t.filters.sortPriceDesc}</option>
            </select>
          </div>
        </div>

      </div>

      {/* Category Segmented Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-full whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#2C3E2D] text-white shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-900'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Occasions Micro Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto text-xs pb-1">
        <span className="text-stone-400 font-medium whitespace-nowrap">{t.filters.occasionLabel}</span>
        {occasions.map((occ) => {
          const isActive = selectedOccasion === occ.id;
          return (
            <button
              key={occ.id}
              onClick={() => onSelectOccasion(occ.id)}
              className={`px-3 py-1 rounded-md whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-[#EFE8E1] text-stone-900 font-semibold'
                  : 'text-stone-500 hover:text-stone-800 hover:bg-stone-100'
              }`}
            >
              {occ.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
