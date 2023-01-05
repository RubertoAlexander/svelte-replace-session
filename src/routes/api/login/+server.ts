import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = () => {
	// login
	return json({
		user: {
			name: 'test',
		},
	});
};
