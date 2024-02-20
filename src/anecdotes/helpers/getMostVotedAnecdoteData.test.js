import { describe, expect, test } from "vitest";
import { getMostVotedAnecdoteData } from "./getMostVotedAnecdoteData.js";

describe("Given getMostVotedAnecdoteData", () => {
  test("When votes collection and anecdotes collection are provided then expected object should be returned", () => {
    const votesCollection = [1, 3, 2];
    const anecdotesCollection = ["foo", "bar", "buzz"];

    const mostVotedAnecdoteData = getMostVotedAnecdoteData({
      votesCollection,
      anecdotesCollection,
    });

    expect(mostVotedAnecdoteData).toHaveProperty("mostVotedAnecdote", "bar");
    expect(mostVotedAnecdoteData).toHaveProperty("maxVoteValue", 3);
  });
});
