import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import type { Flashcard } from '../types/local';

interface FlashcardViewerProps {
  flashcards: Flashcard[];
}

export default function FlashcardViewer({ flashcards }: FlashcardViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (flashcards.length === 0) {
    return <p className="text-center text-muted-foreground">No flashcards available.</p>;
  }

  const currentCard = flashcards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="space-y-4">
      <div className="text-center text-sm text-muted-foreground">
        Card {currentIndex + 1} of {flashcards.length}
      </div>

      <Card
        className="min-h-[300px] cursor-pointer transition-all hover:shadow-lg"
        onClick={handleFlip}
      >
        <CardContent className="flex min-h-[300px] items-center justify-center p-8">
          <div className="text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {isFlipped ? 'Answer' : 'Question'}
            </p>
            <p className="text-lg">{isFlipped ? currentCard.answer : currentCard.question}</p>
            {!isFlipped && (
              <p className="mt-4 text-sm text-muted-foreground">Click to reveal answer</p>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={handlePrevious} disabled={flashcards.length <= 1}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <Button variant="ghost" onClick={() => setIsFlipped(false)}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset
        </Button>
        <Button variant="outline" onClick={handleNext} disabled={flashcards.length <= 1}>
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

