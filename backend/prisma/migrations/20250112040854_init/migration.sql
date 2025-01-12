-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "item_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "uom" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_item_code_key" ON "Item"("item_code");
