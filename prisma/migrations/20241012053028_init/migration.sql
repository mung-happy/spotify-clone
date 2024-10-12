-- CreateTable
CREATE TABLE "Tracks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "artist_id" INTEGER NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "popularity" INTEGER,
    "color_bg" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "track_url" TEXT NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Tracks_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artists" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Artists" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "popularity" INTEGER,
    "type" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Genres" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "color_bg" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Albums" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "artist_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "color_bg" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Albums_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artists" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Track_Genre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "track_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,
    CONSTRAINT "Track_Genre_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genres" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Track_Genre_track_id_fkey" FOREIGN KEY ("track_id") REFERENCES "Tracks" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Album_Track" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "track_id" INTEGER NOT NULL,
    "album_id" INTEGER NOT NULL,
    CONSTRAINT "Album_Track_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "Albums" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Album_Track_track_id_fkey" FOREIGN KEY ("track_id") REFERENCES "Tracks" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
