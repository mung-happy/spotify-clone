-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
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
    "play_nummber" BIGINT NOT NULL DEFAULT 0,
    "create_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Tracks_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artists" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tracks" ("artist_id", "color_bg", "create_at", "duration", "id", "name", "popularity", "slug", "thumbnail", "track_url", "type", "update_at") SELECT "artist_id", "color_bg", "create_at", "duration", "id", "name", "popularity", "slug", "thumbnail", "track_url", "type", "update_at" FROM "Tracks";
DROP TABLE "Tracks";
ALTER TABLE "new_Tracks" RENAME TO "Tracks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
