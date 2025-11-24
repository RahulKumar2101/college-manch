import { prisma } from "../../../../lib/prisma";

export async function GET() {
  try {
    const videos = await prisma.shortVideo.findMany({
      orderBy: { id: "desc" },
    });
    return Response.json(videos);
  } catch {
    return Response.json({ error: "Failed to fetch short videos" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newShort = await prisma.shortVideo.create({
      data: {
        id: body.id,
        thumbnail: body.thumbnail,
        embedCode: body.embedCode,
      },
    });

    return Response.json(newShort);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to create short video" }, { status: 500 });
  }
}
