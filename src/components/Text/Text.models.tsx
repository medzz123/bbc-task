import { FontSizes, FontWeights } from '@theme/font';

export interface TextProps {
  /**
   * Type of element
   */
  variant?: TextVariant;
  /**
   * Replaces default variant
   */
  level?: FontSizes;
  /**
   * Font weight
   */
  weight?: FontWeights;
  /**
   * Color
   */
  color?: 'error' | 'success' | 'normal' | 'info';
  /**
   * Text Align
   */
  align?: 'left' | 'right' | 'center';
  /**
   * Margin Bottom
   */
  mb?: 'none' | 'small' | 'large';
}

export type TextVariant = 'p' | 'span' | 'h1' | 'h2' | 'h3';
