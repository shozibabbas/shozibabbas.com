# Google Analytics Setup

This project supports Google Analytics 4 (GA4) through one environment variable.

## 1. Create your GA4 property

1. Go to Google Analytics Admin.
2. Create (or open) a GA4 property.
3. Create a Web Data Stream for your site.
4. Copy the Measurement ID (format: `G-XXXXXXXXXX`).

## 2. Add local environment variable

Create a `.env.local` file in the project root with:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Then restart the dev server.

## 3. Add environment variable in Vercel

1. Open your project in Vercel.
2. Go to Settings -> Environment Variables.
3. Add this variable:

- Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Value: `G-XXXXXXXXXX`
- Environment: Production (and Preview/Development if needed)

4. Save the variable.
5. Redeploy your project so the new value is included in the build.

## 4. Verify tracking

1. Open your deployed site.
2. In Google Analytics, open Reports -> Realtime.
3. Browse a few pages and confirm events/page views appear.

## Notes

- If the variable is not set, analytics scripts are not loaded.
- This setup tracks client-side route changes in the App Router.
