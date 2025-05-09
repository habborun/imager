import { config } from "dotenv"

import { Application } from './app';
import { NitroCore } from './core';

config()

const core = new NitroCore();
const instance = new Application(core);

async function init(): Promise<void> {
    try {
        await instance.init();
    } catch (err) {
        console.error(err.message || err);
        core.dispose();
    }
}

init();
