import { LoaderFunctionArgs } from '@remix-run/node';
import { Link } from '@remix-run/react';

export default function Reviews() {
	return (
		<>
			<h1>Reviews</h1>
		</>
	);
}
export const handle = {
	breadcrumb: ({ params: { username } }: LoaderFunctionArgs) => (
		<Link
			prefetch="intent"
			className="ml-4 text-sm  text-gray-400 hover:text-gray-500"
			to={`/${username}/profile/reviews`}
		>
			Reviews
		</Link>
	),
};
