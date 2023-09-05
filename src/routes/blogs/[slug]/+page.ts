import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const slug = params.slug;

	const allSlugs = import.meta.glob('../../../posts/*.md', { eager: true });
	if (Object.keys(allSlugs).length === 0) throw error(404, `No posts found`);

	const allSlugsArray = Object.keys(allSlugs).map((slug) => {
		return slug.split('/').at(-1)?.replace('.md', '');
	});

	if (!allSlugsArray.includes(slug)) {
		throw error(404, `Post ${slug} not found`);
	} else {
		try {
			const post = await import(`../../../posts/${slug}.md`);

			return {
				content: post.default,
				meta: post.metadata
			};
		} catch (e) {
			console.log(e);
			throw error(404, `Error loading post ${slug}`);
		}
	}
}
