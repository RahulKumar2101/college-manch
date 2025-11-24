import { prisma } from "../../../../lib/prisma";

export async function GET() {
  try {
    const videos = await prisma.longVideo.findMany({
      orderBy: { id: "desc" },
    });
    return Response.json(videos);
  } catch {
    return Response.json({ error: "Failed to fetch long videos" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newVideo = await prisma.longVideo.create({
      data: {
        title: body.title,
        description: body.description,
        channel: body.channel,
        baseViews: Number(body.baseViews),
        postDate: new Date(body.postDate),
        duration: body.duration,
        thumbnail: body.thumbnail,
        embedCode: body.embedCode,
        categories: body.categories,
        youtubeLink: body.youtubeLink,
        instagramLink: body.instagramLink || null,
      },
    });

    return Response.json(newVideo);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to create long video" }, { status: 500 });
  }
}
