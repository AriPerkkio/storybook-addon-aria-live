import { defineConfig } from 'tsup';
import { exec } from 'node:child_process';

export default defineConfig((options) => ({
  entry: ['src/index.ts', 'src/preview.ts', 'src/manager.ts'],
  splitting: false,
  minify: !options.watch,
  format: ['cjs', 'esm'],
  dts: {
    resolve: true,
  },
  treeshake: true,
  sourcemap: true,
  clean: true,
  platform: 'browser',
  esbuildOptions(options) {
    options.conditions = ['module'];
  },
  async onSuccess() {
    if (!options.watch) return;

    const subprocess = exec('pnpm run storybook --no-open');
    subprocess.stdout?.on('data', (data) =>
      console.log(`[storybook]: ${data}`)
    );

    return function cleanup() {
      subprocess.kill();
    };
  },
}));
