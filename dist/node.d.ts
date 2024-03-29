import { V as VitestRunMode, U as UserConfig, h as VitestOptions, i as Vitest, j as CliOptions, R as ResolvedConfig, P as ProvidedContext, k as WorkspaceProject, e as RuntimeRPC, T as TestSequencer, l as WorkspaceSpec } from './reporters-MmQN-57K.js';
export { q as BrowserProvider, p as BrowserProviderInitializationOptions, r as BrowserProviderOptions, m as ProcessPool, o as TestSequencerConstructor, n as VitestPackageInstaller, s as startVitest } from './reporters-MmQN-57K.js';
import { UserConfig as UserConfig$1, Plugin } from 'vite';
import '@vitest/runner';
import 'vite-node';
import '@vitest/snapshot';
import '@vitest/expect';
import '@vitest/runner/utils';
import '@vitest/utils';
import 'tinybench';
import 'vite-node/client';
import '@vitest/snapshot/manager';
import 'vite-node/server';
import 'node:worker_threads';
import 'node:fs';
import 'chai';

declare function createVitest(mode: VitestRunMode, options: UserConfig, viteOverrides?: UserConfig$1, vitestOptions?: VitestOptions): Promise<Vitest>;

declare function VitestPlugin(options?: UserConfig, ctx?: Vitest): Promise<Plugin[]>;

interface CLIOptions {
    allowUnknownOptions?: boolean;
}
declare function parseCLI(argv: string | string[], config?: CLIOptions): {
    filter: string[];
    options: CliOptions;
};

declare function registerConsoleShortcuts(ctx: Vitest): () => void;

interface GlobalSetupContext {
    config: ResolvedConfig;
    provide: <T extends keyof ProvidedContext>(key: T, value: ProvidedContext[T]) => void;
}

declare function createMethodsRPC(project: WorkspaceProject): RuntimeRPC;

declare class BaseSequencer implements TestSequencer {
    protected ctx: Vitest;
    constructor(ctx: Vitest);
    shard(files: WorkspaceSpec[]): Promise<WorkspaceSpec[]>;
    sort(files: WorkspaceSpec[]): Promise<WorkspaceSpec[]>;
}

export { BaseSequencer, type GlobalSetupContext, TestSequencer, Vitest, VitestPlugin, WorkspaceProject, WorkspaceSpec, createMethodsRPC, createVitest, parseCLI, registerConsoleShortcuts };
