// This file is temporarily disabled to allow for static export.
// The AI features that used these server actions are not compatible
// with the `output: 'export'` configuration in next.config.ts.


import {
  adaptiveDifficulty,
  type AdaptiveDifficultyInput,
} from '@/ai/flows/adaptive-difficulty';
import { getColoringPage as fetchColoringPage } from '@/lib/coloring';
import { generateColoringPage } from '@/ai/flows/generate-coloring-page-flow';

export async function getAdaptiveDifficulty(input: AdaptiveDifficultyInput) {
  try {
    const result = await adaptiveDifficulty(input);
    return {success: true, data: result};
  } catch (error) {
    console.error('Error in getAdaptiveDifficulty:', error);
    return {success: false, error: 'Failed to get new difficulty from AI.'};
  }
}

export async function getColoringPage(prompt: string) {
    if (!prompt) {
        return { success: false, error: 'A word must be provided.' };
    }
    try {
        const result = await generateColoringPage({ prompt });
        if (!result || !result.imageUrl) {
        return { success: false, error: 'The AI failed to return an image.' };
        }
        return { success: true, data: result };
    } catch (error) {
        console.error(`Error in getColoringPage for "${prompt}":`, error);
        const message = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, error: message };
    }
}
