import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { StrengthIcon, WeaknessIcon, OpportunityIcon, ThreatIcon } from "./ServiceIcons";

interface SwotItem {
  id: string;
  text: string;
  category: 'strengths' | 'weaknesses' | 'opportunities' | 'threats';
}

// Sortable Entry Component
interface SortableSwotEntryProps {
  item: SwotItem;
  index: number;
  categoryTitle: string;
  onUpdate: (id: string, text: string) => void;
  onRemove: (id: string) => void;
}

function SortableSwotEntry({ item, index, categoryTitle, onUpdate, onRemove }: SortableSwotEntryProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-lg p-4 mb-4 space-y-4 border border-gray-800 hover:border-gray-700 transition-colors print:border-gray-300"
    >
      <div className="flex items-center justify-between gap-3">
        {/* Drag Handle */}
        <button
          {...attributes}
          {...listeners}
          className="touch-none cursor-grab active:cursor-grabbing text-gray-500 hover:text-[#ff5c33] transition-colors p-1 print:hidden"
          title="Drag to reorder"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </button>

        {/* Entry Number */}
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {categoryTitle} {index + 1}
        </span>

        {/* Remove Button */}
        <button
          onClick={() => onRemove(item.id)}
          className="text-gray-500 hover:text-red-500 transition-colors text-sm print:hidden"
          title="Remove entry"
        >
          ✕ Remove
        </button>
      </div>

      {/* Description */}
      <div>
        <label className="block text-base font-body text-gray-200 mb-3 font-medium">
          Description
        </label>
        <textarea
          value={item.text}
          onChange={(e) => onUpdate(item.id, e.target.value)}
          placeholder={`Describe this ${categoryTitle.toLowerCase().slice(0, -1)}...`}
          className="w-full p-4 rounded-lg bg-[#0a0a0a] text-offWhite border border-gray-700 font-body text-base focus:border-[#ff5c33] focus:outline-none focus:ring-1 focus:ring-[#ff5c33] resize-none transition-colors print:border-gray-400 print:text-black print:bg-white"
          rows={3}
        />
      </div>
    </div>
  );
}

export default function SwotAnalysis() {
  const [swotItems, setSwotItems] = useState<SwotItem[]>([
    { id: '1', text: '', category: 'strengths' },
    { id: '2', text: '', category: 'weaknesses' },
    { id: '3', text: '', category: 'opportunities' },
    { id: '4', text: '', category: 'threats' },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const addItem = (category: SwotItem['category']) => {
    const newItem: SwotItem = {
      id: Date.now().toString(),
      text: '',
      category
    };
    setSwotItems(prev => [...prev, newItem]);
  };

  const updateItem = (id: string, text: string) => {
    setSwotItems(prev => prev.map(item => 
      item.id === id ? { ...item, text } : item
    ));
  };

  const removeItem = (id: string) => {
    setSwotItems(prev => prev.filter(item => item.id !== id));
  };

  const getItemsByCategory = (category: SwotItem['category']) => {
    return swotItems.filter(item => item.category === category);
  };

  const handleDragEnd = (event: DragEndEvent, category: SwotItem['category']) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setSwotItems((items) => {
        const categoryItems = items.filter(item => item.category === category);
        const otherItems = items.filter(item => item.category !== category);
        
        const oldIndex = categoryItems.findIndex(item => item.id === active.id);
        const newIndex = categoryItems.findIndex(item => item.id === over.id);
        
        const reorderedCategoryItems = arrayMove(categoryItems, oldIndex, newIndex);
        
        return [...otherItems, ...reorderedCategoryItems];
      });
    }
  };

  const categories = [
    { key: 'strengths' as const, title: 'Strengths', Icon: StrengthIcon, description: 'Internal positive attributes and advantages' },
    { key: 'weaknesses' as const, title: 'Weaknesses', Icon: WeaknessIcon, description: 'Internal negative factors to improve' },
    { key: 'opportunities' as const, title: 'Opportunities', Icon: OpportunityIcon, description: 'External positive trends and possibilities' },
    { key: 'threats' as const, title: 'Threats', Icon: ThreatIcon, description: 'External negative factors and risks' }
  ];

  return (
    <section className="print-section">
      <div className="mb-8">
        <h2 className="font-heading text-3xl font-bold text-[#ff5c33] mb-2"
            style={{
              textShadow: '0 0 40px rgba(255, 42, 95, 0.3), 0 0 80px rgba(255, 92, 51, 0.2)',
              fontFamily: 'Cinzel, serif'
            }}>
          SWOT Analysis
        </h2>
        <p className="font-body text-lg text-gray-200 leading-relaxed max-w-3xl"
           style={{
             textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
             fontFamily: 'Inter, sans-serif'
           }}>
          Identify your business's internal strengths and weaknesses, plus external opportunities and threats.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map(({ key, title, Icon, description }) => {
          const items = getItemsByCategory(key);
          
          return (
            <div key={key} className="swot-section" data-category={key}>
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-[#ff5c33] to-[#ff7a33] rounded-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold text-offWhite">
                    {title}
                  </h3>
                  <p className="font-body text-gray-300 text-base mt-2 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              {/* Drag and Drop Context for this category */}
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={(event) => handleDragEnd(event, key)}
              >
                <SortableContext
                  items={items.map(item => item.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <div className="space-y-0">
                    {items.length === 0 ? (
                      <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-700 rounded-lg">
                        No {title.toLowerCase()} added yet. Click the button below to add one.
                      </div>
                    ) : (
                      items.map((item, index) => (
                        <SortableSwotEntry
                          key={item.id}
                          item={item}
                          index={index}
                          categoryTitle={title}
                          onUpdate={updateItem}
                          onRemove={removeItem}
                        />
                      ))
                    )}
                  </div>
                </SortableContext>
              </DndContext>

              {/* Add Button */}
              <div className="mt-4">
                <button
                  onClick={() => addItem(key)}
                  className="w-full sm:w-auto px-6 py-3 border-2 border-dashed border-gray-600 rounded-lg text-gray-400 hover:text-[#ff5c33] hover:border-[#ff5c33] transition-colors font-body text-sm font-medium print:hidden"
                >
                  + Add {title.slice(0, -1)}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
