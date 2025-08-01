import { source } from '@/lib/source';
import { getLLMText } from '@/lib/llms';

// cached forever
export const revalidate = false;

export async function GET() {
  const scan = source.getPages().map(getLLMText);
  const scanned = await Promise.all(scan);

  return new Response(scanned.join('\n\n'));
}
