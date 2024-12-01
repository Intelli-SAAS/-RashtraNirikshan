import { create } from 'zustand';
import { format } from 'date-fns';

interface Task {
  id: string;
  title: string;
  department: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  description: string;
  status: 'pending' | 'inProgress' | 'review' | 'completed';
}

interface Department {
  id: string;
  name: string;
  projects: number;
  completion: number;
  budget: number;
  activeIssues: number;
}

interface Poll {
  id: string;
  question: string;
  description: string;
  votes: {
    yes: number;
    no: number;
  };
}

interface Issue {
  id: string;
  title: string;
  description: string;
  department: string;
  location: string;
  priority: 'low' | 'medium' | 'high';
  status: 'open' | 'inProgress' | 'resolved';
  createdAt: string;
}

interface Metrics {
  months: string[];
  resolutionTimes: number[];
  satisfactionScores: number[];
}

interface AppState {
  tasks: Task[];
  departments: Department[];
  polls: Poll[];
  issues: Issue[];
  metrics: Metrics;
  selectedDepartment: string | null;
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTaskStatus: (taskId: string, status: Task['status']) => void;
  setSelectedDepartment: (departmentId: string | null) => void;
  votePoll: (pollId: string, vote: 'yes' | 'no') => void;
  addIssue: (issue: Omit<Issue, 'id' | 'status' | 'createdAt'>) => void;
}

export const useStore = create<AppState>((set) => ({
  tasks: [
    {
      id: '1',
      title: 'Road Construction Phase 1',
      department: 'PWD',
      priority: 'high',
      dueDate: format(new Date(), 'yyyy-MM-dd'),
      description: 'Phase 1 of highway expansion project',
      status: 'pending'
    }
  ],
  departments: [
    {
      id: 'pwd',
      name: 'PWD',
      projects: 31,
      completion: 65,
      budget: 5000000,
      activeIssues: 12
    },
    {
      id: 'water',
      name: 'Water Department',
      projects: 27,
      completion: 71,
      budget: 3500000,
      activeIssues: 8
    },
    {
      id: 'electricity',
      name: 'Electricity Board',
      projects: 18,
      completion: 82,
      budget: 4200000,
      activeIssues: 5
    },
    {
      id: 'civil',
      name: 'Civil Works',
      projects: 24,
      completion: 78,
      budget: 6500000,
      activeIssues: 10
    }
  ],
  polls: [
    {
      id: '1',
      question: 'Should we implement a new traffic management system?',
      description: 'Proposal to implement AI-based traffic signals to reduce congestion',
      votes: { yes: 245, no: 123 }
    },
    {
      id: '2',
      question: 'Support for new water conservation project',
      description: 'Implementation of rainwater harvesting systems in public buildings',
      votes: { yes: 389, no: 56 }
    }
  ],
  issues: [
    {
      id: '1',
      title: 'Water Pipeline Leakage',
      description: 'Major water leakage near Central Park',
      department: 'Water Department',
      location: 'Central Park, Main Road',
      priority: 'high',
      status: 'open',
      createdAt: new Date().toISOString()
    }
  ],
  metrics: {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    resolutionTimes: [4.2, 3.8, 3.5, 3.2, 2.9, 2.5],
    satisfactionScores: [3.8, 3.9, 4.0, 4.1, 4.2, 4.3]
  },
  selectedDepartment: null,
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { ...task, id: Math.random().toString(36).substr(2, 9) }]
    })),
  updateTaskStatus: (taskId, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      )
    })),
  setSelectedDepartment: (departmentId) =>
    set({ selectedDepartment: departmentId }),
  votePoll: (pollId, vote) =>
    set((state) => ({
      polls: state.polls.map((poll) =>
        poll.id === pollId
          ? {
              ...poll,
              votes: {
                ...poll.votes,
                [vote]: poll.votes[vote] + 1
              }
            }
          : poll
      )
    })),
  addIssue: (issue) =>
    set((state) => ({
      issues: [
        ...state.issues,
        {
          ...issue,
          id: Math.random().toString(36).substr(2, 9),
          status: 'open',
          createdAt: new Date().toISOString()
        }
      ]
    }))
}));