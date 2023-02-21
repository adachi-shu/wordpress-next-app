import { BetaAnalyticsDataClient } from '@google-analytics/data';
import path from 'path';

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n')
  }
});

export const fetchPopularPosts = async (
  startDate: '7daysAgo' | '14daysAgo' | '30daysAgo',
  pageSize: number
) => {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/353050393`,
    dateRanges: [
      {
        startDate: startDate,
        endDate: 'today'
      }
    ],
    dimensions: [
      {
        name: 'pagePath'
      }
    ],
    metrics: [
      {
        name: 'screenPageViews'
      }
    ],
    dimensionFilter: {
      filter: {
        fieldName: 'pagePath',
        stringFilter: {
          matchType: 'CONTAINS',
          value: '/posts/'
        }
      }
    },
    limit: pageSize
  });

  const slugs = response.rows
    .map((row) => row.dimensionValues[0].value.split("/")[2])
    .filter((v) => v);
  return slugs;
};