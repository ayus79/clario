# Clario --- Business Requirements & Product Specification

> **Product:** clario\
> **Tagline:** Less inbox. More business.\
> **Document type:** Initial Business Requirements Document (BRD)\
> **Status:** Draft --- based on the visible prototype and inferred
> production requirements

------------------------------------------------------------------------

## 1. Product Overview

Clario is an AI-powered unified priority inbox. Its purpose is not simply
to combine messages from different platforms, but to identify which
conversations require attention, prioritize them, and help users act on
them.

The prototype uses fictional sample data. This document separates
functionality visible in the prototype from production requirements
inferred for a complete product.

### Problem statement

Professionals receive messages across multiple communication channels.
Important decisions, follow-ups, and team blockers can get buried under
large volumes of ordinary messages.

### Proposed solution

Clario aggregates messages, understands their context, identifies
actionable items, and presents users with the things that need
attention.

### Core value proposition

**Less time managing messages. More time doing meaningful work.**

------------------------------------------------------------------------

## 2. Business Objectives

1.  Reduce the time users spend checking multiple communication
    platforms.
2.  Prevent important messages and business opportunities from being
    missed.
3.  Automatically identify urgent decisions and pending actions.
4.  Help managers identify team blockers.
5.  Ensure follow-ups happen at the right time.
6.  Provide a daily summary of important activities.
7.  Eventually allow AI agents to perform authorized actions on behalf
    of users.

------------------------------------------------------------------------

## 3. Functional Requirements

### FR-01: Unified Inbox

**Priority:** Core

The system shall collect messages from multiple communication channels
and display them in one centralized inbox.

**Channels shown in the prototype:** - Email - Slack - WhatsApp - X
(Twitter) DMs

**Requirements:** - Connect and disconnect communication accounts. -
Fetch incoming messages from connected channels. - Normalize messages
into a common format. - Display sender, timestamp, subject/title,
message preview, and channel. - Support searching across people, topics,
and conversations. - Avoid displaying duplicate messages where
possible. - Maintain a reference to the original conversation and
channel.

### FR-02: Intelligent Message Classification

**Priority:** Core

The system shall analyze incoming messages and classify them into
actionable categories.

#### Priority categories

  -----------------------------------------------------------------------
  Category                Meaning                 Examples
  ----------------------- ----------------------- -----------------------
  Urgent decision         Requires immediate      Approvals, important
                          attention               decisions, deadlines,
                                                  business-critical
                                                  requests

  Team blocker            Someone is waiting on   Team dependencies,
                          the user                approvals, pending
                                                  information,
                                                  operational blockers

  Follow-up               Requires a future       Pending replies,
                          action                  prospects,
                                                  partnerships,
                                                  reminders, unanswered
                                                  requests

  FYI                     Informational messages  Updates, notifications,
                                                  announcements, messages
                                                  requiring no action
  -----------------------------------------------------------------------

**Requirements:** - Classification should consider message content and
conversation history. - Identify deadlines and urgency. - Identify
whether someone is expecting a response. - Detect messages that require
decisions or approvals. - Provide a reason for the assigned
classification. - Allow users to correct AI classifications. -
Re-evaluate classifications when new messages arrive.

### FR-03: Priority-Based Inbox

Users shall be able to filter messages based on priority and
communication channel.

**Priority filters:** - All priorities - Urgent decision - Team
blocker - Follow-up - FYI

**Channel filters:** - All channels - Email - Slack - WhatsApp - X DMs

**Other requirements:** - Search by sender, subject, keyword, or
topic. - Sort by urgency, deadline, and latest activity. - Display
unread and pending-action indicators. - Provide a consolidated view
across all connected channels.

### FR-04: Daily AI Briefing

**Priority:** Core

The system shall generate a daily briefing summarizing what requires the
user's attention.

The prototype shows a morning briefing with counts for urgent decisions,
follow-ups, and team blockers. Its example counts are illustrative
sample data, not product guarantees.

**The briefing should summarize:** - Critical decisions pending. -
People waiting for responses. - Upcoming deadlines. - Team members
blocked by pending actions. - Important business opportunities.

**Requirements:** - Generate a briefing for the selected day or
period. - Allow the user to manually generate or refresh the briefing. -
Link briefing items to their source messages or conversations. - Avoid
presenting duplicate actions in the briefing. - Clearly distinguish
AI-generated summaries from original messages.

### FR-05: Follow-Up Management

The system shall recognize conversations where a response or action is
still pending.

**Requirements:** - Identify unanswered messages. - Identify when the
user owes someone a response. - Track promised follow-ups. - Extract
expected follow-up dates where possible. - Identify conversations where
the other party is waiting. - Allow users to mark follow-ups as
completed. - Remind users when deadlines approach. - Reopen or update
follow-ups if new messages arrive.

### FR-06: Team Blocker Identification

The system shall identify dependencies where other people cannot proceed
without the user's response or approval.

**Example scenarios:** - A developer is waiting for production access
approval. - A team member is waiting for pricing-page content
approval. - Finance is waiting for contractor-rate approval. - A support
team is waiting for an SSO delivery timeline.

**Requirements:** - Detect requests for approvals or decisions. -
Identify the person waiting. - Understand the business context. -
Extract the expected action. - Identify the impact of delay where
possible. - Highlight the blocker in the priority inbox. - Allow the
user to resolve, dismiss, or defer a blocker.

### FR-07: Connections Management

Users shall be able to manage external communication integrations.

**Requirements:** - Connect communication platforms through OAuth or
their supported authentication mechanisms. - Manage multiple accounts
where supported. - Display connection status. - Handle expired or
revoked permissions. - Allow users to disconnect accounts. - Synchronize
messages incrementally. - Handle API rate limits and synchronization
failures. - Provide clear integration error and reconnection states.

### FR-08: Agent API

The prototype exposes an `Agent API` section. This suggests a possible
capability for external AI agents or applications to interact with
Clario. Its exact functionality is not established by the prototype, so
the following are proposed requirements.

**Potential requirements:** - Provide authenticated APIs for retrieving
prioritized messages. - Allow agents to retrieve pending actions and
deadlines. - Allow authorized agents to mark tasks complete. - Support
scoped permissions. - Maintain audit logs of agent activity. - Allow
users or administrators to revoke agent access.

------------------------------------------------------------------------

## 4. Main User Workflows

### Workflow A --- Daily Inbox Processing

1.  Messages arrive through connected platforms.
2.  Clario synchronizes and normalizes the messages.
3.  AI analyzes messages and conversation context.
4.  Messages are classified and prioritized.
5.  The user opens the daily briefing.
6.  The user reviews important items and takes action.

### Workflow B --- Follow-Up Detection

1.  A customer sends a message requesting a proposal.
2.  AI identifies that a response is required.
3.  Clario creates a follow-up item.
4.  The user responds through the original platform.
5.  Clario detects the response and updates the follow-up status.

### Workflow C --- Team Blocker Detection

1.  A team member requests an approval.
2.  AI detects that the team member is blocked.
3.  Clario creates a team blocker.
4.  The user reviews the blocker and provides approval or the required
    response.
5.  Clario updates the item when the action is completed.

------------------------------------------------------------------------

## 5. Suggested System Modules

The following is a proposed logical module breakdown.

  Module                  Responsibility
  ----------------------- ------------------------------------------
  User Management         Accounts, profiles, and preferences
  Integrations            External platform connections
  Message Ingestion       Fetch messages from platforms
  Message Normalization   Convert messages into a common schema
  Conversation Manager    Maintain conversation and thread context
  AI Classification       Categorization and intent detection
  Priority Engine         Determine urgency and importance
  Follow-Up Manager       Track pending responses and deadlines
  Team Blocker Engine     Detect organizational dependencies
  AI Briefing             Generate daily summaries
  Search Engine           Search messages and conversations
  Agent API               Expose authorized data and actions
  Notification Manager    Notify users about important items

------------------------------------------------------------------------

## 6. Suggested Data Entities

These are proposed entities and fields, not database structures supplied
by the prototype.

  Entity                  Important fields
  ----------------------- ----------------------------------------------------------
  User                    name, email, preferences
  Integration             user_id, provider, account_id, status, credentials
  Message                 provider_id, conversation_id, sender, content, timestamp
  Conversation            provider, participants, last_message_at
  MessageClassification   message_id, category, confidence, reason
  PriorityItem            user_id, conversation_id, priority, status, due_date
  FollowUp                conversation_id, assigned_to, due_date, status
  TeamBlocker             requester, responsible_user, action_required, impact
  Briefing                user_id, generated_at, summary, priority_items
  Agent                   name, credentials, permissions, status
  AuditLog                user_id, action, resource, timestamp

### Important data-modeling principle

Message classification and task completion should be separate concepts.

A classification describes what a message means (for example, urgent
decision or FYI). An actionable task represents work that needs to be
completed and has its own lifecycle.

A single conversation can contain multiple pending actions, and those
actions can have independent statuses. Therefore, the system should not
treat the AI classification as the source of truth for task completion.

------------------------------------------------------------------------

## 7. Non-Functional Requirements

### Security

-   Encrypt OAuth tokens and other integration credentials at rest.
-   Use secure credential storage and transport.
-   Apply scoped authorization.
-   Ensure users can access only their own connected accounts and data.
-   Protect agent credentials and provide revocation.

### Privacy

-   Keep users' communication data isolated.
-   Clearly explain what data is synchronized and processed.
-   Define retention and deletion policies.
-   Avoid using customer communication data for model training without
    appropriate consent and contractual controls.

### Reliability

-   Integration failures must not silently result in lost messages.
-   Use retry mechanisms for transient synchronization and processing
    failures.
-   Make ingestion idempotent to avoid duplicate records.
-   Track synchronization checkpoints.

### Scalability

-   Support large inboxes and multiple connected accounts.
-   Process new messages incrementally instead of repeatedly fetching
    entire inboxes.
-   Separate ingestion, AI processing, and notification workloads where
    appropriate.

### Performance

-   Keep inbox loading responsive.
-   Process new messages asynchronously.
-   Cache appropriate derived data.
-   Support pagination for large message collections.

### AI Accuracy and Explainability

-   Track classification confidence.
-   Allow users to correct classifications.
-   Provide understandable reasons for priority decisions.
-   Handle uncertain classifications conservatively.
-   Evaluate classification quality using representative test data.

### Observability

-   Track integration failures.
-   Measure message-processing latency.
-   Monitor AI errors and classification quality.
-   Provide operational logs and metrics.

### Auditability

-   Track actions performed by users and AI agents.
-   Record important permission changes and agent actions.
-   Preserve enough context to investigate unexpected actions.

------------------------------------------------------------------------

## 8. Recommended MVP Scope

The product should be delivered incrementally. Integration complexity
and AI accuracy are likely to be major early risks.

### Phase 1 --- MVP: Unified Priority Inbox

-   User authentication.
-   Gmail integration.
-   Message synchronization.
-   Message normalization.
-   AI classification.
-   Priority-based inbox.
-   Search and filters.
-   Basic follow-up detection.

**Outcome:** Users can connect an email account and see messages
organized by actionable priority.

### Phase 2 --- Intelligence and Productivity

-   Slack and WhatsApp integrations.
-   Conversation-context analysis.
-   Daily AI briefing.
-   Team blocker detection.
-   Deadline extraction.
-   Follow-up reminders.
-   User feedback on classifications.

**Outcome:** Clario becomes a more useful assistant for understanding
communication and tracking work.

### Phase 3 --- Automation and AI Agents

-   X DM integration.
-   Agent API.
-   AI-generated reply suggestions.
-   Authorized actions on connected platforms.
-   Automated follow-up workflows.
-   Advanced reporting and analytics.

**Outcome:** Clario can support controlled automation in addition to
surfacing information.

------------------------------------------------------------------------

## 9. Business Questions Requiring Clarification

The prototype communicates the concept, but several important product
decisions remain undefined.

1.  **Target audience:** Is this designed for founders, executives,
    managers, or general professionals?
2.  **Communication channels:** Is Gmail the first integration, or
    should the product launch with multiple channels?
3.  **AI autonomy:** Should Clario only recommend actions, draft
    responses, or actually send messages?
4.  **Task ownership:** Can team blockers be assigned to other team
    members, or are they only reminders for the logged-in user?
5.  **Conversation tracking:** Should Clario monitor the complete
    conversation history or only incoming messages?
6.  **Business model:** Individual subscription, team subscription, or
    organization-based SaaS?
7.  **Data privacy:** Should all processing happen through cloud AI
    providers, or should enterprise customers have additional
    data-control options?

These decisions affect product scope, architecture, pricing, security,
and implementation effort.

------------------------------------------------------------------------

## 10. Product Assessment and Positioning

The product opportunity is broader than a unified inbox.

The valuable transformation is:

1.  **Communication overload:** Thousands of messages across multiple
    platforms.
2.  **AI understanding:** Identify intent, urgency, deadlines,
    dependencies, and context.
3.  **Actionable intelligence:** Surface decisions, blockers, and
    follow-ups.
4.  **Business actions completed:** Reduce time spent managing messages
    and increase time spent doing meaningful work.

### Recommended positioning

Position Clario as an **AI-powered personal work assistant with a unified
communication inbox**, rather than just another email client.

This positioning gives the product room to expand into: - Task
management. - Team coordination. - AI agents. - Workflow automation. -
Business productivity insights.

------------------------------------------------------------------------

## 11. Scope and Assumptions

-   The requirements in this document are based on the visible Clario
    prototype and reasonable production-product inferences.
-   The prototype's sample data and displayed counts are illustrative.
-   The four priority categories and the four named communication
    channels are observed elements of the concept.
-   The Agent API is visible as a navigation concept, but its exact
    behavior is not established.
-   Data entities, system modules, workflows, non-functional
    requirements, and phased delivery are proposed specifications.
-   Integration availability, provider API permissions, commercial
    terms, and technical limitations must be validated before
    implementation.

------------------------------------------------------------------------

## 12. Recommended Next Step

Convert this initial business requirements document into a Software
Requirements Specification (SRS), including:

-   Detailed user roles and permissions.
-   User stories and acceptance criteria.
-   Screen-by-screen requirements.
-   Integration-specific behavior and limitations.
-   Message, conversation, and task lifecycle definitions.
-   API-level requirements.
-   Error handling and edge cases.
-   Security, privacy, and data-retention requirements.

This will provide a clearer foundation before selecting the backend
architecture and implementation stack.
