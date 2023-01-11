import { test, expect, page } from '@playwright/test';
import {GoogleForm} from './google.spec';

test('test', async ({ page }) => {
const boj = new GoogleForm();
boj.funPut();

});