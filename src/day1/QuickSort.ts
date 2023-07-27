const qs = (arr: number[], low: number, hi: number) => {
	console.log(`low ${low} is higher then ${hi}?  ${low >= hi}`)
	if (low >= hi) {
		console.log('Finish the QuickSort')
		return;
	}

	console.log("Is not Higher, so, let's do partition")
	const pivotIdx = partition(arr, low, hi);
	console.log(`Let's do QS again with arr (${arr}), low (${low}) and higher as pivotIdx as (${pivotIdx - 1})`)
	qs(arr, low, pivotIdx - 1)
	qs(arr, pivotIdx + 1, hi)
}

const partition = (arr: number[], low: number, hi: number): number => {
	console.log(`Partion starting for ARR: ${arr}, with low ${low} and hi ${hi}`);

	const pivot = arr[hi];
	console.log(`Pivot will be ${pivot}`)
	let idx = low - 1;
	console.log(`Idx will be ${idx}`)

	for (let i = low; i < hi; ++i) {
		console.log(`Running Arr ${arr[i]} in index ${i} `)
		console.log(`Arr[i] (${arr[i]}) is smaller then Pivot (${pivot})? ${arr[i] < pivot} `)
		if (arr[i] < pivot) {
			idx++;
			console.log(`Let's increase our IDX (${idx})`);
			const temp = arr[i];
			console.log(`Let's separate temp (${temp})`);
			arr[i] = arr[idx];
			console.log(`Let's swap arr[i](${arr[i]}) with arr[idx](${arr[idx]})`);
			arr[idx] = temp;
			console.log(`Let's swap arr[idx](${arr[idx]}) with temp(${temp})`);
		}
	}
	console.log("Arr[I] smaller then pivot...")
	idx++;

	arr[hi] = arr[idx];
	console.log(`Let's swap arr[hi](${arr[hi]}) with arr[idx](${arr[idx]})`);
	arr[idx] = pivot;
	console.log(`Let's swap arr[idx](${arr[idx]}) with pivot(${pivot})`);
	console.log(`Let's return idx ${idx}`);
	return idx;

};

export default function quick_sort(arr: number[]): void {
	console.log("Starting with array -> ", arr);
	qs(arr, 0, arr.length - 1);
}
