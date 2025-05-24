export interface User {
  id: string;
  name: string;
  avatar: string;
  avatarColor: string;
}

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  sender: User;
  type: 'customer' | 'agent';
}

export interface Conversation {
  id: string;
  customer: User;
  title: string;
  lastMessage: string;
  lastActivity: string;
  status: 'open' | 'closed' | 'pending';
  unread: boolean;
  priority?: 'low' | 'medium' | 'high';
  tags?: string[];
  isSelected?: boolean;
  waitTime?: string;
  source?: string;
}

export const users: Record<string, User> = {
  luis: {
    id: 'luis',
    name: 'Luis',
    avatar: 'L',
    avatarColor: 'bg-blue-500',
  },
  ivan: {
    id: 'ivan',
    name: 'Ivan',
    avatar: 'I',
    avatarColor: 'bg-red-500',
  },
  lead: {
    id: 'lead',
    name: 'Lead',
    avatar: 'L',
    avatarColor: 'bg-blue-500',
  },
  miracle: {
    id: 'miracle',
    name: 'Miracle',
    avatar: 'M',
    avatarColor: 'bg-green-500',
  },
  agent: {
    id: 'agent',
    name: 'Sean',
    avatar: 'S',
    avatarColor: 'bg-indigo-500',
  }
};

export const conversations: Conversation[] = [
  {
    id: '1',
    customer: users.luis,
    title: 'Luis - Github',
    lastMessage: 'Hey! I have a questio...',
    lastActivity: '45m',
    status: 'open',
    unread: false,
    isSelected: true,
    source: 'Github'
  },
  {
    id: '2',
    customer: users.ivan,
    title: 'Ivan - Nike',
    lastMessage: 'Hi there, I have a qu...',
    lastActivity: '30m',
    status: 'open',
    unread: true,
    waitTime: '2min',
    source: 'Nike'
  },
  {
    id: '3',
    customer: users.lead,
    title: 'Lead from New York',
    lastMessage: 'Good morning, let me...',
    lastActivity: '45m',
    status: 'open',
    unread: false,
    priority: 'high',
    source: 'New York'
  },
  {
    id: '4',
    customer: { id: 'bug', name: 'Bug report', avatar: 'bug', avatarColor: 'bg-gray-800' },
    title: 'Booking API problems',
    lastMessage: 'Bug report',
    lastActivity: '45m',
    status: 'open',
    unread: false,
    source: 'Small Crafts'
  },
  {
    id: '5',
    customer: users.miracle,
    title: 'Miracle - Exemplary Bank',
    lastMessage: 'Hey there, I\'m here to...',
    lastActivity: '45m',
    status: 'open',
    unread: false,
    source: 'Exemplary Bank'
  }
];

export const messages: Message[] = [
  {
    id: '1',
    sender: users.luis,
    content: 'I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you\'d be able to refund me, as it is un-opened.',
    timestamp: new Date(),
    type: 'customer'
  },
  {
    id: '2',
    sender: users.agent,
    content: 'Let me just look into this for you, Luis.',
    timestamp: new Date(),
    type: 'agent'
  }
];

export const suggestedQuestions = [
  'How do I get a refund?',
  'What is your return policy?',
  'How long does shipping take?',
  'Do you offer exchanges?'
];
