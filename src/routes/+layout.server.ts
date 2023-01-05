import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ request, setHeaders, locals }) => {
	console.log('loading data from routes/+layout.server.ts', locals);
	const username = locals.token;
	if (username) {
		return {
			user: {
				name: username,
			},
		};
	}

	return {
		user: null,
	};
};
