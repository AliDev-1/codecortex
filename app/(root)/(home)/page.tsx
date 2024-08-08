import React from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from '@/components/home/HomeFilters';
import NoResults from '@/components/shared/NoResults';
import QuestionCards from '@/components/cards/QuestionCards';


const Questions = [
  
  {
    _id: "1",
    title: "Cascading deletes in SQLAlchemy",
    tags: [
      { _id: "1", name: "SQL" },
      { _id: "2", name: "Python" },
    ],
    author: {
      name: "John Doe",
      _id: "1",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    upvotes: 15000000,
    views: 140340,
    answers: [],
    createdAt: new Date("2023-10-10T00:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to use Express as a custom server in NextJS?",
    tags: [
      { _id: "3", name: "JavaScript" },
      { _id: "4", name: "Node.js" },
    ],
    author: {
      name: "Jane Doe",
      _id: "2",
      picture: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    upvotes: 15,
    views: 200,
    answers: [],
    createdAt: new Date("2022-01-15T00:00:00.000Z"),
  },
];


export default function Home() {
    return (
      <>
        <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="h1-bold text-dark100_light900">All Questions</h1>

          <Link href="/ask-question" className="flex justify-end max-sm:w-full">
            <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
              Ask a Question
            </Button>
          </Link>
        </div>

        <div className="mt-11 justify-between gap-5 max-sm:flex-col sm:items-center">
          <LocalSearchbar
            route="/"
            iconPosition="left"
            imgSrc="/assets/icons/search.svg"
            placeholder="Search for questions"
            otherClasses="flex-1"
          />

          <Filter
            filters={HomePageFilters}
            otherClasses="min-h-[56px] sm:min-w-[170px]"
            containerClasses="hidden max-md:flex"
          />

          <HomeFilters />

          {/* Mapping over question cards and displaying no results page if none exists */}
          <div className="mt-10 flex w-full flex-col gap-6">
            {Questions.length > 0 ? (
              Questions.map((question) => <QuestionCards
                key={question._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />)
            ) : (
              <NoResults
                title="There's no question to show"
                  description="Be the first to spark the conversation! Ask a question and start the discussion. Your inquiry could be the next thing others learn from. "
                  link="/ask-question"
                  LinkTitle="Ask a question"
              />
            )}
          </div>
        </div>
      </>
    );   
}
