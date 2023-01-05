import { get, writable } from 'svelte/store';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ parent }) => {
	const data = await parent();
	console.log('foo/bar/+page.ts', data);
};
