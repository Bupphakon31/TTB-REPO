import { test, expect } from "@playwright/test";

test("Find duplicates from two arrays", { tag: ["@duplicates"] }, async () => {
    const listA = [1, 2, 3, 5, 6, 8, 9];
    const listB = [3, 2, 1, 5, 6, 0];

    const duplicatesList = listA.filter((item) => listB.includes(item));

    expect(duplicatesList).toEqual([1, 2, 3, 5, 6]);
    console.log("Duplicates:", duplicatesList);
});
