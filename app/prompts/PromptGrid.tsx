import PromptCardPreview from './PromptCard.preview';
import { PromptData } from '@/data/prompts';

interface PromptGridProps {
  prompts: PromptData[];
}

const PromptGrid = ({ prompts }: PromptGridProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-auto auto-rows-fr">
          {prompts.map((prompt) => (
            <PromptCardPreview key={prompt.id} {...prompt} />
          ))}
        </div>
        
        {prompts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-muted-foreground text-lg mb-4">
              No prompts found in this category
            </div>
            <p className="text-sm text-muted-foreground">
              Try selecting a different category or browse all prompts
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PromptGrid;