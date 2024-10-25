/*
  Warnings:

  - Made the column `popularity` on table `Artists` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Artists" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "popularity" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Artists" ("banner", "create_at", "id", "name", "popularity", "slug", "thumbnail", "type", "update_at") SELECT "banner", "create_at", "id", "name", "popularity", "slug", "thumbnail", "type", "update_at" FROM "Artists";
DROP TABLE "Artists";
ALTER TABLE "new_Artists" RENAME TO "Artists";
CREATE TABLE "new_Tracks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "artist_id" INTEGER NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "popularity" INTEGER,
    "color_bg" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "track_url" TEXT NOT NULL,
    "duration" TEXT NOT NULL DEFAULT '0',
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Tracks_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artists" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tracks" ("artist_id", "color_bg", "create_at", "id", "name", "popularity", "slug", "thumbnail", "track_url", "type", "update_at") SELECT "artist_id", "color_bg", "create_at", "id", "name", "popularity", "slug", "thumbnail", "track_url", "type", "update_at" FROM "Tracks";
DROP TABLE "Tracks";
ALTER TABLE "new_Tracks" RENAME TO "Tracks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
