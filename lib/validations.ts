import { z } from "zod";

//different form validations taken from Zod documentation


// Schema for validating questions
export const QuestionsSchema = z.object({
    title: z.string().min(5).max(130), // Validates the title of a question, must be between 5 and 130 characters long
    explanation: z.string().min(100), // Validates the explanation of a question, must be at least 100 characters long
    tags: z.array(z.string().min(1).max(15)).min(1).max(3), // Validates the tags of a question, must be an array of strings, each between 1 and 15 characters long, with a minimum of 1 tag and a maximum of 3 tags
});

// Schema for validating answers
export const AnswerSchema = z.object({
    answer: z.string().min(100), // Validates the answer, must be at least 100 characters long
});

// Schema for validating user profiles
export const ProfileSchema = z.object({
    name: z.string().min(5).max(50), // Validates the name, must be between 5 and 50 characters long
    username: z.string().min(5).max(50), // Validates the username, must be between 5 and 50 characters long
    bio: z.string().min(10).max(150), // Validates the bio, must be between 10 and 150 characters long
    portfolioWebsite: z.string().url(), // Validates the portfolio website URL
    location: z.string().min(5).max(50), // Validates the location, must be between 5 and 50 characters long
});