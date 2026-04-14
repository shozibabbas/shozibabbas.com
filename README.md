<img src="public/preview.png" />

# Portfolio

This is an open-source Next.js portfolio project built with Tailwind CSS.
If you want to use it, fork it, clone it, customize it, and deploy your own version.

## Use this repository

You can use this project in two ways:

1. Fork this repository on GitHub (recommended)
2. Or clone it directly:

```bash
git clone https://github.com/shozibabbas/shozibabbas.com.git
cd shozibabbas.com
```

## Local setup

### Prerequisites

- Node.js 20+
- npm or pnpm

### Install dependencies

Using npm:

```bash
npm install
```

Using pnpm:

```bash
pnpm i
```

### Run the app locally

Using npm:

```bash
npm run dev
```

Using pnpm:

```bash
pnpm run dev
```

Then open http://localhost:3000.

## Available scripts

Using npm:

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run linter

Using pnpm, replace `npm run` with `pnpm`.

## Project customization

- Inside `layout.tsx` update the metadata
- Inside `page.tsx` update the content
- Update the `favicon.ico`

### Content configuration

#### Links on the home page

To update the links on the home page go to `src/components/links.tsx` and inside `links` array add or remove objects. Each object has 2 properties, `icon` and `href`. `href` is self-explanatory, and inside `icon` you will put an icon imported from `@icons-pack/react-simple-icons`. Visit [simpleicons.org](https://simpleicons.org/) to see all icons. Import them by adding `Si` prefix to their name.

#### Updating the rest of the content

Inside the `src/data` folder you have the rest of the content you can edit.

#### Updating the `previewImage` in `projects.ts`

Make sure to put `/` + image file name that exists inside the `public` folder. For example, if you have `my-project.png` inside `public`, you should write:

```ts
previewImage: '/my-project.png'
```

##### Image aspect ratio

Inside `src/app/work/page.tsx`, `previewImage` is wrapped inside the `AspectRatio` component. Change the `ratio` prop so it suits your needs.

#### Updating skills

Inside `skills.ts`, within the `SKILLS` array, each object represents a skill field (frontend, backend, DevOps, design, and so on). Each object has:

- `field`: field name
- `skills`: array of items
- each item has `skill` (tooltip text) and `icon` (displayed icon)

Update them the same way you update links on the home page.

### Styling

To change the styling, visit [styling docs](https://neobrutalism.dev/styling), and copy the desired styles into your CSS as shown there.

## Deployment

You can deploy this project on Vercel, Netlify, or any Node-compatible hosting platform.

For Vercel:

1. Import your forked repo
2. Use default Next.js settings
3. Deploy

## Contributing

Contributions are welcome.

1. Fork the repo
2. Create a branch
3. Make your changes
4. Open a pull request

## License

This repository is open source under the [LICENSE](LICENSE) file.
