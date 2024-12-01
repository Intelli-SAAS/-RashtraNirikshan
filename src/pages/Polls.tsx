import React from 'react';
import { useStore } from '../store/store';
import { Vote, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function Polls() {
  const polls = useStore((state) => state.polls);
  const votePoll = useStore((state) => state.votePoll);

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Public Polls</h1>
          <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            <Vote className="h-5 w-5" />
            <span>Create New Poll</span>
          </button>
        </div>

        <div className="grid gap-6">
          {polls.map((poll) => (
            <div key={poll.id} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{poll.question}</h3>
              <p className="text-gray-600 mb-4">{poll.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => votePoll(poll.id, 'yes')}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-700 rounded-md hover:bg-green-100"
                  >
                    <ThumbsUp className="h-5 w-5" />
                    <span>Yes ({poll.votes.yes})</span>
                  </button>
                  <button
                    onClick={() => votePoll(poll.id, 'no')}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-700 rounded-md hover:bg-red-100"
                  >
                    <ThumbsDown className="h-5 w-5" />
                    <span>No ({poll.votes.no})</span>
                  </button>
                </div>
                <div className="text-sm text-gray-500">
                  Total Votes: {poll.votes.yes + poll.votes.no}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}