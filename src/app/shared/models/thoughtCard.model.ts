import { ThoughtCardSize, ThoughtCardVariant } from '../types/ui.types';

export interface ThoughtCard {
  author: string;
  size: ThoughtCardSize;
  thought: string;
  variant: ThoughtCardVariant;
}
