export function cleanUrl(url: string | undefined): string {
	if (!url) return '';
	return url.replace('http://', '');
}
