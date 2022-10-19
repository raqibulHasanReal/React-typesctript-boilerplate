export class Common {
	constructor(private itemsPerPage: number) {}

	private getPageOffset(page: number) {
		return (page - 1) * this.itemsPerPage;
	}

	protected getPaginateURL(page: number, url: string) {
		const offset = this.getPageOffset(page);
		const params = new URLSearchParams();

		if (offset === 0) {
			params.append('limit', this.itemsPerPage.toString());
			return `${url}?${params.toString()}`;
		}

		if (offset > 0) {
			params.append('offset', offset.toString());
			params.append('limit', this.itemsPerPage.toString());
			return `${url}?${params.toString()}`;
		}

		return url;
	}
}
