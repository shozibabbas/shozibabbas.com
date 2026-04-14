import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const TARGET_URL = 'https://www.babyday.co'
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'images', 'babyday.png')

async function captureBabyDayScreenshot() {
  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true })

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 1728, height: 1117 },
    deviceScaleFactor: 2,
  })

  const page = await context.newPage()

  await page.goto(TARGET_URL, {
    waitUntil: 'networkidle',
    timeout: 120000,
  })

  // Give lazy content and web fonts time to stabilize for a clean capture.
  await page.waitForTimeout(2000)

  await page.screenshot({
    path: OUTPUT_PATH,
    fullPage: true,
    type: 'png',
  })

  await browser.close()
  console.log(`Saved screenshot to ${OUTPUT_PATH}`)
}

captureBabyDayScreenshot().catch((error) => {
  console.error('Failed to capture BabyDay screenshot:', error)
  process.exitCode = 1
})
