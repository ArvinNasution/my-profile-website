import prisma from '@/lib/db';

export async function GET(req) {
  const games = await prisma.game.findMany();
  return new Response(JSON.stringify(games));
}

export async function POST(req) {
  const data = await req.json();
  const newGame = await prisma.game.create({ data });
  return new Response(JSON.stringify(newGame));
}
