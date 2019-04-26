const config = {
  apiUrl: 'https://chronos-api.web-pal.com/api', // server url
  socketUrl: 'https://chronos-socket.web-pal.com', // url of socket server

  supportLink: 'https://web-pal.atlassian.net/servicedesk/customer/portal/2',
  githubLink: 'https://github.com/web-pal/chronos-timetracker',
  trelloApiKey: '0c531045b6f176f6f4fb1c4584661bd7',

  // idleTimeThreshold: 60 * 60 * 24, // seconds of inactivity considering user is idle
  idleTimeThreshold: 300,
  checkUpdates: true,
  infoLog: false,
  issueWindowDevTools: false,
  idleWindowDevTools: false,
  loginWindowDevTools: false,
  attachmentsWindowDevtools: false,
  screenshotNotificationWindowDevtools: false,
  screenshotsViewerWindowDevtools: false,
  loginTrelloWindowDevTools: false,
};

export default config;
