-- CreateTable
CREATE TABLE "ShortVideo" (
    "id" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "embedCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShortVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LongVideo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "channel" TEXT NOT NULL,
    "baseViews" INTEGER NOT NULL DEFAULT 0,
    "postDate" TIMESTAMP(3) NOT NULL,
    "duration" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "embedCode" TEXT NOT NULL,
    "categories" TEXT[],
    "youtubeLink" TEXT NOT NULL,
    "instagramLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LongVideo_pkey" PRIMARY KEY ("id")
);
