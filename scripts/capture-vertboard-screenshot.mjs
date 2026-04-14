import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const TARGET_URL = 'https://vertboard.com'
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'images', 'vertboard.png')

async function captureVertBoardScreenshot() {
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

  // Give lazy sections and fonts a moment to settle before capture.
  await page.waitForTimeout(2000)

  await page.screenshot({
    path: OUTPUT_PATH,
    fullPage: true,
    type: 'png',
  })

  await browser.close()
  console.log(`Saved screenshot to ${OUTPUT_PATH}`)
}

captureVertBoardScreenshot().catch((error) => {
  console.error('Failed to capture VertBoard screenshot:', error)
  process.exitCode = 1
})
