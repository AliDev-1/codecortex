"use server";

import Answer from "@/database/answer.model";
import { connectToDatabase } from "../mongoose";
import {
//   AnswerVoteParams,
  CreateAnswerParams,
//   DeleteAnswerParams,
  GetAnswersParams,
} from "./shared.types";
import Question from "@/database/question.model";
import { revalidatePath } from "next/cache";
// import User from "@/database/user.model";

export async function createAnswer(params: CreateAnswerParams) {
  try {
    connectToDatabase();

    const { content, author, question, path } = params;

    const newAnswer = await Answer.create({ content, author, question });

    // Add the answer to the question's answers array
    await Question.findByIdAndUpdate(question, {
      $push: { answers: newAnswer._id },
    });

    // Add interaction model

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}


export async function getAnswers(params: GetAnswersParams) {
  try {
    connectToDatabase();

    const { questionId, sortBy, page = 1, pageSize = 10 } = params;

    const skipAmount = (page - 1) * pageSize;

    // let sortOptions = {};

    // switch (sortBy) {
    //   case "highestUpvotes":
    //     sortOptions = { upvotes: -1 };
    //     break;
    //   case "lowestUpvotes":
    //     sortOptions = { upvotes: 1 };
    //     break;
    //   case "recent":
    //     sortOptions = { createdAt: -1 };
    //     break;
    //   case "old":
    //     sortOptions = { createdAt: 1 };
    //     break;

    //   default:
    //     break;
    // }

    const answers = await Answer.find({ question: questionId })
      .populate("author", "_id clerkId name picture")
      .sort({createdAt : -1})

    const totalAnswer = await Answer.countDocuments({
      question: questionId,
    });

    const isNextAnswer = totalAnswer > skipAmount + answers.length;

    return { answers, isNextAnswer };
  } catch (error) {
    console.log(error);
    throw error;
  }
}