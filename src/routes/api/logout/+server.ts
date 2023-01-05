import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = () => {
	// logout
	return new Response('ok');
};
