import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const TARGET_URL = 'https://hudlink.ai'
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'images', 'hudlink.png')

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0
      const distance = 300
      const timer = setInterval(() => {
        window.scrollBy(0, distance)
        totalHeight += distance

        if (totalHeight >= document.body.scrollHeight) {
          clearInterval(timer)
          resolve()
        }
      }, 300)
    })
  })
}

async function captureHudLinkScreenshot() {
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

  await page.waitForTimeout(1500)
  await autoScroll(page)
  await page.waitForTimeout(1000)
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'auto' }))
  await page.waitForTimeout(1000)

  await page.screenshot({
    path: OUTPUT_PATH,
    fullPage: true,
    type: 'png',
  })

  await browser.close()
  console.log(`Saved screenshot to ${OUTPUT_PATH}`)
}

captureHudLinkScreenshot().catch((error) => {
  console.error('Failed to capture HudLink screenshot:', error)
  process.exitCode = 1
})
