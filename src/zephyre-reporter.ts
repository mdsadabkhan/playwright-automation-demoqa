import JiraClient from 'jira-client';

// Replace with your JIRA instance URL and credentials
const jira = new JiraClient({
  protocol: 'https',
  host: 'your-jira-instance.atlassian.net',
  username: 'your-email@example.com',
  password: 'your-api-token',
  apiVersion: '2',
  strictSSL: true,
});

export default jira;
