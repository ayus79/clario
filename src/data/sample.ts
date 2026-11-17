// Fictional sample data - mirrors the BRD prototype (4 priorities × 4 channels).
export type Priority = 'urgent' | 'blocker' | 'follow' | 'fyi';
export type Channel = 'email' | 'slack' | 'whatsapp' | 'x';

export const priorityMeta: Record<Priority, { label: string; meaning: string }> = {
  urgent: { label: 'Urgent decision', meaning: 'Needs you now' },
  blocker: { label: 'Team blocker', meaning: 'Someone is waiting on you' },
  follow: { label: 'Follow-up', meaning: 'Needs action later' },
  fyi: { label: 'FYI', meaning: 'No action needed' },
};
export const channelMeta: Record<Channel, string> = {
  email: 'Email', slack: 'Slack', whatsapp: 'WhatsApp', x: 'X DMs',
};

export interface Msg {
  id: string; channel: Channel; priority: Priority;
  from: string; initials: string; subject: string; preview: string; time: string; unread?: boolean;
  due?: string; reason: string; action: string; source: string;
}

export const messages: Msg[] = [
  { id: 'm1', channel: 'email', priority: 'urgent', from: 'Priya Nair', initials: 'PN', unread: true,
    subject: 'Vendor contract needs your sign-off today', time: '8:42',
    preview: 'Legal cleared the final draft. We lose the discounted rate if it isn’t signed by 5 PM…',
    due: 'Today, 5:00 PM',
    reason: 'Priya is asking for an approval, there is a hard deadline today, and a financial penalty if it passes.',
    action: 'Review the redlined clause 7, then approve or reply with changes.', source: 'Email · Priya Nair' },
  { id: 'm2', channel: 'slack', priority: 'blocker', from: 'Marcus Lee', initials: 'ML', unread: true,
    subject: 'Blocked: waiting on production access', time: '8:15',
    preview: 'Can’t ship the billing fix until I get prod read access. QA already passed it.',
    due: 'Blocking 1 release',
    reason: 'Marcus cannot proceed without your approval. His work is finished and queued behind this one step.',
    action: 'Approve production access - takes about 30 seconds.', source: 'Slack · #eng-platform' },
  { id: 'm3', channel: 'email', priority: 'urgent', from: 'Dana Whitfield', initials: 'DW', unread: true,
    subject: 'Board deck: final numbers needed by 3 PM', time: '7:58',
    preview: 'Slides 4 and 9 still show last quarter’s revenue. Can you confirm the final figures?',
    due: 'Today, 3:00 PM',
    reason: 'A time-boxed request from someone preparing for a board meeting, and only you have the numbers.',
    action: 'Send the confirmed Q3 revenue figures.', source: 'Email · Dana Whitfield' },
  { id: 'm4', channel: 'whatsapp', priority: 'follow', from: 'Elena Rossi', initials: 'ER',
    subject: 'Asked for the proposal two days ago', time: 'Tue',
    preview: 'Hi! Whenever you have a moment, could you send over that proposal we discussed?',
    due: 'Overdue by 2 days',
    reason: 'A prospect asked for something and hasn’t had a reply. Clario noticed you said “I’ll send it Monday.”',
    action: 'Send the proposal, or snooze this until tomorrow.', source: 'WhatsApp · Elena Rossi' },
  { id: 'm5', channel: 'email', priority: 'blocker', from: 'Finance Team', initials: 'FT',
    subject: 'Contractor rate approval pending', time: '7:30',
    preview: 'We can’t process the invoice batch until the new contractor rate is approved.',
    due: 'Payroll closes Fri',
    reason: 'Finance is explicitly waiting on you, and a payroll cut-off creates a deadline.',
    action: 'Approve the $85/hr rate or send a counter.', source: 'Email · Finance Team' },
  { id: 'm6', channel: 'x', priority: 'follow', from: 'Tom Okafor', initials: 'TO',
    subject: 'Partnership idea - worth a reply', time: 'Mon',
    preview: 'Loved your talk. We run a 40k-person community and think there’s a fit. Open to chat?',
    due: 'No deadline',
    reason: 'A warm inbound opportunity with no reply yet. These go cold fast.',
    action: 'Reply with a time to talk, or archive politely.', source: 'X DMs · Tom Okafor' },
  { id: 'm7', channel: 'slack', priority: 'blocker', from: 'Support Team', initials: 'ST',
    subject: 'Customers asking when SSO ships', time: 'Mon',
    preview: 'Three enterprise accounts asked again. Can we give them a delivery timeline?',
    due: '3 customers waiting',
    reason: 'The support team can’t answer customers until you share a timeline.',
    action: 'Share an expected SSO date with support.', source: 'Slack · #support' },
  { id: 'm8', channel: 'slack', priority: 'fyi', from: '#announcements', initials: '#',
    subject: 'Office closed this Friday', time: 'Mon',
    preview: 'Reminder: the office is closed Friday for the holiday. Enjoy the long weekend.',
    reason: 'An announcement. Nothing is being asked of you.',
    action: 'Nothing. It’s already out of your way.', source: 'Slack · #announcements' },
  { id: 'm9', channel: 'email', priority: 'fyi', from: 'Metrics Digest', initials: 'MD',
    subject: 'Your weekly report is ready', time: 'Mon',
    preview: 'Traffic is up 4% week over week. Full breakdown inside.',
    reason: 'An automated summary. No one is waiting for a response.',
    action: 'Read whenever you like.', source: 'Email · Metrics Digest' },
];
