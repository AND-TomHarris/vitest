import v8 from 'node:v8';
import { c as createForksRpcOptions, u as unwrapForksConfig } from '../vendor/utils.GbToHGHI.js';
import { r as runVmTests } from '../vendor/vm.o1IruPAo.js';
import '@vitest/utils';
import 'node:vm';
import 'node:url';
import 'pathe';
import '../chunks/runtime-console.Iloo9fIt.js';
import 'node:stream';
import 'node:console';
import 'node:path';
import '../vendor/date.Ns1pGd_X.js';
import '../vendor/execute.27Kk4lQF.js';
import 'vite-node/client';
import 'vite-node/utils';
import '@vitest/utils/error';
import '../path.js';
import 'node:fs';
import '../vendor/base.N3JkKp7j.js';
import 'node:module';
import 'vite-node/constants';
import '../vendor/index.ir9i0ywP.js';
import 'std-env';
import '@vitest/runner/utils';
import '../vendor/global.CkGT_TMy.js';

class ForksVmWorker {
  getRpcOptions() {
    return createForksRpcOptions(v8);
  }
  async runTests(state) {
    const exit = process.exit;
    state.ctx.config = unwrapForksConfig(state.ctx.config);
    try {
      await runVmTests(state);
    } finally {
      process.exit = exit;
    }
  }
}
var vmForks = new ForksVmWorker();

export { vmForks as default };
